import React from 'react';
import S from './Range.styled';
import useAction from '../../../../../../hooks/useAction';
import { setRangeInterval } from '../../../../../../models/form/reducer';

const Range = ({ id, interval, counts, condId }) => {
  const changeInterval = useAction(setRangeInterval);
  const changeRangeHandler = e => {
    const t = e.currentTarget;
    if (t.dataset.start) {
      changeInterval( { interval: 'start', value: t.value, rangeId: id, condId } );
    }
    if (t.dataset.end) {
      changeInterval( { interval: 'end', value: t.value, rangeId: id, condId } );
    }
  };
  
  return (
    <>
      <S.TitleRange>
        {counts > 1 && 'ИЛИ'} Диапазон {counts}
      </S.TitleRange>
      <S.InputsWrapper>
        от <S.Input type="text" value={interval.start} onChange={changeRangeHandler} data-start />
        до <S.Input type="text" value={interval.end} onChange={changeRangeHandler} data-end />
      </S.InputsWrapper>
    </>
  )
};

export default Range