import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';


const Home = ({onLogin}) => {

    return (
        <div className=' m-1 '> 
             <nav class="navbar navbar-expand-lg navbar-light bg-info text-white">
  <a class="nav-link text-white" href="#">Home</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Result <span class="sr-only">(current)</span></a>
      </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
          Register
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item text-white" >Lecture</a>
          <a class="dropdown-item text-white" >Student</a>
          <div class="dropdown-divider"></div>
        </div>
      </li>
      
      <li class="nav-item">
        <a class="nav-link " href='#'><Link to='/'><div className='text-white'>Logout</div></Link></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button  class="btn btn-outline-danger my-2 my-sm-0 text-white" type="submit">Search</button>
    </form>
  </div>
</nav>
<Dashboard />
        </div>
    );
};


Home.propTypes = {

};


export default Home;
