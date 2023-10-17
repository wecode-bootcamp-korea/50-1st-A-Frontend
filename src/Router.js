import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/feature/heehyun/Login/Login';
import Main from './pages/feature/heehyun/Main/Main';
import SingUp from './pages/feature/heehyun/Join/Join';
import Complete from './pages/feature/heehyun/Complete/Complete';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/join" element={<SingUp />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
