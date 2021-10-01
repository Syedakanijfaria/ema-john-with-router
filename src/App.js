import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Iventory/Inventory.js';
import NotFound from './components/NotFound/NotFound.js';
import OrderReview from './components/OrderReview/OrderReview.js';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/orders">
            <OrderReview></OrderReview>
          </Route>
          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
