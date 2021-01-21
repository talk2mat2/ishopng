
import './App.css';
import React, {useEffect}from 'react';
import Navbar from './screens/components/navbar/navbar';
import Swipper from './screens/components/swipper';
import FlashDeals from './screens/components/Flashdeals';
import DealsSwiper from './screens/components/deals.Swiper';
import NiceFooter from './screens/components/Footer';
import RecentlyViewed from './screens/components/RecentlyViewed';
import LoginScreen from './screens/LoginScreen';
import Firebase from './firebase/firebase'
import {useDispatch,useSelector} from "react-redux"
import {loginUsersuccess} from "./redux/action"
import FlashOnIcon from "@material-ui/icons/FlashOn";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import StarIcon from "@material-ui/icons/Star";
import { commerce } from "./libs/commerce";

import {LIST_PRODUCTS_SUCCESS} from "./redux/action"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams

} from "react-router-dom";
import ProductDetail from './screens/product.detail.View';
import ShoppingCart from './screens/Shoppikng.cart.Screeen';
import RegisterUser from './screens/register.user';
import ScrollToTop from './ScrollToTop';
import CoinsDeals from './screens/components/coins';
import styled from "styled-components"

const CoinsSection=styled.div`
@media (min-width: 768px) {
  display:none;
}
`

function Landing(){
  const Dispatch=useDispatch()

useEffect(()=>{
  function fetchProducts() {
    commerce.products.list().then((products) => {
      // this.setState({ products: products.data });
      console.log(products.data)
      Dispatch(LIST_PRODUCTS_SUCCESS(products.data))
    }).catch((error) => {
      console.log('There was an error fetching the products', error);
    });
  }
  fetchProducts()
},[])

  return(  <React.Fragment>
  <CoinsSection><CoinsDeals/></CoinsSection>
  <Swipper />
  <FlashDeals/>
    <DealsSwiper dealname="Flash Deals" dealDescription="Hot now up to 90% off " Icon={FlashOnIcon} Color="green"/>
  <DealsSwiper dealname="Top Deals" dealDescription="you will love these" Icon={CardGiftcardIcon} Color="orange"/>
  <DealsSwiper dealname="Featured Products" dealDescription="from recomendations" Icon={StarIcon} Color="blue"/>
 
  <RecentlyViewed/> 
 
 
  </React.Fragment>)
}

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);

const Dispatch=useDispatch()


useEffect(()=>{
const CheckAuth=()=>{
  Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // var uid = user.uid;
      // ...
      console.log(user.uid)
    //   Firebase.firestore().collection("users").get().then((querySnapshot) => {
    //     console.log(querySnapshot.data())
      
    // });
    Firebase.firestore().collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
       if(doc.id===user.uid){
      
        Dispatch(loginUsersuccess(doc.data()))
       }
      });
  });
    } else {
      // User is signed out
      // ...
      console.log('no user found')
      Dispatch(loginUsersuccess(null))
    }
  });
}
CheckAuth()
},[])



  return (
    <Router>
  <ScrollToTop>
    <div className="App">
 
      <Navbar  />
      < Switch>
      <Route  exact path="/">
<Landing/>
 </Route>

 <Route path="/signin" component={!currentUser ?LoginScreen:Landing} />

 <Route path="/signup" >
{!currentUser ? <RegisterUser/>:<Landing/>}
 </Route>
 <Route path="/cart" >
 <ShoppingCart/>
 </Route>
 <Route path="/item_Detail" >
  <ProductDetail/>
 </Route>
 </Switch>
 <NiceFooter/> 
    </div>
    </ScrollToTop>
    </Router>
  );
}

export default App;
