import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    alert('You have Registered successfully')
    navigate('/')
  }
    return (
    <div className='container offset-3 mt-4 col-5'>
            <h4>Register your Information here</h4>
    
            
<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">course</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" />
    </div>
  </div>
  
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">College</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Start Yr</label>
    <div class="col-sm-10">
      <input type="date" class="form-control" id="inputPassword3"/>
    </div>
  </div>
   <button onClick={handleRegister} className='btn btn-sm btn-danger col-10 mb-3 offset-2'>Submit</button>
  </form>
</div>
    );
};




export default SignUp;
