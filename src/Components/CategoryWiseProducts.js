import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";


const CategoryWiseProducts = ({ response }) => {
    const { title } = useParams();
    const products = Object.values(response.Products);
    var filteredProducts = []
    var otherProducts = []
    for (var i = 0; i < products.length; i++) {
        if (products[i].category === title) {
            filteredProducts.push(products[i])
        } else {
            otherProducts.push(products[i])
        }
    }

    const paperStyles = {
        margin: 1,
        padding: 2,
        minWidth: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0)',
        backgroundColor: '#F5F0FF',
        // backgroundColor:'#ccc'
    };

    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
    };

    return (
        <div>
            <div>
                <Typography variant="h6" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
                    {title}
                </Typography>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <div style={{width:'50%'}}>
                    <Grid item sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        {filteredProducts.map((product, index) => (
                            <Link to={`/product/${product.productID}`} key={index} style={linkStyles}>
                                <Paper key={index} sx={paperStyles}>
                                    <div>
                                        <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{product.title}</div>
                                    <div style={{ marginBottom: '10px' }}>{product.price}</div>
                                    <div>{product.description}</div>
                                </Paper>
                            </Link>
                        ))}
                    </Grid>
                    </div>
                </Grid>
            </div>
            <div>
                <Typography variant="h6" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
                    Other Products
                </Typography>
                <Grid container sx={{ overflowX: 'scroll' }}>
                    <Grid item sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                        {otherProducts.map((product, index) => (
                            <Link to={`/product/${product.productID}`} key={index} style={linkStyles}>
                                <Paper key={index} sx={paperStyles}>
                                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                    <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{product.title}</div>
                                    <div style={{ marginBottom: '10px' }}>{product.price}</div>
                                    <div>{product.description}</div>
                                </Paper>
                            </Link>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default CategoryWiseProducts;