import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";


const CategoryWiseProducts = ({ response }) => {
    const { title } = useParams();
    const products = Object.values(response.Products);
    const categories = Object.values(response.Categories)
    var filteredProducts = []
    var otherProducts = []
    for (var i = 0; i < products.length; i++) {
        if (products[i].category === title) {
            filteredProducts.push(products[i])
        } else {
            otherProducts.push(products[i])
        }
    }
    var banner;
    for ( i = 0; i < categories.length; i++) {
        if (categories[i].title === title) banner = categories[i].banner
    }

    const productList = () => {

        const paperStyles = {
            // padding: 2,
            // margin: 2,
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0)',
            backgroundColor: '#F5F0FF',
        };

        const linkStyles = {
            textDecoration: 'none',
            color: 'inherit',
            outline: 'none',
        };


        return (

            <div>

                <Typography variant="h6" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
                    {title}
                </Typography>

                <Grid container sx={{ justifyContent: 'center' }}>
                    {filteredProducts.map((product, index) => (
                        <Grid item key={index} sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', flexBasis: '25%', padding: '10px' }}>
                            <Link to={`/product/${product.productID}`} key={index} style={linkStyles}>
                                <Paper sx={paperStyles} style={{ margin: 6, alignItems: "center", textAlign: "center", padding: 2 }}>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{product.title}</div>
                                    <div style={{ marginBottom: '10px' }}>{product.price}</div>
                                    <div>{product.description}</div>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}

                </Grid>

            </div>

        );


    };

    const otherProductsDiv = () => {

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
        );
    }

    return (
        <div>
            <div>
                <div >
                    <img src={banner} alt={'banner'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {productList()}
            </div>
            {otherProductsDiv()}

        </div>
    );
}

export default CategoryWiseProducts;