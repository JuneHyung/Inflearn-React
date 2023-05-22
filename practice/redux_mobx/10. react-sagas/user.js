import {all, fork , take,call, put, takeLatest} from 'redux-saga/effects';
import { LOG_IN, LOG_IN_FAILURE, LOG_IN_SUCCESS } from './constant';

const HELLO_SAGA = "HELLO_SAGA"

function* loginAPI(){
  // 서버에 요청을 보내는 부분
}

function* login(){
  try{
    yield call(loginAPI); // 서버에 요청
    yield put({ // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
    })
  }catch(e){ // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    })
  }
}

function* watchLogin(){
  yield take(LOG_IN);
  yield put({
    type: LOG_IN_SUCCESS,
  })
}

function* helloSaga(){
  while(true){
      yield take(HELLO_SAGA);  
      console.log('hello saga');
  }
}

export default function* userSaga(){
  yield all([
    fork(watchLogin),
    helloSaga(),
    watchHello(),
    watchLogin(),
    watchSignUp(),

  ]);
}