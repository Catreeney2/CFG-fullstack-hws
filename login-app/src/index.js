import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoggedIn from './pages/success';
import LoginFail from './pages/fail';
import Details from './password';
import LoginBox from './loginBox';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Routing = () => {
  return(
    <BrowserRouter>
    {/* <div>
      <ul>
        <li><Link to='/'> Home </Link></li>
        <li><Link to='/aboutus'> About Us </Link></li>
      </ul>
    </div> */}
    
    <Routes>

      <Route path='/' element={<App></App>}></Route>
      <Route path='/success' element={<LoggedIn></LoggedIn>}></Route>
      <Route path='/fail' element={<LoginFail></LoginFail>}></Route>
    </Routes>
    
    
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
