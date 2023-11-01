import React, { useEffect, useState } from 'react';
import './App.css';
import ProductDescriptionPage from './Components/productDescriptionPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToolbarComponent from './Components/Toolbar';
import HomaPage from './Components/HomaPage';
import CartPage from './Components/Cart';
import Footer from './Components/Footer';
import Authentication from './Components/Authentication';
import CategoryWiseProducts from './Components/CategoryWiseProducts';
import UserProfile from './Components/My Account/UserProfile';
import CheckoutPage from './Components/CheckoutPage';
import ResetPassword from './Components/ResetPassword';
import BillingAddress from './Components/BillingAddress';
import DataContext from './Components/DataContext';
import { db } from './Components/Firebase';
import { ref, onValue } from "firebase/database";

const App = () => {

  const [response, setResponse] = useState(null);

  useEffect(() => {

    // Fetching data from Firebase using onValue
    const unsubscribe = onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setResponse(data);
    }
      , {
        onlyOnce: true
      }
    );

    // Cleaning up the subscription when the component unmounts
    return () => {
      unsubscribe();
    }

  }, []);

  return (
    <DataContext.Provider value={response}>
      <Router>
        <div>
          <ToolbarComponent/>
          <Routes>
            <Route path="/" element={<HomaPage response={response} />} />
            <Route path="/product/:productId" element={<ProductDescriptionPage  />} />
            <Route path="/category/:title" element={<CategoryWiseProducts/>} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/billingdetails" element={<BillingAddress />} />
          </Routes>
          {<Footer />}
        </div>
      </Router>
    </DataContext.Provider>
  );

};

export default App;
