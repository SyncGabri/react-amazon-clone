import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import './css/App.css';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51KX1aoFK9A8xsjkQCkxDmoy6nzTSnsPnp6W4X56ZJBzi5CXOuWZOxbU2SH7hLuGngFZLR3gXrDY6BS3Ll1BDwvrA0069cNMYr6');


function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
        // console.log('USER >>', authUser);

        if(authUser){
            //login or already logged in
            dispatch({
              type: 'SET_USER',
              user: authUser,
            });
        }
        else{
          //logout
          dispatch({
            type: 'SET_USER',
            user: null,
          });
        }
      });
    }, []);

    return (
      <Router>
        <div className="App">
          
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/orders'>
              <Header />
              <Orders />
            </Route>
            <Route path='/checkout'>
              <Header />
              <Checkout />
            </Route>
            <Route path='/payment'>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path='/'>
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
    }

export default App;
