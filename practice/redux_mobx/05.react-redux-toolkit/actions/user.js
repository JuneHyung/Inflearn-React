const {createAsyncThunk} =require('@reduxjs/toolkit');

const delay = (time, value) => new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(value);
  }, time)
})

const login = createAsyncThunk('user/login', async(data, thunkAPI)=>{
  // const state = thunk.API.getState();
  // pending, fullfilled, rejected
  console.log(data)
  // throw new Error('에러 발생!')
  const result = await delay(500, {
    userId: 1,
    nickname: 'zero'
  });
  return result ;
})

module.exports={
  login
}