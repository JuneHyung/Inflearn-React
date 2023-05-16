const {createStore, compose, applyMiddleware} = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');

const reducer = require('./reducers');
const {login, logout } = require('./actions/user');
const {addPost } = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: false,
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

// const enhancer = compose(
//   applyMiddleware(
//     firstMiddleware, 
//     thunkMiddleware,
//   ),
// )
const enhancer = process.env.NODE_ENV === 'production'
  ? compose(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  )
  : composeWithDevTools(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  );
const store = createStore(reducer, initialState, enhancer);

module.exports = store;