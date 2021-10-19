import './App.css';
import Home from './components/Home/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SingleService from './components/Home/Services/SingleService/SingleService';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { useEffect, useState } from 'react';

function App() {
  const [service, setServices] = useState([])
  useEffect(() => {
    fetch('./services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/pricing">
            <Pricing></Pricing>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/service/:serviceId">
            {service.map(service => <SingleService key={service.id} service={service}></SingleService>) }
            
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Route>
          <Footer></Footer>
        </Route>

      </Router>
      </AuthProvider>
  );
}

export default App;
