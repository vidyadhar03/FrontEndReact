import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PDP.css';
import { Button, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import { addToCart } from "./CartHandler";
import Loader from './Loader';

const ProductDescriptionPage = ({ response }) => {

  //loader
  const [isLoading, setIsLoading] = useState(false);
  const enableLoader = () => {
    setIsLoading(true);
  };
  const disableLoader = () => {
    setIsLoading(false);
  };

  const { productId } = useParams();
  const products = Object.values(response.Products);

  const { Hero_stuff: heroStuffData } = response;
  const heroProd = heroStuffData.hero_prod;
  products.push(heroProd)

  var product = products.find((product) => product.productID === productId);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

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

  const LineWithOr = () => {
    return (
      <div className="line-with-or-container">
        <div className="line"></div>
        <div className="or">OR</div>
        <div className="line"></div>
      </div>
    );
  };

  const handleAddToCart = () => {
    enableLoader()
    addToCart(product.productID, quantity, () => {
      // This callback will be called when the item is added to the cart.
      // You can disable the loader here.
      disableLoader();
    });
  };

  const productContent = () => {
    return (
      <div className='product-content'>

        {isLoading && <Loader />}

        <div className='product-img'>
          <img src={product.image} alt={product.title} style={{ objectFit: "cover" }} />
        </div>

        <div className='product-details'>

          <h2>{product.title}</h2>
          <h3><div style={{ marginBottom: '10px', color: 'grey', fontWeight: 'bold' }}>₹ {product.price}</div></h3>
          <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} productId={product.productID} />
          <Button sx={{ color: 'white', marginBottom: '10px' }} variant='contained' onClick={handleAddToCart}>Add To Cart</Button>
          {LineWithOr()}
          <Button sx={{ color: 'white', marginBottom: '10px' }} variant='contained'>Buy Now</Button>
          <div>{product.info}</div>


        </div>

      </div>
    );
  }

  const suggestedProducts = () => {
    return (
      <div style={{ marginTop: '40px' }}>

        <Typography variant="h6" component="h2" align="left" gutterBottom sx={{ margin: 2 }}>
          Suggested products
        </Typography>

        <Grid container sx={{ overflowX: 'scroll' }}>
          <Grid item sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            {samecat_prod.map((product, index) => (
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
  }

  return (
    <div>
      {productContent()}
      {suggestedProducts()}
    </div>
  );

};

export default ProductDescriptionPage;
