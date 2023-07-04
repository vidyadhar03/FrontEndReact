import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";


const CategoryWiseProducts = ({ response }) => {
    const { title } = useParams();
    const products = Object.values(response.Products);
    var filteredProducts = []
    var otherProducts = []
    for (var i = 0; i < products.length; i++) {
        if (products[i].category === title){
            filteredProducts.push(products[i])
        }else{
            otherProducts.push(products[i])
        }
    }

    const paperStyles = {
        margin: 2,
        padding: 2,
        minWidth: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    };

    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
    };


    return (
        <Container maxWidth="lg" sx={{
            marginTop: 4
        }}>
            <div>
            <Typography variant="h6" component="h1" align="center" gutterBottom >
                Products Under {title}
            </Typography>
            <Grid container spacing={2}>
                <Grid item sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {filteredProducts.map((product, index) => (
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
            <div>
            <Typography variant="h6" component="h1" align="center" gutterBottom >
                Other products you can check
            </Typography>
            <Grid container spacing={1}>
                <Grid item sx={{ display: 'flex', flexWrap: 'nowrap', overflowX:'auto' }}>
                    {otherProducts.map((product, index) => (
                        <Link to={`/product/${product.productID}`} key={index} style={linkStyles}>
                            <Paper key={index} sx={paperStyles}>
                                <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                <div style={{ fontSize: '14px', fontWeight: 'bold', margin: '10px 0' }}>{product.title}</div>
                                <div style={{ marginBottom: '10px',fontSize: '10px' }}>{product.price}</div>
                                <div style={{fontSize: '8px' }}>{product.description}</div>
                            </Paper>
                        </Link>
                    ))}
                </Grid>
            </Grid>
            </div>
        </Container>
    );
}

export default CategoryWiseProducts;