import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './PDP.css';
import { Button, Typography, Grid, Paper } from "@mui/material";
import {useNavigate } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import { addToCart } from "./CartHandler";
import DialogBox from './DialogBox';
import DataContext from './DataContext';
import Loader from './Loader';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductDescriptionPage = () => {

  const response = useContext(DataContext);
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  //loader
  const [isLoading, setIsLoading] = useState(false);
  const enableLoader = () => {
    setIsLoading(true);
  };
  const disableLoader = () => {
    setIsLoading(false);
  };

  //dialog
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

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

  const { Hero_stuff: heroStuffData } = response;
  const heroProd = heroStuffData.hero_prod;
  products.push(heroProd)

  var product = products.find((product) => product.productID === productId);

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
      setDialogMessage("Item added to cart!");
      setShowDialog(true);
      disableLoader();
    });
  };

  const pdpnavigate = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0); 
  }

  const productContent = () => {
    return (
      <div>
        <div className='product-content'>

          {isLoading && <Loader />}

          <div className='product-img'>
            {/* <div>
              <img src={product.image[0]} alt={product.title} style={{ objectFit: "cover" }} />
            </div> */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
              {product.image.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <img src={imgSrc} alt={`Product ${index}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='product-details'>

            <h3>{product.title}</h3>
            <div style={{ marginBottom:"6px",color: 'grey', fontWeight: 'bold' }}>₹ {product.price}</div>
            <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} productId={product.productID} />
            <Button sx={{ color: 'white', marginBottom: '10px' }} variant='contained' onClick={handleAddToCart}>Add To Cart</Button>
            {LineWithOr()}
            <Button sx={{ color: 'white', marginBottom: '10px' }} variant='contained'>Buy Now</Button>
            <div>{product.info}</div>


          </div>

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
              <Paper key={index} sx={paperStyles} >
                <div onClick={() => pdpnavigate(product.productID)}>
                  <img src={product.image[0]} alt={product.title} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
                  <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0' }}>{product.title}</div>
                  <div style={{ marginBottom: '10px', color: 'grey', fontWeight: 'bold' }}>₹ {product.price}</div>
                  <div style={{ fontSize: '16px' }}>{product.description}</div>
                </div>
              </Paper>
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
      <DialogBox
        message={dialogMessage}
        show={showDialog}
        onClose={() => setShowDialog(false)}
      />
    </div>
  );

};

export default ProductDescriptionPage;
