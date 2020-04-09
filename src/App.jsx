import React from 'react';
import S from './App.styled';
import Header from './components/Header';
import AppRoutes from './components/AppRoutes';

const App = () => {
  return (
    <S.Content>
      <Header />
      <AppRoutes />
    </S.Content>
  )
};

export default App;