import React from 'react';
import './App.css';
import ProductDescriptionPage from './Components/productDescriptionPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToolbarComponent from './Components/Toolbar';
import HomaPage from './Components/HomaPage';
import CartPage from './Components/Cart';
import Footer from './Components/Footer';
import AuthenticationPage from './Components/Authentication';
import CategoryWiseProducts from './Components/CategoryWiseProducts';




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
        "category": "Shirts",
        "count": 55,
        "description": "Very creative toys to play with !",
        "famous": false,
        "image": "https://picsum.photos/201",
        "price": "450 rs",
        "productID": "prod2",
        "title": "Zinger toy",
        "video": "String"
      },
      "product3": {
        "category": "Shirts",
        "count": 45,
        "description": "Very beautiful illuminating blue lights for your room !",
        "famous": true,
        "image": "https://picsum.photos/202",
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
        "image": "https://picsum.photos/203",
        "price": "450 rs",
        "productID": "prod4",
        "title": "Zinger toy in the ground",
        "video": "String"
      },
        "product5": {
        "category": "Shirts",
        "count": 45,
        "description": "Very beautiful illuminating blue lights for your room !",
        "famous": true,
        "image": "https://picsum.photos/204",
        "price": "650 rs",
        "productID": "prod1",
        "title": "Illumination lights",
        "video": "String"
      },
      "product6": {
        "category": "Printed helmets",
        "count": 55,
        "description": "Very creative toys to play with !",
        "famous": false,
        "image": "https://picsum.photos/205",
        "price": "450 rs",
        "productID": "prod2",
        "title": "Zinger toy",
        "video": "String"
      },
      "product7": {
        "category": "Lights",
        "count": 45,
        "description": "Very beautiful illuminating blue lights for your room !",
        "famous": true,
        "image": "https://picsum.photos/206",
        "price": "650 rs",
        "productID": "prod3",
        "title": "Illumination lights",
        "video": "String"
      },
      "product8": {
        "category": "Printed helmets",
        "count": 55,
        "description": "Very creative toys to play with !",
        "famous": false,
        "image": "https://picsum.photos/207",
        "price": "450 rs",
        "productID": "prod8",
        "title": "helmet strong",
        "video": "String"
      }
    },
    "Categories": {
      "category1": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/208",
        "title": "Shirts"
      },
      "category2": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/209",
        "title": "Board games for fun"
      },
      "category3": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/210",
        "title": "Printed helmets"
      },
      "category4": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/211",
        "title": "shots all around"
      },
      "category5": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/212",
        "title": "Trippy posters"
      },
      "category6": {
        "banner": "String",
        "description": "String",
        "image": "https://picsum.photos/213",
        "title": "crazy robots"
      }
    }
  };

  return (
    <Router>
      <div>
        <ToolbarComponent />
        <Routes>
          <Route path="/" element={<HomaPage response={response} />} />
          <Route path="/product/:productId" element={<ProductDescriptionPage response={response} />} />
          <Route path="/category/:title" element={<CategoryWiseProducts response={response} />}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/authentication" element={<AuthenticationPage/>}/>
        </Routes>
        {<Footer />}
      </div>
    </Router>
  );

};


export default App;
