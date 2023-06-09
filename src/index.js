import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import './fonts/Montserrat/static/Montserrat-Medium.ttf'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import Accomodation from "./pages/Accomodation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} > </Route>
            <Route path="/aboutUs" element={<AboutUs />} > </Route>
            <Route path="/logement/:logementId" element={<Accomodation />} > </Route>
            <Route path="*" element={<Error />} > </Route>
          </Routes>
      </BrowserRouter>
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
