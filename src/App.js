
import './App.css';
import React, {useEffect,useState}from 'react';
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

import {LIST_PRODUCTS_SUCCESS,FETCH_CART_SUCCESS,LIST_PRODUCTS_ERROR} from "./redux/action"
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

import BasePage from './screens/base.page';
import MyOrders from './screens/MyOrders';


const CoinsSection=styled.div`
@media (min-width: 768px) {
  display:none;
}
`

function Landing(){
  const products = useSelector((state) => state.products["products"]);
  const [flashDealsItems,setFlashDealsItems]=useState([])
  const [NewArrivals,setNewArrivals]=useState([])
  const [TopDeals, setTopDeals]=useState([])
  // const Dispatch=useDispatch()


const getfLashDealsItems = (products) => {
  let temp = [];
  products.length &&
    products.map((items) =>
      items.categories.map(async (category) =>
        category.name === "Flash Deals" ? temp.push(items) : null
      )
    );
  setFlashDealsItems(temp);
};
const getNewArrivals = (products) => {
  let temp = [];
  products.length &&
    products.map((items) =>
      items.categories.map(async (category) =>
        category.name === "New Arrivals" ? temp.push(items) : null
      )
    );
  setNewArrivals(temp);
};
const getTopDeals = (products) => {
  let temp = [];
  products.length &&
    products.map((items) =>
      items.categories.map(async (category) =>
        category.name === "TopDeals" ? temp.push(items) : null
      )
    );
  setTopDeals(temp);
};

useEffect(()=>{
  getfLashDealsItems(products)
  getNewArrivals(products)
  getTopDeals(products)
},[products])

  return(  <React.Fragment>
  <CoinsSection><CoinsDeals/></CoinsSection>
  <Swipper />

  <DealsSwiper product_deals={NewArrivals} deal_id="New Arrivals"  dealname="New Arrivals" dealDescription="latest in the block" Icon={StarIcon} Color="blue"/>
    <DealsSwiper product_deals={flashDealsItems} deal_id="Flash Deals"  dealname="Flash Deals" dealDescription="trending  " Icon={FlashOnIcon} Color="green"/>
  <FlashDeals/>
  <DealsSwiper product_deals={TopDeals} deal_id="TopDeals"  dealname="Top Deals" dealDescription="you will love these" Icon={CardGiftcardIcon} Color="orange"/>
 
  <RecentlyViewed/> 
 
 
  </React.Fragment>)
}

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
const[loading,setLoading]= useState(false)
const Dispatch=useDispatch()
const products = useSelector((state) => state.products&&state.products["products"]);
useEffect(()=>{
  function fetchProducts() {
    commerce.products.list().then((products) => {
      // this.setState({ products: products.data });
      console.log(products.data)
      Dispatch(LIST_PRODUCTS_SUCCESS(products.data))
        commerce.cart.retrieve().then((cart) => {
          Dispatch(FETCH_CART_SUCCESS({ cart }));
    
        }).catch((error) => {
          console.error('There was an error fetching the cart', error);
         
        });
    
    }).catch((error) => {
      console.log('There was an error fetching the products', error);
      Dispatch(LIST_PRODUCTS_ERROR());
    });
  }
  // fetchProducts()
  !products.length && fetchProducts();
},[])

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
      <Route  exact path="/base_page">
       <BasePage/>

 </Route>
      <Route  exact path="/MyOrders">
       <MyOrders/>

 </Route>

 <Route path="/signin"  render={(props)=>!currentUser?<LoginScreen loading={loading} setLoading={setLoading} {...props} />:<Landing {...props} />}/>
{/* 
 <Route path="/signin" >
{!currentUser ? <LoginScreen loading={false} setLoading={setLoading}/>:<Landing/>}
 </Route> */}
 <Route path="/signup" >
{!currentUser ? <RegisterUser loading={false} setLoading={setLoading}/>:<Landing/>}
 </Route>
 <Route path="/cart" >
 <ShoppingCart loading={loading} setLoading={setLoading} />
 </Route>
 <Route path="/item_Detail" >
  <ProductDetail loading={loading} setLoading={setLoading}/>
 </Route>
 </Switch>
 <NiceFooter/> 
    </div>
    </ScrollToTop>
    </Router>
  );
}

export default App;
