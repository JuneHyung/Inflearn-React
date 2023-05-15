const {createStore} = require('redux');

const reducer = (prevState, action) =>{
  switch(action.type){
    case 'LOG_IN':
      return{
        ...prevState,
        user: action.data,
      }
    case 'LOG_OUT':
      return{
        ...prevState,
        user: null,
      }
    case 'ADD_POST':
      return{
        ...prevState,
        posts: [...prevState.posts, action.data],
      }
    default: return prevState;
  }
};
const initialState = {
  user: null,
  posts:[],
}
// const nextState = {
//   ...initialState,
//   posts: [action.data],
// }
// const nextState = {
//   ...initialState,
//   posts: [...initialState.posts, action.data],
// }

const store = createStore(reducer, initialState);
store.subscribe(()=>{ // redux-react안에 들어있다.
  console.log('chagned'); // 화면 바꿔주는 코드 작성 부분.
})

console.log('1st initialState',  store.getState());

// action
// const changeCompA=(data)=>{
//   return {
//     type:'CHANGE_COMP_A', // actino의 이름
//     data,
//   }
// }

const login = (data) => {
  return {
    type:'LOG_IN',
    data,
  }
}
const logout = () => {
  return {
    type:'LOG_OUT',
  }
}
const addPost = (data) =>{
  return{
    type:'ADD_POST',
    data
  }
}
//----------------------------------------
// store.dispatch(changeCompA('b'));
store.dispatch(login({
  id:1,
  name: 'JuneHyung',
  admin: true,
}));
console.log('2nd login', store.getState());

store.dispatch(addPost({
  userId: 1,
  id:1,
  content: 'Hello Redux'
}))
console.log('3rd addPost', store.getState());

store.dispatch(addPost({
  userId: 1,
  id:2,
  content: 'Hello Redux2'
}))
console.log('4th addPost', store.getState());

store.dispatch(logout());
console.log('5th logout', store.getState());