import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboardPage';
import Home from './pages/home';
import LokerCard from './components/lokerCard';
import FormData from './components/formData';
import Login from './pages/login';
import Cookies from 'js-cookie';
import { GlobalProvider } from './context/GlobalContext';
import Footer from './components/footer';
import DetailData from './pages/detailData';

function App() {

  const LoginRoute = (props) => {
    if (Cookies.get('token') === undefined){
      return props.children
    } else if (Cookies.get('token') !== undefined){
      return <Navigate to={"/"} />
    }
  }

  const DashboardRoute = (props) => {
    if (Cookies.get('token') !== undefined) {
      return props.children
    } else if (Cookies.get('token') === undefined) {
      return <Navigate to={"/login"}/>
    }
  }

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          
              <Route path='/' element={<Home/>} />

              <Route path='/detail/:idDetail' element={<DetailData/>} />

              <Route path='/dashboard' element={
                <DashboardRoute>
                  <Dashboard />
                </DashboardRoute>} />

              <Route path='/login' element={
                <LoginRoute>
                  <Login />
                </LoginRoute>}/>

              <Route path='/job-vacancy' element={<LokerCard />} />

              <Route path='/edit/:variableIdData' element={<FormData />} />

              <Route path='/createdata' element={<FormData />} />

        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
