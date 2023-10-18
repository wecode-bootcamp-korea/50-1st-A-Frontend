import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/feature/heehyun/Login/Login';
import Main from './pages/feature/heehyun/Main/Main';
import SingUp from './pages/feature/heehyun/Join/Join';
import Complete from './pages/feature/heehyun/Complete/Complete';
import PostAdd from './pages/feature/heehyun/PostAdd/PostAdd';
import PostEdit from './pages/feature/heehyun/PostEdit/PostEdit';
import PostDetail from './pages/feature/heehyun/PostDetail/PostDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/join" element={<SingUp />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/postAdd" element={<PostAdd />} />
        <Route path="/postEdit" element={<PostEdit />} />
        <Route path="/postDetail" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
