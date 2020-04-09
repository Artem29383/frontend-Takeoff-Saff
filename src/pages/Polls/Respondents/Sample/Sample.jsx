import React from 'react';
import S from './Sample.styled';
import Svg from '../../../../assets/images/styled';
import plus from '../../../../assets/images/plus.svg';
import { nanoid } from 'nanoid';

const Sample = ({ clickHandler }) => {
  const addConditionHandler = () => {
    clickHandler({ id: nanoid() });
  };
  
  return (
    <S.NewSampleWrap>
      <S.NewSample onClick={addConditionHandler}>
        <S.NewSampleIcon>
          <Svg.plus>
            <use xlinkHref={`${plus}#plus`} />
          </Svg.plus>
        </S.NewSampleIcon>
        <S.NewSampleText>
          Нажмите, чтобы добавить новое условие выборки.
          Все условия связываются между собой логическим "И"
        </S.NewSampleText>
      </S.NewSample>
    </S.NewSampleWrap>
  );
};

export default Sample;