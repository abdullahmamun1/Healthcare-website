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

function App() {
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>

      </Router>
      </AuthProvider>
  );
}

export default App;
