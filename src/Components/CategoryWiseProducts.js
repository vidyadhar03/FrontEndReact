import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import DataContext from './DataContext';
import Loader from './Loader';

const CategoryWiseProducts = () => {
    const response = useContext(DataContext);
    console.log(response)
    const { title } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!response) {
        // Render a loading indicator or return null
        return (
            <div style={{ width: "100%", height: "1200px", justifyContent: "center", alignItems: "center", position: "relative" }}>
                <Loader />
            </div>
        )
    }

    const products = Object.values(response.Products);
    const categories = Object.values(response.Categories)

    const { Hero_stuff: heroStuffData } = response;
    const heroProd = heroStuffData.hero_prod;
    const heroCategories = heroStuffData.hero_categories;
    products.push(heroProd)
    categories.push(heroCategories.hero_cat1)
    categories.push(heroCategories.hero_cat2)

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
    var description;
    for (i = 0; i < categories.length; i++) {
        if (categories[i].title === title) {
            banner = categories[i].banner
            description = categories[i].description
            break
        }
    }

    const productList = () => {

        const paperStyles = {
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
                    <div style={{ fontSize: "16px", marginTop: "16px", fontFamily: "sans-serif" }}>
                        {description}
                    </div>
                </Typography>

                <Grid container sx={{ justifyContent: 'center' }}>
                    {filteredProducts.map((product, index) => (
                        <Grid item key={index} sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', flexBasis: '25%', padding: '10px' }}>
                            <Link to={`/product/${product.productID}`} key={index} style={linkStyles}>
                                <Paper sx={paperStyles} style={{ margin: 6, alignItems: "center", textAlign: "center", padding: 2 }}>
                                    <img src={product.image[0]} alt={product.title} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
                                    <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0' }}>{product.title}</div>
                                    <div style={{ marginBottom: '10px', color: 'grey', fontWeight: 'bold' }}>₹ {product.price}</div>
                                    <div style={{ fontSize: '16px' }}>{product.description}</div>
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
                <Grid container sx={{ overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
                    <Grid item sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                        {otherProducts.map((product, index) => (
                            <Link to={`/product/${product.productID}`} key={index} style={linkStyles}>
                                <Paper key={index} sx={paperStyles}>
                                    {/* <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                    <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{product.title}</div>
                                    <div style={{ marginBottom: '10px' }}>{product.price}</div>
                                    <div>{product.description}</div> */}
                                    <img src={product.image[0]} alt={product.title} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
                                    <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0' }}>{product.title}</div>
                                    <div style={{ marginBottom: '10px', color: 'grey', fontWeight: 'bold' }}>₹ {product.price}</div>
                                    <div style={{ fontSize: '16px' }}>{product.description}</div>
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
                    <img src={banner} alt={'banner'} style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
                </div>
                {productList()}
            </div>
            {otherProductsDiv()}

        </div>
    );
}

export default CategoryWiseProducts;