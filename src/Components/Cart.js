import { Typography, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";

const CartPage = ({ response }) => {


    const price = "100 rs"

    const products = Object.values(response.Products);

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

            <div style={{display:"flex",flexDirection:"column",flex:1}}>

                <Typography
                    variant="h6"
                    component="h2"
                    align="left"
                    gutterBottom
                >
                    Your Cart
                </Typography>

                <Grid container sx={{ justifyContent: "center",display:"flex",flexDirection:"column"}}>
                    {products.map((product, index) => (
                        <Grid item key={index} sx={{borderBottom: "1px solid #ccc"}}>
                            <Link to={`/product/${product.productID}`} key={index} style={linkStyles}>
                                <Paper sx={paperStyles}>

                                    <img src={product.image} alt={product.title} style={{ width: '80px', height: '80px' }} />
                                    <div style={{marginLeft:'40px',display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
                                        <div>{product.title}</div>
                                        <div>{product.price}</div>
                                    </div>

                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>

            </div>

            <div style={{border: "1px solid #ccc",margin:'30px',borderColor:'black'}}/>

            <div style={{display:"flex",flexDirection:"column",flex:1,justifyContent:"center",textAlign:"center"}}>
                <h3>Sub Total : {price}</h3>
                <div>delivery charges or any available offers related information will be shown here at this layout</div>
                <Button sx={{margin:'20px'}} variant="contained">Checkout</Button>
            </div>

        </div>
    );
}

export default CartPage;