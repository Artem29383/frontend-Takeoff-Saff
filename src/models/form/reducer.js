import { createSlice } from '@reduxjs/toolkit';
import { removePropFromObject } from '../../utils/removePropFromObject';
import { removeArrayElement } from '../../utils/removeArrayElement';

const formReducer = createSlice({
  name: 'form',
  initialState: {
    conditionals: {
      entities: {},
      ids: [],
    },
    isLoad: false,
  },
  reducers: {
    setInitValueOption(state, { payload }) {
      const { id, initValue } = payload;
      state.conditionals.entities[id].conditionsVariants.entities = {};
      state.conditionals.entities[id].conditionsVariants.entities[initValue.id] = initValue;
      state.conditionals.entities[id].conditionsVariants.ids = [initValue.id];
    },
    setRangeInterval(state, { payload }) {
      const { interval, value, condId, rangeId } = payload;
      state.conditionals.entities[condId].conditionsVariants.entities[rangeId].interval[interval] = value;
    },
    setType(state, { payload }) {
      const { type, condId, typeId, field } = payload;
      state.conditionals.entities[condId].conditionsVariants.entities[typeId][field] = type;
    },
    addNewOption(state, { payload }) {
      const { id, opt } = payload;
      state.conditionals.entities[id].conditionsVariants.entities[opt.id] = opt;
      state.conditionals.entities[id].conditionsVariants.ids.push(opt.id);
    },
    addCondition(state, { payload }) {
      const { id } = payload;
      state.conditionals.entities[id] = {
        id,
        type: 'Выберите условие',
        conditionsVariants: {
          entities: {},
          ids: []
        }
      };
      state.conditionals.ids.push(id);
    },
    removeCondition(state, { payload }) {
      const { id } = payload;
      state.conditionals.entities = removePropFromObject(state.conditionals.entities, id);
      state.conditionals.ids = removeArrayElement(state.conditionals.ids, id);
    }
  },
});

export default formReducer.reducer;
export const {
  setInitValueOption,
  setRangeInterval,
  addNewOption,
  setType,
  addCondition,
  removeCondition,
} = formReducer.actions;
