import React from 'react';
import './App.css';
import { Container, Grid, Paper, Typography } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import ProductDescriptionPage from './Components/productDescriptionPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const App = () => {

  const response = {
    "Website_description": {
      "description": "String",
      "imageURL": "String"
    },
    "Products": {
      "product1": {
        "category": "Lights",
        "count": 45,
        "description": "Very beautiful illuminating blue lights for your room !",
        "famous": true,
        "image": "https://picsum.photos/200",
        "price": "650 rs",
        "productID": "prod1",
        "title": "Illumination lights",
        "video": "String"
      },
      "product2": {
        "category": "Toys",
        "count": 55,
        "description": "Very creative toys to play with !",
        "famous": false,
        "image": "https://picsum.photos/200",
        "price": "450 rs",
        "productID": "prod2",
        "title": "Zinger toy",
        "video": "String"
      },
      "product3": {
        "category": "Lights",
        "count": 45,
        "description": "Very beautiful illuminating blue lights for your room !",
        "famous": true,
        "image": "https://picsum.photos/200",
        "price": "650 rs",
        "productID": "prod3",
        "title": "Illumination lights",
        "video": "String"
      },
      "product4": {
        "category": "Toys",
        "count": 55,
        "description": "Very creative toys to play with !",
        "famous": false,
        "image": "https://picsum.photos/200",
        "price": "450 rs",
        "productID": "prod4",
        "title": "Zinger toy in the ground",
        "video": "String"
      }
    },
    "Categories": {
      "category1": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/200",
        "title": "Printed Shirts"
      },
      "category2": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/200",
        "title": "Board games for fun"
      },
      "category3": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/200",
        "title": "Printed helmets"
      },
      "category4": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/200",
        "title": "shots all around"
      },
      "category5": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/200",
        "title": "Trippy posters"
      },
      "category6": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/200",
        "title": "crazy robots"
      }
    }
  };

  const ToolbarComponent = () => {
    return (
      <AppBar position="static" sx={{ backgroundColor: '#001f3f' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Company Website
          </Typography>
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  };

  const FooterComponent = () => {

    const footerStyles = {
      backgroundColor: '#f5f5f5',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
    };
  
    const sectionStyles = {
      flex: '1 0 33%',
      textAlign: 'center',
    };
  
    const titleStyles = {
      borderBottom: '1px solid #ccc',
      paddingBottom: '5px',
      marginBottom: '10px',
      marginRight: '10px'
    };
  
    const linkStyles = {
      textDecoration: 'none',
      color: 'inherit',
      listStyle: 'none',
    };

    const ulStyles = {
      padding: 0,
      listStyleType: 'none', // Remove default bullets
    };
  
    return (
      <footer style={footerStyles}>
        <div style={sectionStyles}>
          <h3 style={titleStyles}>FAQ & Policy</h3>
          <ul style={ulStyles}>
            <li>
              <Link to="/faq" style={linkStyles}>Privacy Policy</Link>
            </li>
            <li>
              <Link to="/policy" style={linkStyles}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div style={sectionStyles}>
          <h3 style={titleStyles}>Company</h3>
          <ul style={ulStyles}>
            <li>
              <Link to="/about" style={linkStyles}>About Us</Link>
            </li>
            <li>
              <Link to="/contact" style={linkStyles}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div style={sectionStyles}>
          <h3 style={titleStyles}>Social Links</h3>
          <ul style={ulStyles}>
            <li>
              <a href="https://www.facebook.com" style={linkStyles} target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com" style={linkStyles} target="_blank" rel="noopener noreferrer">Gmail</a>
            </li>
          </ul>
        </div>
      </footer>
    );

  }

  // const exploreProductsSection = () => {

  //   const products = Object.values(response.Products);

  //   const paperStyles = {
  //     width: 200,
  //     minWidth: 200,
  //     margin: 2,
  //     padding: 2,
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //     textAlign: 'center',
  //     boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
  //   };
  
  //   const theme = createTheme({
  //     palette: {
  //       mode: 'light',
  //       primary: {
  //         main: '#2196f3',
  //       },
  //     },
  //   });

  //   return(
  //     <ThemeProvider theme={theme}>
  //     <Container maxWidth="lg" sx={{marginTop:4}}>
  //       <Typography variant="h6" component="h2" align="center" gutterBottom >
  //         Explore our famous products
  //       </Typography>
  //       <Grid container spacing={2} sx={{ overflowX: 'auto', alignItems:'center' }}>
  //         <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'nowrap' }}> 
  //           {products.map((product, index) => (
  //             <Paper key={index} sx={paperStyles}>
  //               <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  //               <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{product.title}</div>
  //               <div style={{ marginBottom: '10px' }}>{product.price}</div>
  //               <div>{product.description}</div>
  //             </Paper>
  //           ))}
  //         </Grid>
  //       </Grid>
  //     </Container>
  //   </ThemeProvider>
  //   );

  // };  

  const exploreProductsSectionnew = () => {
    const products = Object.values(response.Products);

    const paperStyles = {
      margin:2,
      padding:2,
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

    return(
      <Container maxWidth="lg" sx={{marginTop:4}}>
        <Typography variant="h6" component="h2" align="center" gutterBottom >
          Explore our famous products
        </Typography>
        <Grid container spacing={2} sx={{ overflowX: 'auto', alignItems:'center' }}>
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
      </Container>
    );
  };

  const shopByCategorySectionnew = () => {

    const categories = Object.values(response.Categories);

    const paperStyles = {
      padding: 2,
      margin: 2,
      alignItems: 'center',
      textAlign: 'center',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    };

    return (
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h6" component="h2" align="center" gutterBottom>
          Shop by Category
        </Typography>
        <Grid container>
          {categories.map((category, index) => (
            <Grid item key={index}>
              <Paper sx={paperStyles}>
                <img src={category.image} alt={category.title} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                <Typography variant="subtitle1" component="div" style={{ marginTop: 8, fontSize: '14px', fontWeight: 'bold' }}>
                  {category.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    );


  };

  const HomePageContent = () => {
    return (
      <>
        {exploreProductsSectionnew()}
        {shopByCategorySectionnew()}
      </>
    );
  };


  return (
    <Router>
      <div>
        {ToolbarComponent()}
        <Routes>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/product/:productId" element={<ProductDescriptionPage response={response} />} />
        </Routes>
        {FooterComponent()}
      </div>
    </Router>
  );

};


export default App;
