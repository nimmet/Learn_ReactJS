// import './App.css';
// import ContextExample from './ContextExample/ContextExample';
// import Example from './Custom-Hooks/CustomHooks';
// import CustomHooks from './Custom-Hooks/CustomHooks1';
import './DarkTheme/theme.css'
import ReactMemo from './Custom-Hooks/reactMemo';
import Theme from './DarkTheme/Theme';
import ReducerExample from './UseReducerExample/ReducerExample';
import Product from './ShoppingExample/Products/product.component';
import Shopping from './ShoppingExample/shopping/shopping';
import Home from './ShoppingExample/component/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { divide } from 'fontawesome';
import CartItem from './ShoppingExample/component/cartItem.component';
import Navbar from './ShoppingExample/navigation/navbar.component';
import Nav from './Shopping/components/Nav';
import ProductList from './Shopping/ProductList';
import Cart from './Shopping/components/Cart';
import LoginMain from './LoginApp/Components/LoginMain';
// import TestCss from './TailwindDemo/TestTailwind';
// import Monster from './Monster-Rolodex/Monsters';
// import MultipleInputs from './Multiple_Inputs/MultipleInputExample';
// import UseRefBasics from './UseRefBasics/UseRefBasics';
// import Index from './UseReducer';
// import ContextAPI from './UseReducer/contextApi';
// import PropDrilling from './UseReducer/propdrilling';

function App() {
  return (
    // <MultipleInputs/>
    // <UseRefBasics/>
    // <Index />
    // <PropDrilling/>
    // <Monster />
    // <ContextAPI/>
    // <Example /> //Custom hooks example which demonstrates products with item name,price,company and images
    // <CustomHooks />

    // <ReactMemo />
  
// {/* <TestCss /> */}

/* <ContextExample /> */
  
   //   <Theme />
  // <ReducerExample />
  // <Shopping />
  //<Home/>


  // <BrowserRouter>
  // <Navbar/>
  //   <Routes>
  //   <Route path="/" element={<Shopping/>} />
  //   <Route path="cart" element={<CartItem/>}/>
  //   </Routes>
  // </BrowserRouter>


  <div>

{/* // for Shopping app 
    <Nav/>
    <Routes>
      <Route path="/" element={<ProductList/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes> */}

    <LoginMain />
  </div>
    
  );
}

export default App;
