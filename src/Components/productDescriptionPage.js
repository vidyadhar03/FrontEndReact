import React from 'react';
import { useParams } from 'react-router-dom';
import './PDP.css';
import { Button, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const ProductDescriptionPage = ({ response }) => {
  const { productId } = useParams();

  console.log(productId)

  const products = Object.values(response.Products);
  const product = products.find((product) => product.productID === productId);
  const samecat_prod = []
  for (var i = 0; i < products.length; i++) {
    if (products[i].productID !== product.productID && products[i].category === product.category) {
      samecat_prod.push(products[i])
    }
  }

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

      <div className='product-content'>

        <div className='product-img'>
          <img src={product.image} alt={product.title} style={{ objectFit: "cover" }} />
        </div>

        <div className='product-details'>

          <h2>{product.title}</h2>
          <h4>{product.price} Rs.</h4>
          <Button sx={{ color: 'white', marginBottom: '20px' }} variant='contained'>Add To Cart</Button>
          <div>{product.info}</div>


        </div>

      </div>

      <div style={{marginTop:'40px'}}>
        
        <Typography variant="h6" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
          Suggested products
        </Typography>

        <Grid container sx={{ overflowX: 'scroll' }}>
          <Grid item sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            {samecat_prod.map((product, index) => (
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

};

export default ProductDescriptionPage;
