const {createStore, compose, applyMiddleware} = require('redux');

const reducer = require('./reducers');
const {login, logout } = require('./actions/user');
const {addPost } = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: true,
    data:null,
  },
  posts: [],
  // comments: [],
  // favorites: [],
  // history: [],
  // likes: [],
  // followers: [],
}

const firstMiddleware = (store) => (dispatch) => (action) =>{
  console.log('로깅', action)
  // 기능 추가
  dispatch(action)
};

const thunkMiddleware = (store) => (dispatch) => (action) =>{
  if(typeof action === 'function'){
    return action(store.dispatch, store.getState);
  }
  return dispatch(action)
};

const enhancer = compose(
  applyMiddleware(
    firstMiddleware, 
    thunkMiddleware,
  ),
)

const store = createStore(reducer, initialState, enhancer);
// store.subscribe(()=>{ // redux-react안에 들어있다.
//   console.log('chagned'); // 화면 바꿔주는 코드 작성 부분.
// })

console.log('1st initialState',  store.getState());
store.dispatch(login({
  id: 1,
  name: 'zero',
  admin: true,
}))
console.log('2nd login',  store.getState());
// //----------------------------------------

// store.dispatch(login({
//   id:1,
//   name: 'JuneHyung',
//   admin: true,
// }));
// console.log('2nd login', store.getState());

// store.dispatch(addPost({
//   userId: 1,
//   id:1,
//   content: 'Hello Redux'
// }))
// console.log('3rd addPost', store.getState());

// store.dispatch(addPost({
//   userId: 1,
//   id:2,
//   content: 'Hello Redux2'
// }))
// console.log('4th addPost', store.getState());

// store.dispatch(logout());
// console.log('5th logout', store.getState());