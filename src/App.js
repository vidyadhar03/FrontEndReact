import React, { useEffect ,useState} from 'react';
import './App.css';
import ProductDescriptionPage from './Components/productDescriptionPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToolbarComponent from './Components/Toolbar';
import HomaPage from './Components/HomaPage';
import CartPage from './Components/Cart';
import Footer from './Components/Footer';
import Authentication from './Components/Authentication';
import CategoryWiseProducts from './Components/CategoryWiseProducts';
import UserProfile from './Components/UserProfile';
import CheckoutPage from './Components/CheckoutPage';
import { db } from './Components/Firebase';
import { ref, onValue } from "firebase/database";


const App = () => {

  const [response, setResponse] = useState(null);

  useEffect(() => {

    // Fetching data from Firebase using onValue

    const unsubscribe = onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setResponse(data);
    }, {
      onlyOnce: true
    });

    // Cleaning up the subscription when the component unmounts
    return () => {
      unsubscribe();
    }

  }, []);

  return (
    <Router>
      <div>
        <ToolbarComponent />
        <Routes>
          <Route path="/" element={<HomaPage response={response} />} />
          <Route path="/product/:productId" element={<ProductDescriptionPage response={response} />} />
          <Route path="/category/:title" element={<CategoryWiseProducts response={response} />} />
          <Route path="/cart" element={<CartPage response={response} />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        {<Footer />}
      </div>
    </Router>
  );

};



export default App;
