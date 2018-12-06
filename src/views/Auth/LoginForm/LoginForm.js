import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import login from'./actions.jsx'
import  './LoginForm.scss'
import { Link } from 'react-router-dom';

export class LoginForm extends Component {
  constructor(props){
      super(props);
      this.state = {
        email: "",
        password: ""
      };
  }
  componentDidUpdate(prevProps) {
    const { history, isLoginSuccess, user } = this.props;
    if (prevProps.isLoginPending && isLoginSuccess) {
      localStorage.setItem('user', JSON.stringify(user))
      window.$('#loginModal').modal('hide')
      history.push('/profile');
    }
  }

  componentDidMount(prevProps) {
    const { history} = this.props;
    if (prevProps) {
      window.$('#loginModal').modal('hide')
      history.push('/reset-password');
    }
  }

  render() {
  let {email, password} = this.state;
  let {loginError, isLoginSuccess, isLoginPending, isLoginError} = this.props;

  let pendingHtml = "";
  let successHtml = "";
  let errorHtml = "";

  if(isLoginPending){
    pendingHtml= <div>Please wait...</div>
  }
  if(isLoginError){
     errorHtml = <div className='errors'>{loginError}</div>;
  }

  return (
  <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
      <div className="modal-body">
      <div className="login-form" >

      <form className='loginForm' onSubmit={(event)=>this.handleSubmit(event)}>
          <div className="form-group">
            <div className="input-group">
              <input className='form-control' placeholder="Username" required type="email" id="email" name="email" value={email} onChange={e => this.setState({email: e.target.value})}></input>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <input className='form-control' placeholder="Password"  required type="password"  id="password" value={password} name="password" onChange={e => this.setState({password: e.target.value})}></input>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-warning btn-block login-btn" >Login</button>
          </div>
            {pendingHtml}
            {errorHtml}
            <div className="hint-text small"> Forgot Password? <a href="/reset-password">Reset Password</a></div>
            <div className="or-seperator"><i>or</i></div>
            <div className="social-btn"></div>
      </form>
    </div>
      </div>
    </div>
  </div>
</div>
  )
}
handleSubmit = (event)=>  {
    event.preventDefault();
    let {email, password} = this.state;
    this.props.login({ email, password })
  }
}

const mapStateToProps =  (state) => {
  return {
      isLoginPending: state.loginReducer.isLoginPending,
      isLoginSuccess: state.loginReducer.isLoginSuccess,
      isLoginError: state.loginReducer.isLoginError,
      loginError: state.loginReducer.loginError,
      user: state.loginReducer.user
  }
}

export const mapDispatchToProps = (dispatch) => {
  return{
      login: ({ email, password }) => dispatch(login({ email, password }))
  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));

