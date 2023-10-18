import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KimCodeLogin from './pages/KimCode/Login/Login';
import KimCodeMain from './pages/KimCode/Main/Main';
// pages
import JiyoungComplete from './pages/Jiyoung/pages/Complete/Complete';
import JiyoungLogin from './pages/Jiyoung/pages/Login/Login';
import JiyoungJoin from './pages/Jiyoung/pages/Join/Join';
// component
import LibButton from './pages/Jiyoung/components/Button/LibButton';
import LibForm from './pages/Jiyoung/components/Form/LibForm';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kimcode-login" element={<KimCodeLogin />} />
        <Route path="/kimcode-main" element={<KimCodeMain />} />
        <Route path="/jiyoung-complete" element={<JiyoungComplete />} />
        <Route path="/jiyoung-login" element={<JiyoungLogin />} />
        <Route path="/jiyoung-join" element={<JiyoungJoin />} />
        <Route path="/jiyoung-button" element={<LibButton />} />
        <Route path="/jiyoung-form" element={<LibForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
