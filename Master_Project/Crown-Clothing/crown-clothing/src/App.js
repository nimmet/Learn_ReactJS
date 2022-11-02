import './App.scss';
import Homepage
 from './pages/homepage/homepage.component';

import { Routes,Route,Outlet } from 'react-router-dom'

const Shop = ()=> {
  return (
    <div className="">
      <h1>I am the shop page</h1>
        </div>
  )
}

const Navigation = ()=> {
  return (
    <div className="">
    <div>
      <h1>I am the Navigation bar</h1>
    </div>
    <Outlet/>
        </div>
  )
  }

function App() {
  return (
  <Routes>
  <Route path="/" element={<Navigation/>} >
    <Route index element={<Homepage />}/>
    <Route path="shop" element={<Shop />}/>
    </Route>
  </Routes>
  );
}

export default App;
