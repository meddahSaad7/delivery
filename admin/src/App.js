import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route,Navigate, useLocation} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
  const [accessToken,setAccessToken]=React.useState(window.localStorage.getItem('AccessToken'))
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home/*' element={accessToken?<Home setAccessToken={setAccessToken}/>:<Navigate to={'/login'}/>}/>
        <Route path='/login' element={accessToken?<Navigate to={'/home/Dashboard'}/>:<Login setAccessToken={setAccessToken}/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;