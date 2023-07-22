import './App.css';

/*--------------------IMPORT-PAGES--------------------*/

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

/*-----------------IMPORT-COMPONENTS------------------*/

import Navbar from './components/Navbar';

/*-------------------IMPORT-LIBRARY-------------------*/


import { Routes, Route, useParams } from 'react-router-dom';

function App() {


  return (
    <>

      <Navbar/>

      <Routes>

        <Route path='/' exact element={
          <Home />
        } />
        <Route path='/rooms/' exact element={
          <Rooms />
        } />
        <Route path='/rooms/:slug' exact element={
          <SingleRoom />
        } />
        <Route path='*' element={
          <Error />
        } />


      </Routes>

    </>
  );
}

export default App;
