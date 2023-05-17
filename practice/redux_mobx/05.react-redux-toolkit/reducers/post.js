const { createSlice } = require("@reduxjs/toolkit");

const { ADD_POST } = require("../constant");
const { addPost } = require("../actions/post");

const initialState = {
  data: [],
};
// const postReducer = (prevState=initialState, action) =>{
//   switch(action.type){
//     case ADD_POST:
//       return [...prevState, action.data];
//     default: return prevState;
//   }
// };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost(state, action) {
      state.data = [];
    },
  }, // 동기적
  extraReducers: (builder) =>
    builder
      .addCase(addPost.pending, (state, action) => {})
      .addCase(addPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {})
      // .addMatcher((action)=>{
      //   return action.type.includes('/pending')
      // }, (state, action)=>{
      //   state.isLoading = true;
      // })
});

module.exports = postSlice;
