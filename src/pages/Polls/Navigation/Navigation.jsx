import React, { memo } from 'react';
import S from './Navigation.styled';

const Navigation = ({ value, setValue }) => {
  
  const setActiveHandler = e => {
    setValue(e.currentTarget.innerText);
  };
  
  const items = ['Параметры', 'Вопросы', 'Логика', 'Условия', 'Респонденты'].map(name => (
    <S.FormNavItem onClick={setActiveHandler} key={name} className={value === name && 'active'}>
      {name}
    </S.FormNavItem>
  ));
  
  return (
    <S.FormNav>
      <S.FormNavUl>
        {items}
      </S.FormNavUl>
    </S.FormNav>
  );
};

export default memo(Navigation);