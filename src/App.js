import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getVideogames } from './Redux/Actions/index.actions';
// import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home.jsx';
import Login from './Views/Login/Login.jsx';
import Ecommerce from './Views/Ecommerce/Ecommerce.jsx';


function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getVideogames());
  // }, [dispatch]);

  return (
    <>
    <Routes >
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/videogames' element={<Ecommerce />}/>
    </Routes>
    </>
  );
}
export default App;


