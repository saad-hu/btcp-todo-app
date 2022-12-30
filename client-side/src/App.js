import React from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const shouldLogin = useSelector((state) => { return state.shouldLogin })
  console.log(shouldLogin)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/' element={<login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='welcome' element={shouldLogin.value ? <Welcome /> : <Navigate to='/' />} />
          <Route path='*' element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

