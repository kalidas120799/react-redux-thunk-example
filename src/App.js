import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login } from "./pages";
export default function App() {
  const { isLogin } = useSelector(state => state.user);

  return (
    <div>
      <Routes>
        <Route path='/' element={isLogin ? <Home /> : <Navigate to="/login" replace={true} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}
