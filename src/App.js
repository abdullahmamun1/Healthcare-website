import './App.css';
import Home from './components/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Header from './components/Header/Nav/Header';
import AuthProvider from './contexts/AuthProvider';
import Register from './components/Register/Register';

function App() {
  return (
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
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
