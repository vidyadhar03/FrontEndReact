import React from 'react';
import { useParams } from 'react-router-dom';
import './PDP.css';


const ProductDescriptionPage = ({ response }) => {
  const { productId } = useParams();


  const products = Object.values(response.Products);
  const product = products.find((product) => product.productID === productId);


  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <div className="product-description-page">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Product ID: {product.productID}</p>
        <video src={product.video} controls />
      </div>
    </div>
  );
};


export default ProductDescriptionPage;