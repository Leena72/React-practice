import React from 'react';
import ProductsPage from './components/Products/ProductsPage';
import CartPage from './components/Cart/ShoppingCart';
import CheckoutPage from './components/Checkout/CheckoutPage';
import Orderplaced from './components/PlacedOrder/Orderplaced' ;
import ProjectDescription from './components/Products/ProductDescription'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/style.css';
function App() {
  return (
    <div className="App">
      <Router>
        
          <Route
            exact strict
            path="/"
            component={ProductsPage}
          />

          <Route
            exact strict
            path="/cart"
            component={CartPage}
          />


          <Route
            exact strict
            path="/productdetails/:id"
            component={ProjectDescription}
          />


          <Route
          exact strict
          path="/checkout"
          component={CheckoutPage}
          />

          <Route path="/placed"
          component={Orderplaced}
          />

        </Router>
    </div>
  );
}

export default App;
