import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KimCodeLogin from './pages/KimCode/Login/Login';
import KimCodeMain from './pages/KimCode/Main/Main';
import JiyoungAdd from './pages/Jiyoung/pages/Add/Add';
import JiyoungComplete from './pages/Jiyoung/pages/Complete/Complete';
import JiyoungDetail from './pages/Jiyoung/pages/Detail/Detail';
import JiyoungJoin from './pages/Jiyoung/pages/Join/Join';
import JiyoungList from './pages/Jiyoung/pages/List/List';
import JiyoungLogin from './pages/Jiyoung/pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kimcode-login" element={<KimCodeLogin />} />
        <Route path="/kimcode-main" element={<KimCodeMain />} />
        <Route path="/jiyoung-add" element={<JiyoungAdd />} />
        <Route path="/jiyoung-complete" element={<JiyoungComplete />} />
        <Route path="/jiyoung-detail" element={<JiyoungDetail />} />
        <Route path="/jiyoung-join" element={<JiyoungJoin />} />
        <Route path="/jiyoung-list" element={<JiyoungList />} />
        <Route path="/jiyoung-login" element={<JiyoungLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
