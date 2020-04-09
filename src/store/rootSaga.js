import { all } from '@redux-saga/core/effects';
import rootSagaForm from '../models/form/saga';

export function* rootSaga() {
  yield all([
    rootSagaForm()
  ]);
}
