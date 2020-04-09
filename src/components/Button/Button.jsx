import React, { memo } from 'react';
import Svg from '../../assets/images/styled';
import plus from '../../assets/images/plus.svg';
import remove from '../../assets/images/remove.svg';
import S from './Button.styled';

const Button = ({ type = 'plus', label = 'Добавить диапазон', clickHandler }) => {
  return (
    <S.Button type={type} onClick={clickHandler}>
      {type === 'plus' &&
      <Svg.plus>
        <use xlinkHref={`${plus}#plus`} />
      </Svg.plus>
      }
      {type === 'remove' &&
      <Svg.remove>
        <use xlinkHref={`${remove}#remove`} />
      </Svg.remove>
      }
      {label}
    </S.Button>
  );
};

export default memo(Button);