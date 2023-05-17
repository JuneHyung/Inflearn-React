const {combineReducers} = require('redux');
// const userReducer = require('./user');
// const postReducer = require('./post');
const userSlice = require('./user');
const postSlice = require('./post');

module.exports = combineReducers({
  user: userSlice.reducer,
  posts: postSlice.reducer,
});