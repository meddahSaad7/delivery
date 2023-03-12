import './App.css';
import {BrowserRouter,Routes,Route,Navigate, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Archives from './pages/Archives';
import Development from './pages/Development';
import LifeTime from './pages/LifeTime';
import MyExports from './pages/MyExports';
import Ouragencies from './pages/OurAgencies';
import Package from './pages/Package';
import Payments from './pages/Payments';
import Performance from './pages/Performance';
import Ramassage from './pages/Ramassage';
import Requests from './pages/Requests';
import Settings from './pages/Settings';
import Stats from './pages/Stats';
import Status from './pages/Status';
import Dispatch from './pages/Dispatch'
import { useSelector } from 'react-redux';
//redux
import { store } from './Store';
import { Provider } from 'react-redux';
import Layout from './layouts/Layout';
//redux
function App() {
  const user=JSON.parse(useSelector(state=>state.user.value))
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to={"/login"} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route
              path="/Archives"
              element={user ? <Archives /> : <Navigate to={"/login"} />}
            /> */}
            <Route
              path='/Status'
              element={user ? <Status/> : <Navigate to={"/login"}/>}
            />
            <Route
              path="/Development"
              element={user ? <Development /> : <Navigate to={"/login"} />}
            />
            {/* <Route
              path="/LifeTime"
              element={user ? <LifeTime /> : <Navigate to={"/login"} />}
            /> */}
            <Route
              path="/MyExports"
              element={user ? <MyExports /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/Ouragencies"
              element={user ? <Ouragencies /> : <Navigate to={"/login"} />}
            />
            {/* <Route
              path="/Dispatch"
              element={user ? <Dispatch /> : <Navigate to={"/login"} />}
            /> */}
            <Route
              path="/Package"
              element={user ? <Package /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/Payments"
              element={user ? <Payments /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/Performance"
              element={user ? <Performance /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/Ramassage"
              element={user ? <Ramassage /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/Requests"
              element={user ? <Requests /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/Settings"
              element={user ? <Settings /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/Stats"
              element={user ? <Stats /> : <Navigate to={"/login"} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
