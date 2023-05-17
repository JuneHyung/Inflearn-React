const {configureStore, getDefaultMiddleware} = require('@reduxjs/toolkit');

const reducer = require('./reducers');
const {login, logout } = require('./actions/user');
const {addPost } = require('./actions/post');


const firstMiddleware = (store) => (dispatch) => (action) =>{
  console.log('로깅', action)
  // 기능 추가
  dispatch(action)
};

const store = configureStore({
  reducer, 
  // preloadedState 
  middleware: [firstMiddleware, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production'
});

module.exports = store;