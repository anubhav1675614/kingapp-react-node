import { all, fork } from 'redux-saga/effects';

import Action from './king';

export default function* rootSaga() {
  yield all([fork(Action)]);
}
