import './App.scss';
import Homepage
 from './pages/homepage/homepage.component';

import { Routes,Route,Outlet } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = ()=> {
  return (
    <div className="">
      <h1>I am the shop page</h1>
        </div>
  )
}



function App() {
  return (
  <Routes>
  <Route path="/" element={<Navigation/>} >
    <Route index element={<Homepage />}/>
    <Route path="shop" element={<Shop />}/>
    <Route path="auth" element={<Authentication />}/>
    </Route>
  </Routes>
  );
}

export default App;
