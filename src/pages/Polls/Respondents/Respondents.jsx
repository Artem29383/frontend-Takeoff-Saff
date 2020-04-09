import React from 'react';
import S from './Respondents.styled';
import useSelector from '../../../hooks/useSelector';
import { getEntitiesSel, getIdsSel } from '../../../models/form/selectors';
import useAction from '../../../hooks/useAction';
import { addCondition } from '../../../models/form/reducer';
import Condition from './Condition';
import Sample from './Sample';
import Button from '../../../components/Button';
import { denormalized } from '../../../utils/denormalized';
import { POST_DATA_FORM } from '../../../models/form/actions';

const Respondents = () => {
  const entities = useSelector(getEntitiesSel);
  const ids = useSelector(getIdsSel);
  const pushCondition = useAction(addCondition);
  const deploy = useAction(POST_DATA_FORM);
  
  const conditions = ids.map((id, index) => <Condition
    key={id}
    id={id}
    index={index}
    type={entities[id].type}
    condition={entities[id]}
  />);
  
  const pushToServer = () => {
    const conditionals = denormalized(entities, ids, 'conditionals');
    deploy(conditionals);
  };
  
  return (
    <>
      <S.FormTitle>
        Добавить опрос
      </S.FormTitle>
      {conditions}
      <Sample clickHandler={pushCondition} />
      <S.PushToServer>
        <Button clickHandler={pushToServer} label="Отправить" type='' />
      </S.PushToServer>
      </>
  );
};

export default Respondents;