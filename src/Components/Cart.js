import { Typography, Grid, Paper, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import { db, auth } from "./Firebase";
import { ref, update, get, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import QuantitySelector from "./QuantitySelector";

const CartPage = ({ response }) => {

    const [cartObjects, setCartObjects] = useState([]);
    const products = Object.values(response.Products);
    const { Hero_stuff: heroStuffData } = response;
    const heroProd = heroStuffData.hero_prod;
    products.push(heroProd)
    const navigate = useNavigate();
    var finalProducts = []
    var prodCartCount = []

    useEffect(() => {
        const user = auth.currentUser;

        if (user) {
            // User is authenticated, fetch cart objects from DB
            const userRef = ref(db, 'Users/' + user.uid);
            const unsubscribe = onValue(userRef, (snapshot) => {
                const userData = snapshot.val();
                if (userData) {
                    const cartObjectss = userData.cart_objects || [];
                    setCartObjects(cartObjectss);
                    console.log('User Cart Objects:', cartObjectss);
                } else {
                    console.log('User not found.');
                }
            }, {
                onlyOnce: true
            });

            return () => {
                unsubscribe();
            };
        } else {
            // User is not authenticated, fetch cart objects from local storage
            const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCartObjects(storedCart);
        }

    }, []);

    var totalPrice = parseInt(0)
    for (const mproduct in products) {
        for (const cproduct in cartObjects) {
            if (products[mproduct].productID === cartObjects[cproduct].prodId) {
                finalProducts.push(products[mproduct])
                prodCartCount.push(cartObjects[cproduct].count)
                totalPrice += parseInt(products[mproduct].price * cartObjects[cproduct].count)
            }
        }
    }

    console.log(cartObjects)



    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
    };

    const paperStyles = {
        margin: 1,
        padding: 1,
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0)',
        backgroundColor: '#F5F0FF',
    };

    const divtextStyle = {
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#333333',
        cursor: "pointer"
    };

    const handleItemClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleRemoveFromCart = async (productId) => {
        // Handle removing the item from the cart
        try {
            const user = auth.currentUser;
            if (user) {
                const userId = user.uid;
                const userRef = ref(db, `Users/${userId}`);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    const cartObjects = userData.cart_objects || [];
                    const updatedCartObjects = cartObjects.filter(item => item.prodId !== productId);
                    await update(userRef, { cart_objects: updatedCartObjects });
                    console.log("Item removed from the cart.");
                }
            } else {
                // User is not authenticated, remove the item from local storage
                const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
                const updatedCart = storedCart.filter(item => item.prodId !== productId);
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                console.log("Item removed from local cart.");
            }

            // Update the cart objects displayed in the UI
            setCartObjects(prevCart => prevCart.filter(item => item.prodId !== productId));
        } catch (error) {
            console.error("Error removing item from the cart:", error);
        }
    };

    const handleQuantityChange = (productId, newQuantity) => {
        // Find the index of the product in the cartObjects array
        const productIndex = cartObjects.findIndex(item => item.prodId === productId);

        if (productIndex !== -1) {
            // Clone the cartObjects array to avoid modifying the state directly
            const updatedCart = [...cartObjects];

            // Update the quantity of the specific item
            updatedCart[productIndex].count = newQuantity;

            // Update the state with the new cartObjects array
            setCartObjects(updatedCart);

            // Update the cart in local storage if the user is not authenticated
            if (!auth.currentUser) {
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            } else {
                // Update the cart in the database if the user is authenticated
                const userRef = ref(db, `Users/${auth.currentUser.uid}`);
                update(userRef, { cart_objects: updatedCart })
                    .then(() => {
                        console.log("Item quantity updated in the cart.");
                    })
                    .catch((error) => {
                        console.error("Error updating item quantity in the cart:", error);
                    });
            }
        }
    };

    return (
        <div className="main-layout">
            {cartObjects.length === 1 ? (
                <div style={{marginTop:"100px",display:"flex",flexDirection:"column",textAlign:"center",alignContent:"center"}}>
                    <Typography variant="h6" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
                        Your Cart is Empty
                    </Typography>
                    <p>Add items to checkout from here!</p>
                </div>
            ) : (
                <div>
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, marginTop: "100px" }}>
                        <Typography variant="h6" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
                            Your Cart
                        </Typography>

                        <Grid container sx={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
                            {finalProducts.map((product, index) => (
                                <Grid item key={index} sx={{ borderBottom: "1px solid #ccc" }}>
                                    <Paper sx={paperStyles}>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            style={{ width: "80px", height: "80px", cursor: "pointer" }}
                                            onClick={() => handleItemClick(product.productID)}
                                        />
                                        <div style={{ marginLeft: "40px", display: "flex", flexDirection: "column" }}>
                                            <div style={divtextStyle} onClick={() => handleItemClick(product.productID)}>
                                                {product.title}
                                            </div>
                                            <div>
                                                <div
                                                    style={{ color: "grey", fontWeight: "bold", marginTop: "4px", marginBottom: "4px", cursor: "pointer" }}
                                                    onClick={() => handleItemClick(product.productID)}
                                                >
                                                    ₹ {product.price}
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <QuantitySelector
                                                    quantity={prodCartCount[index]}
                                                    onQuantityChange={(newQuantity) => handleQuantityChange(product.productID, newQuantity)}
                                                    productId={product.productID}
                                                />
                                                <button
                                                    onClick={() => handleRemoveFromCart(product.productID)}
                                                    style={{ cursor: "pointer", border: "none", background: "transparent", color: "red" }}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", textAlign: "center" }}>
                        <h3>Sub Total : {totalPrice}</h3>
                        <div>delivery charges or any available offers related information will be shown here at this layout</div>
                        <Link to={`/checkout`} style={linkStyles}>
                            <Button sx={{ margin: "20px" }} variant="contained">
                                Checkout
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;