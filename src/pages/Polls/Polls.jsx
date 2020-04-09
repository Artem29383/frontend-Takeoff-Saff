import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import S from './Polls.styled';
import Respondents from './Respondents';

const Polls = () => {
  const [value, setValue] = useState('Респонденты');
  return (
    <S.FormWrapper>
      <Navigation setValue={setValue} value={value} />
      <S.Form>
        {value === 'Респонденты' && <Respondents />}
      </S.Form>
    </S.FormWrapper>
  )
};

export default Polls;