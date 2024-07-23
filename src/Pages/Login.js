import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';


const Login = ({ onLogin, auth }) => {
  
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate('/home')
  }

    return (
        <div className='container col-5 bg-dark text-white mt-4'>
            <h4>Login Page</h4>
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Don't you have an account ?<Link to='/signup'> sign_up</Link></label>
  </div>
          <button onClick={handleLogin} type="submit" class="btn btn-danger btn-sm col-3 mb-1">Login</button>
</form>
        </div>
    );
};


Login.propTypes = {

};


export default Login;
