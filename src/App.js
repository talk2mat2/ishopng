
import './App.css';
import React from 'react';
import Navbar from './screens/components/navbar/navbar';
import Swipper from './screens/components/swipper';
import FlashDeals from './screens/components/Flashdeals';
import DealsSwiper from './screens/components/deals.Swiper';
import NiceFooter from './screens/components/Footer';
import RecentlyViewed from './screens/components/RecentlyViewed';
import LoginScreen from './screens/LoginScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams

} from "react-router-dom";




function App() {
  return (
    <Router>
    <div className="App">
 
      <Navbar />
      < Switch>
      <Route  exact path="/">
 <React.Fragment>
 <Swipper />
 <FlashDeals/>
 <DealsSwiper/>
 <DealsSwiper/>
 <DealsSwiper/>
 <RecentlyViewed/></React.Fragment>
 </Route>
 
 <Route path="/signin" >
 <LoginScreen/>
 </Route>
 </Switch>
 <NiceFooter/> 
    </div>
    </Router>
  );
}

export default App;
