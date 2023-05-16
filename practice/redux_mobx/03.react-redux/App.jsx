import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './actions/user';

const App = () => {
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const onClick = useCallback(() =>{
    dispatch(login({
      id: 'jhjoe',
      password: '비밀번호'
    }))
  }, [])
  const onLogout = useCallback(() =>{
    dispatch(logout())
  }, [])
  return (
    <div>
      {user.isLoggingIn 
        ? '로그인 중'
        : user.data 
        ? user.data.nickname
        : '로그인 해주세요.'}
      {!user.data 
        ? <button onClick={onClick}>로그인</button> 
        : <button onClick={onLogout}>로그아웃</button>}
    </div>
  )
};

export default App;