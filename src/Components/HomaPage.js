import { Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import './homepage.css'

const HomaPage = ({ response }) => {

    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
    };

    const heroStuff = () => {

        const { Hero_stuff: heroStuffData } = response;
        const heroProd = heroStuffData.hero_prod;
        const heroprodID = heroProd.productID;
        const heroCategories = heroStuffData.hero_categories;
        const { hero_cat1: hero_cat1 } = heroCategories;
        const { hero_cat2: hero_cat2 } = heroCategories;

        return (
            <div className="herostuff-container">
                <div className="herostuff-left">
                    <div className="image-container-left">
                        <Link to={`/product/${heroprodID}`} style={linkStyles}>
                            <img
                                className="background-image"
                                src={heroProd.image} alt={heroProd.title}
                            />
                            <div className="overlay">
                                <p className="centered-text">{heroProd.title}</p>
                                <button className="centered-button">Shop Now</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="herostuff-right">
                    <Link to={`/category/${hero_cat1.title}`} style={linkStyles}>
                        <div className="image-container-right">
                            <img
                                className="background-image"
                                src={hero_cat1.image} alt={hero_cat1.title}
                            />
                            <div className="overlay">
                                <p className="centered-text">{hero_cat1.title}</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/category/${hero_cat2.title}`} style={linkStyles}>
                        <div className="image-container-right">
                            <img
                                className="background-image"
                                src={hero_cat2.image} alt={hero_cat2.title}
                            />
                            <div className="overlay">
                                <p className="centered-text">{hero_cat2.title}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }

    const exploreProductsSectionnew = () => {
        const products = Object.values(response.Products);

        const paperStyles = {
            margin: 1,
            padding: 1,
            minWidth: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0)',
            backgroundColor: '#F5F0FF',
        };

        return (
            <div>
                <Typography variant="h5" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
                    Explore our famous products
                </Typography>
                <Grid container sx={{ overflowX: 'scroll' }}>
                    <Grid item sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                        {products.map((product, index) => (
                            <Link to={`/product/${product.productID}`} key={index} style={linkStyles}>
                                <Paper key={index} sx={paperStyles}>
                                    <img src={product.image} alt={product.title} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
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
    };

    const shopByCategorySectionnew = () => {

        const categories = Object.values(response.Categories);

        const paperStyles = {
            padding: 2,
            margin: 2,
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0)',
            backgroundColor: '#F5F0FF',
        };

        return (
            <div sx={{ marginTop: 4 }}>
                <Typography variant="h5" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
                    Shop by Category
                </Typography>
                <Grid container sx={{ justifyContent: "center" }}>
                    {categories.map((category, index) => (
                        <Grid item key={index}>
                            <Link to={`/category/${category.title}`} key={index} style={linkStyles}>
                                <Paper sx={paperStyles} style={{ margin: 6, alignItems: "center", textAlign: "center", padding: 2 }}>
                                    <img src={category.image} alt={category.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                    <Typography variant="subtitle1" component="div" style={{ marginTop: 8, fontSize: '14px', fontWeight: 'normal' }}>
                                        {category.title}
                                    </Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );


    };

    return (
        <div>
            <div>
                <img src={"https://picsum.photos/230"} alt={'banner'} className="top-banner" />
            </div>
            {heroStuff()}
            {exploreProductsSectionnew()}
            {shopByCategorySectionnew()}
        </div>
    );
}

export default HomaPage;