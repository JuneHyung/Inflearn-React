import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout } from "./actions/user";

class App extends Component {
  onClick = () => {
    this.props.dispatchLogin({
      id: "jhjoe",
      password: "비밀번호",
    });
  };
  onLogout = () => {
    this.props.dispatchLogout();
  };
  render() {
    const { user } = this.props;
    return (
      <div>
        {user.isLoggingIn ? "로그인 중" : user.data ? user.data.nickname : "로그인 해주세요."}
        {!user.data ? <button onClick={this.onClick}>로그인</button> : <button onClick={this.onLogout}>로그아웃</button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
}); // reselct
const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (data) => dispatch(login(data)),
  dispatchLogout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
