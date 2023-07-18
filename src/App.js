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
import UserProfile from './Components/UserDetails';
import CheckoutPage from './Components/CheckoutPage';




const App = () => {

  const response = {
    "Website_description": {
      "description": "String",
      "imageURL": "String"
    },
    "Products": {
      "product1": {
        "category": "Psychedelic Decor",
        "count": 45,
        "description": "Illuminate your space with mesmerizing lights",
        "famous": true,
        "image": "https://picsum.photos/200",
        "price": "650",
        "productID": "prod1",
        "title": "Trippy Illusion Lights",
        "info": "Create an otherworldly ambiance with these mesmerizing psychedelic lights. The shifting patterns and vibrant colors will transport you to a trippy realm of visual delight. Perfect for parties, meditation, or simply elevating your space!"
      },
      "product2": {
        "category": "Psychedelic Lights",
        "count": 55,
        "description": "Express your trippy style with unique shirts",
        "famous": false,
        "image": "https://picsum.photos/201",
        "price": "450",
        "productID": "prod2",
        "title": "Kaleidoscope T-Shirt",
        "info": "Step into a world of mind-bending fashion with our psychedelic apparel collection. These uniquely designed garments feature intricate patterns and vibrant colors that will make you stand out in any crowd. Express your trippy style with these eye-catching pieces!"
      },
      "product3": {
        "category": "Psychedelic Posters",
        "count": 45,
        "description": "Vibrant and colorful shirts for a psychedelic look",
        "famous": true,
        "image": "https://picsum.photos/202",
        "price": "650",
        "productID": "prod3",
        "title": "Psychedelic Dream Dress",
        "info": "Experience the magic of psychedelia with our stunning apparel. Each piece is meticulously crafted with intricate psychedelic patterns and vivid colors. Embrace the trippy vibes and make a bold fashion statement with these captivating garments!"
      },
      "product4": {
        "category": "Psychedelic Lights",
        "count": 55,
        "description": "Challenge your mind with mind-bending puzzles",
        "famous": false,
        "image": "https://picsum.photos/203",
        "price": "450",
        "productID": "prod4",
        "title": "Trippy Mind Maze",
        "info": "Challenge your mind with our enigmatic collection of mind games. These trippy puzzles and brain teasers will take you on a journey of cognitive exploration. Unleash your inner genius and unravel the mysteries hidden within!"
      },
      "product5": {
        "category": "Enigmatic Mind Games",
        "count": 45,
        "description": "Decorate your walls with mesmerizing posters",
        "famous": true,
        "image": "https://picsum.photos/204",
        "price": "650",
        "productID": "prod1",
        "title": "Cosmic Kaleidoscope Poster",
        "info": "Transform your walls into portals of psychedelic wonder with our vibrant posters. These trippy artworks feature intricate designs and surreal visuals that will transport you to a realm of infinite imagination. Surround yourself with the beauty of psychedelic art!"
      },
      "product6": {
        "category": "Psychedelic Lights",
        "count": 55,
        "description": "Elevate your space with trippy decorations",
        "famous": false,
        "image": "https://picsum.photos/205",
        "price": "450",
        "productID": "prod2",
        "title": "Psychedelic Mandala Tapestry",
        "info": "Elevate your space with our collection of psychedelic decor. From mesmerizing tapestries to trippy wall hangings, each piece is a masterpiece of psychedelic artistry. Immerse yourself in a realm of visual ecstasy with these mind-expanding decorations!"
      },
      "product7": {
        "category": "Psychedelic Posters",
        "count": 45,
        "description": "Transform your space with mesmerizing lights",
        "famous": true,
        "image": "https://picsum.photos/206",
        "price": "650",
        "productID": "prod3",
        "title": "Trippy Infinity Lamp",
        "info": "Immerse yourself in a kaleidoscope of color and light with our psychedelic light fixtures. These mesmerizing lights project captivating patterns and hues, transforming any space into a trippy sanctuary. Let the radiance of psychedelic lights ignite your imagination!"
      },
      "product8": {
        "category": "Psychedelic Accessories",
        "count": 55,
        "description": "Complete your trippy look with unique accessories",
        "famous": false,
        "image": "https://picsum.photos/207",
        "price": "450",
        "productID": "prod8",
        "title": "Holographic Kaleidoscope Glasses",
        "info": "Complete your trippy look with our collection of psychedelic accessories. From mesmerizing jewelry to funky sunglasses, these accessories are designed to accentuate your psychedelic style. Embrace the essence of psychedelia with these captivating adornments!"
      }
    },
    "Categories": {
      "category1": {
        "banner": "https://picsum.photos/208",
        "description": "Step into the world of psychedelic fashion",
        "image": "https://picsum.photos/208",
        "title": "Psychedelic Apparel"
      },
      "category2": {
        "banner": "https://picsum.photos/209",
        "description": "Challenge your mind with enigmatic mind games",
        "image": "https://picsum.photos/209",
        "title": "Enigmatic Mind Games"
      },
      "category3": {
        "banner": "https://picsum.photos/210",
        "description": "Surround yourself with mystical psychedelic decor",
        "image": "https://picsum.photos/210",
        "title": "Psychedelic Decor"
      },
      "category4": {
        "banner": "https://picsum.photos/211",
        "description": "Transform your space with mesmerizing lights",
        "image": "https://picsum.photos/211",
        "title": "Psychedelic Lights"
      },
      "category5": {
        "banner": "https://picsum.photos/212",
        "description": "Indulge in the surreal beauty of psychedelic art",
        "image": "https://picsum.photos/212",
        "title": "Psychedelic Posters"
      },
      "category6": {
        "banner": "https://picsum.photos/213",
        "description": "Explore a realm of trippy imagination with psychedelic accessories",
        "image": "https://picsum.photos/213",
        "title": "Psychedelic Accessories"
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
          <Route path="/cart" element={<CartPage response={response} />} />
          <Route path="/authentication" element={<AuthenticationPage/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
        </Routes>
        {<Footer />}
      </div>
    </Router>
  );

};


export default App;
