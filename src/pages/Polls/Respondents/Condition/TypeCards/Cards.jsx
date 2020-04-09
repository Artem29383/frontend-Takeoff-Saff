import React from 'react';
import Type from './Type';
import S from './Cards.styled';
import Button from '../../../../../components/Button/Button';
import useAction from '../../../../../hooks/useAction';
import { addNewOption } from '../../../../../models/form/reducer';
import { nanoid } from 'nanoid';

const Cards = ({ id, entities, ids, field, label }) => {
  const pushType = useAction(addNewOption);
  
  const types = ids.map((rId, index) => <Type
    key={rId}
    id={entities[rId].id}
    condId={id}
    type={entities[rId][field]}
    counts={index + 1}
    field={field}
    label={label}
  />);
  
  const addType = () => {
    const opt = {
      id: nanoid(),
      [field]: `Выберите ${label}`
    };
    pushType( { id, opt });
  };
  
  return (
    <S.Type>
      {types}
      <div/>
      <S.TypeFooter>
        <Button clickHandler={addType} type="plus" label={`Добавить ${label}`} />
      </S.TypeFooter>
    </S.Type>
  )
};

export default Cards;