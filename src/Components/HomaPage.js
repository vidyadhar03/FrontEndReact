import { Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const HomaPage = ({ response }) => {

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
        <>
            {exploreProductsSectionnew()}
            {shopByCategorySectionnew()}
        </>
    );
}

export default HomaPage;