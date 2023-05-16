const { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT } = require("../constant");

const login = (data) => { // async action creator
  return (dispatch, getState)=>{
    dispatch(loginRequest(data));
    try{
      setTimeout(()=>{ // 임의로 
        dispatch(loginSuccess({
          userId: 1,
          nickname: 'zero'
        }));
      }, 2000) 
      
      // axios.post().then().catch()으로 나중에 대체
    }catch(e){
      dispatch(loginFailure(e))
    }
  }
}

const loginRequest = (data) =>{
  return {
    type: LOG_IN_REQUEST,
    data,
  }
}
const loginSuccess = (data) =>{
  return {
    type: LOG_IN_SUCCESS,
    data,
  }
}
const loginFailure = (error) =>{
  return {
    type: LOG_IN_FAILURE,
    error,
  }
}

// const login = (data) => { // sync action creator
//   return {
//     type:'LOG_IN',
//     data,
//   }
// }
const logout = () => {
  return {
    type: LOG_OUT,
  }
}

module.exports={
  login, logout
}