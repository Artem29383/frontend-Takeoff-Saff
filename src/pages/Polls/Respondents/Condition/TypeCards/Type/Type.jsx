import React, { useEffect, useState } from 'react';
import S from './Type.styled';
import DropDown from '../../../../../../components/DropDown';
import useAction from '../../../../../../hooks/useAction';
import { setType } from '../../../../../../models/form/reducer';

const Type = ({ id, condId, type, counts, field, label }) => {
  const [value, setValue] = useState(type);
  const setTypeValue = useAction(setType);
  
  useEffect(() => {
    setTypeValue({ typeId: id, condId, type: value, field });
  }, [value, condId, field, id, setTypeValue]);
  
  const options = field === 'type' ? ['Gold', 'Silver', 'Bronze'] : ['Активна', 'Не активна'];
  
  return (
    <>
      <S.TitleType>
        {counts > 1 && 'ИЛИ'} {label} {counts}
      </S.TitleType>
      <S.DropDiv>
        <DropDown value={value} setValue={setValue} options={options} />
      </S.DropDiv>
      </>
  )
};

export default Type;