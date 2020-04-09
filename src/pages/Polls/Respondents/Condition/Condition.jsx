import React, { useEffect, useState } from 'react';
import S from './Condition.styled';
import DropDown from '../../../../components/DropDown';
import { questionVariable } from '../../../../styles/colors';
import AgeVariant from './AgeVariant';
import { nanoid } from 'nanoid';
import useAction from '../../../../hooks/useAction';
import Cards from './TypeCards';
import { removeCondition, setInitValueOption } from '../../../../models/form/reducer';
import Button from '../../../../components/Button';

const Condition = ({ id, type, condition, index }) => {
  const [value, setValue] = useState(type);
  const [condType, setCondType] = useState('');
  const setInitValue = useAction(setInitValueOption);
  const removeCond = useAction(removeCondition);
  
  const removeConditionHandler = () => {
    removeCond(id);
  };
  
  useEffect(() => {
    const uniqId = nanoid();
    const initValue = {
      id: uniqId
    };
    if (value === questionVariable.age) {
      initValue.interval = {
        start: '',
        end: ''
      };
    } else if (value === questionVariable.type) {
      initValue.type = 'Выберите тип';
    } else if (value === questionVariable.status) {
      initValue.status = 'Выберите статус';
    }
    setInitValue({ id, initValue });
    setCondType(value);
  }, [value, setInitValue, id]);
  
  return (
    <S.Condition index={index + 1}>
      <S.DivCond>
        <S.CondText>
          Условие {index + 1}
        </S.CondText>
        <S.CondOptions>
          <DropDown
            options={[
              questionVariable.age,
              questionVariable.type,
              questionVariable.status
            ]}
            setValue={setValue}
            value={value}
          />
        </S.CondOptions>
      </S.DivCond>
      {condType === questionVariable.age &&
      <AgeVariant
        id={id}
        entities={condition.conditionsVariants.entities}
        ids={condition.conditionsVariants.ids}
      />
      }
      {condType === questionVariable.type &&
      <Cards
        id={id}
        entities={condition.conditionsVariants.entities}
        ids={condition.conditionsVariants.ids}
        label="Тип"
        field="type"
      />
      }
      {condType === questionVariable.status &&
      <Cards
        id={id}
        entities={condition.conditionsVariants.entities}
        ids={condition.conditionsVariants.ids}
        label="Статус"
        field="status"
      />
      }
      <S.RemovePos>
        <Button clickHandler={removeConditionHandler} type="remove" label="Удалить условие" />
      </S.RemovePos>
    </S.Condition>
  );
};

export default Condition;