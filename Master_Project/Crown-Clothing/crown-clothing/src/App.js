import './App.scss';
import Homepage
 from './pages/homepage/homepage.component';

import { Routes,Route } from 'react-router-dom'



function App() {
  return (
   <div>
  <Routes>
    <Route path="/" element={<Homepage />}></Route>
  </Routes>
   </div>
  );
}

export default App;
