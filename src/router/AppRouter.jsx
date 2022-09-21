import { Navigate, Route, Routes } from 'react-router-dom';

import { ActiveTodosPage, CompletedTodosPage, HomePage } from '../pages';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='active' element={<ActiveTodosPage />} />
    <Route path='completed' element={<CompletedTodosPage />} />

    <Route path='/*' element={<Navigate to='/' />} />
  </Routes>
);
