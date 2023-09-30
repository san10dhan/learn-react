import {put, takeEvery} from 'redux-saga/effects';
function* getData() {
    let data = yield fetch(' http://localhost:4000/emplist');
    data = yield data.json();
    yield put({type: 'SET_DATA', data});
    console.log(data);
}
function* saga() {
yield takeEvery('ADD_TO_CART', getData)
}

export default saga;