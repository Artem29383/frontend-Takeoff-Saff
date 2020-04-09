import React from 'react';
import S from './AgeVariant.styled';
import Button from '../../../../../components/Button';
import Range from './Range';
import { nanoid } from 'nanoid';
import useAction from '../../../../../hooks/useAction';
import { addNewOption } from '../../../../../models/form/reducer';

const AgeVariant = ({ id, ids, entities }) => {
  const pushInterval = useAction(addNewOption);

    const ranges = ids.map((rId, index) => <Range
      key={rId}
      id={entities[rId].id}
      condId={id}
      interval={entities[rId].interval}
      counts={index + 1}
    />);
  
  const addInterval = () => {
    const opt = {
      id: nanoid(),
      interval: { start: '', end: '' },
    };
    pushInterval( { id, opt });
  };
  
  return (
      <S.Range>
        {ranges}
        <div/>
        <S.RangeFooter>
          <Button clickHandler={addInterval} type="plus" label="Добавить диапазон" />
        </S.RangeFooter>
      </S.Range>
    )
};

export default AgeVariant;