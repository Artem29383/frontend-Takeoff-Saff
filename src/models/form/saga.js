import { takeEvery, call } from '@redux-saga/core/effects';
import { POST_DATA_FORM } from './actions';
import { postFormData } from '../../api/api';

function* deployTest(action) {
  try {
    yield call(postFormData, action.payload);
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSagaForm() {
  yield takeEvery(POST_DATA_FORM, deployTest);
}
