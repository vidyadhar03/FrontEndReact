import { Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import './homepage.css'

const HomaPage = ({ response }) => {

    const heroStuff = () => {
        return (
            <div className="herostuff-container">
                <div className="herostuff-left">
                    <div className="image-container-left">
                        <img
                            className="background-image"
                            src={'https://picsum.photos/235'} alt={"Trippy Board Game"}
                        />
                        <div className="overlay">
                            <p className="centered-text">Personlaised Board Game</p>
                            <button className="centered-button">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="herostuff-right">
                    <div className="image-container-right">
                        <img
                            className="background-image"
                            src={'https://picsum.photos/236'} alt={"Trippy Board Game"}
                        />
                        <div className="overlay">
                            <p className="centered-text">Trippy Tees</p>
                        </div>
                    </div>
                    <div className="image-container-right">
                        <img
                            className="background-image"
                            src={'https://picsum.photos/237'} alt={"Trippy Board Game"}
                        />
                        <div className="overlay">
                            <p className="centered-text">Lights for the space</p>
                        </div>
                    </div>
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

        const linkStyles = {
            textDecoration: 'none',
            color: 'inherit',
            outline: 'none',
        };

        return (
            <div>
                <Typography variant="h6" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
                    Explore our famous products
                </Typography>
                <Grid container sx={{ overflowX: 'scroll' }}>
                    <Grid item sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                        {products.map((product, index) => (
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

        const linkStyles = {
            textDecoration: 'none',
            color: 'inherit',
            outline: 'none',
        };

        return (
            <div sx={{ marginTop: 4 }}>
                <Typography variant="h6" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
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