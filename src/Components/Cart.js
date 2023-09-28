import { Typography, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
import { db, auth } from "./Firebase";
import { ref, onValue } from "firebase/database";
import { useEffect } from "react";

const CartPage = ({ response }) => {

    useEffect(() => {

        if (auth.currentUser) {
            //getting user cart objects from DB
            const userRef = ref(db, 'Users/' + auth.currentUser.uid);

            const unsubscribe = onValue(userRef, (snapshot) => {
                const userData = snapshot.val();
                if (userData) {
                    const cartObjects = userData.cart_objects || [];
                    console.log('User Cart Objects:', cartObjects);
                } else {
                    console.log('User not found.');
                }
            }, {
                onlyOnce: true
            });

            return () => {
                unsubscribe();
            }
        }

    }, []);





    const cartResponse = [
        {
            "prod_id": "prod4",
            "count": 2
        },
        {
            "prod_id": "prod2",
            "count": 1
        },
        {
            "prod_id": "prod3",
            "count": 3
        },
        {
            "prod_id": "prod1",
            "count": 1
        },
        {
            "prod_id": "prod5",
            "count": 2
        }
    ];
    const products = Object.values(response.Products);
    var finalProducts = []
    var prodCartCount = []
    var price = parseInt(0)


    for (const mproduct in products) {
        for (const cproduct in cartResponse) {
            if (products[mproduct].productID === cartResponse[cproduct].prod_id) {
                finalProducts.push(products[mproduct])
                prodCartCount.push(cartResponse[cproduct].count)
                price += parseInt(products[mproduct].price)
            }
        }
    }

    // console.log("printing from cart", finalProducts)

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


    return (
        <div className="main-layout">

            <div style={{ display: "flex", flexDirection: "column", flex: 1, marginTop: '100px' }}>

                <Typography
                    variant="h6"
                    component="h2"
                    align="left"
                    gutterBottom
                    sx={{ margin: 2 }}
                >
                    Your Cart
                </Typography>

                <Grid container sx={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
                    {finalProducts.map((product, index) => (
                        <Grid item key={index} sx={{ borderBottom: "1px solid #ccc" }}>
                            <Link to={`/product/${product.productID}`} key={index} style={linkStyles}>
                                <Paper sx={paperStyles}>

                                    <img src={product.image} alt={product.title} style={{ width: '80px', height: '80px' }} />
                                    <div style={{ marginLeft: '40px', display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                                        <div>{product.title}</div>
                                        <div>{product.price}</div>
                                    </div>

                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>

            </div>

            {/* <div style={{ border: "1px solid #ccc", margin: '30px', borderColor: 'black' }} /> */}

            <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", textAlign: "center" }}>
                <h3>Sub Total : {price}</h3>
                <div>delivery charges or any available offers related information will be shown here at this layout</div>
                <Link to={`/checkout`} style={linkStyles}>
                    <Button sx={{ margin: '20px' }} variant="contained">Checkout</Button>
                </Link>
            </div>

        </div>
    );
}

export default CartPage;