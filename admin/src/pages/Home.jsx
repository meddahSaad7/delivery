import React from 'react'
import SideBar from '../components/SideBar'
import Dashboard from '../components/homeComponents/Dashboard'
import Search from '../components/homeComponents/Search'
import Team from '../components/homeComponents/Team'
import Vendeur from '../components/homeComponents/Vendeur'
import Stock from '../components/homeComponents/Stock'
import Agence from '../components/homeComponents/Agence'
import Hub from '../components/homeComponents/Hub'
import Recouvrement from '../components/homeComponents/Recouvrement'
import Commande from '../components/homeComponents/Commande'
import Livreurs from '../components/homeComponents/Livreurs'
import StopDesk from '../components/homeComponents/StopDesk'
import Header from '../components/Header'
import {BrowserRouter,Routes,Route,Navigate, useLocation} from 'react-router-dom';

function Home({setAccessToken}) {
  return (
    <div className=' w-[100vw] h-[100vh] '>
      <Header setAccessToken={setAccessToken}/>
      <div className=' w-[100%] h-[90%] flex items-center justify-center'>
        <SideBar/>
        <div className=' w-[85%] h-[100%] flex items-center justify-center'>
          <Routes>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/Search' element={<Search/>}/>
            <Route path='/Team' element={<Team/>}/>
            <Route path='/Vendeur' element={<Vendeur/>}/>
            <Route path='/Stock' element={<Stock/>}/>
            <Route path='/Agence' element={<Agence/>}/>
            <Route path='/Hub' element={<Hub/>}/>
            <Route path='/Recouvrement' element={<Recouvrement/>}/>
            <Route path='/Commande' element={<Commande/>}/>
            <Route path='/Livreurs' element={<Livreurs/>}/>
            <Route path='/StopDesk' element={<StopDesk/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home