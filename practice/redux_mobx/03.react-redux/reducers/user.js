const { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT } = require("../constant");

const initialState = {
  isLoggingIn: false,
  data: null,
};
const userReducer = (prevState = initialState, action) =>{
  switch(action.type){
    case LOG_IN_REQUEST:
      return{
        ...prevState,
        data:null,
        isLoggingIn: true,
      }
    case LOG_IN_SUCCESS:
      return{
        ...prevState,
        data: action.data,
        isLoggingIn: true,
      }
    case LOG_IN_FAILURE:
        return{
          ...prevState,
          data: null,
          isLoggingIn: false,
        }
    case LOG_OUT:
      return{
        ...prevState,
        data: null,
      }
    default: return prevState;
  }
};

module.exports=userReducer;