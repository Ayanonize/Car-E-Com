import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Cards from './components/Cards'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './Pages/Cart';


function App() {
  return (

    <Router>
      <div>

        <Header />


        <Switch>
          <Route exact path="/">


            <Home />
            <Cards />

          </Route>

          <Route exact path="/cart">

            <Cart />

          </Route>

        </Switch>
        <Footer />


      </div>
    </Router>









  );
}

export default App;
