const {createSlice} = require('@reduxjs/toolkit')
const {login} = require('../actions/user');

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state, action){
      state.data = null;
    }
  }, // 동기적
  extraReducers:{
    [login.pending](state,action){ // user/logIn/pending
      state.isLoggingIn = true;
    },
    [login.fulfilled](state, action){ // user/logIn/fulfilled
    state.data = action.payload
      state.isLoggingIn = false;
    },
    [login.rejected](state, action){ // user/logIn/rejected
    state.data = action.payload
      state.isLoggingIn = false;
    }
  }, // 비동기적
})

module.exports=userSlice;