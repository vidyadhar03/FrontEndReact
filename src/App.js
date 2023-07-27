import React from 'react';
import './App.css';
import ProductDescriptionPage from './Components/productDescriptionPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToolbarComponent from './Components/Toolbar';
import HomaPage from './Components/HomaPage';
import CartPage from './Components/Cart';
import Footer from './Components/Footer';
import Authentication from './Components/Authentication';
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
        "category": "Psychedelic Lights",
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
        "category": "Psychedelic Lights",
        "count": 55,
        "description": "Challenge your mind with mind-bending puzzles",
        "famous": false,
        "image": "https://picsum.photos/203",
        "price": "450",
        "productID": "prod3",
        "title": "Trippy Mind Maze",
        "info": "Challenge your mind with our enigmatic collection of mind games. These trippy puzzles and brain teasers will take you on a journey of cognitive exploration. Unleash your inner genius and unravel the mysteries hidden within!"
      },
      "product4": {
        "category": "Psychedelic Lights",
        "count": 55,
        "description": "Elevate your space with trippy decorations",
        "famous": false,
        "image": "https://picsum.photos/205",
        "price": "450",
        "productID": "prod4",
        "title": "Psychedelic Mandala Tapestry",
        "info": "Elevate your space with our collection of psychedelic decor. From mesmerizing tapestries to trippy wall hangings, each piece is a masterpiece of psychedelic artistry. Immerse yourself in a realm of visual ecstasy with these mind-expanding decorations!"
      },
      // Add 12 more products here...
      "product5": {
        "category": "Enigmatic Mind Games",
        "count": 45,
        "description": "Sharpen your mind with challenging puzzles",
        "famous": true,
        "image": "https://picsum.photos/301",
        "price": "550",
        "productID": "prod5",
        "title": "Mystic Cube Puzzle",
        "info": "Immerse yourself in the world of enigmatic mind games with this mystic cube puzzle. Test your problem-solving skills as you try to unlock its secrets and discover the hidden patterns. Sharpen your mind and experience the thrill of triumph with this challenging puzzle!"
      },
      "product6": {
        "category": "Enigmatic Mind Games",
        "count": 35,
        "description": "Unravel the mysteries of a psychedelic maze",
        "famous": true,
        "image": "https://picsum.photos/302",
        "price": "620",
        "productID": "prod6",
        "title": "Psychedelic Labyrinth",
        "info": "Embark on a journey of cognitive exploration with this psychedelic labyrinth. Navigate through its intricate pathways and unlock the mysteries that lie within. Let your mind wander through the mesmerizing patterns of this enigmatic maze!"
      },
      // Add 10 more products here...
      "product7": {
        "category": "Psychedelic Decor",
        "count": 45,
        "description": "Transform your space with cosmic tapestries",
        "famous": true,
        "image": "https://picsum.photos/401",
        "price": "650",
        "productID": "prod7",
        "title": "Cosmic Triptych Tapestry",
        "info": "Elevate your space with this cosmic triptych tapestry. Its mesmerizing patterns and celestial colors will transport you to a realm of cosmic wonder. Transform your walls into portals of psychedelic beauty with this stunning tapestry!"
      },
      "product8": {
        "category": "Psychedelic Decor",
        "count": 55,
        "description": "Experience an aurora of colors with psychedelic curtains",
        "famous": false,
        "image": "https://picsum.photos/402",
        "price": "450",
        "productID": "prod8",
        "title": "Aurora Borealis Curtains",
        "info": "Immerse yourself in the breathtaking beauty of the northern lights with these psychedelic curtains. The vibrant colors and swirling patterns will add an aura of mystique to your space. Experience the magic of the aurora from the comfort of your home!"
      },
      // Add 8 more products here...
      "product9": {
        "category": "Psychedelic Posters",
        "count": 45,
        "description": "Decorate your walls with mesmerizing posters",
        "famous": true,
        "image": "https://picsum.photos/204",
        "price": "650",
        "productID": "prod1",
        "title": "Cosmic Kaleidoscope Poster",
        "info": "Transform your walls into portals of psychedelic wonder with our vibrant posters. These trippy artworks feature intricate designs and surreal visuals that will transport you to a realm of infinite imagination. Surround yourself with the beauty of psychedelic art!"
      },
      "product10": {
        "category": "Psychedelic Posters",
        "count": 30,
        "description": "Immerse in the depths of surreal landscapes",
        "famous": true,
        "image": "https://picsum.photos/220",
        "price": "600",
        "productID": "prod7",
        "title": "Enchanted Forest Poster",
        "info": "Embark on a journey through enchanting landscapes with this psychedelic poster. The vivid colors and dream-like scenes will awaken your sense of wonder and transport you to a realm of magic and mystery. Immerse yourself in the depths of surreal beauty!"
      },
      // Add 6 more products here...
      "product11": {
        "category": "Psychedelic Accessories",
        "count": 45,
        "description": "Complete your trippy look with unique accessories",
        "famous": true,
        "image": "https://picsum.photos/207",
        "price": "650",
        "productID": "prod11",
        "title": "Holographic Kaleidoscope Glasses",
        "info": "Complete your trippy look with our collection of psychedelic accessories. From mesmerizing jewelry to funky sunglasses, these accessories are designed to accentuate your psychedelic style. Embrace the essence of psychedelia with these captivating adornments!"
      },
      "product12": {
        "category": "Psychedelic Accessories",
        "count": 55,
        "description": "Unleash your creativity with psychedelic art supplies",
        "famous": false,
        "image": "https://picsum.photos/408",
        "price": "450",
        "productID": "prod12",
        "title": "Psychedelic Art Set",
        "info": "Express your artistic vision with this psychedelic art set. The vibrant colors and unique tools will allow you to create mesmerizing artworks that radiate with psychedelic charm. Unleash your creativity and immerse yourself in the world of psychedelic art!"
      },
      // Add 4 more products here...
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
      // Add more categories here...
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
          <Route path="/authentication" element={<Authentication/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
        </Routes>
        {<Footer />}
      </div>
    </Router>
  );

};



export default App;
