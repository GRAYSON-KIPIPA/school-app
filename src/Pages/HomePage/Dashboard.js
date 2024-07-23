import React from 'react';
import PropTypes from 'prop-types';


const Dashboard = () => {
    return (
        <div className='offset-3 col-5 mt-3'>
            <div class="card">
  <h5 class="card-header text-center">Grayson Mapunda</h5>
  <div class="card-body">
    <h5 class="card-title">University Examination Results will be shown here</h5>
    <p class="card-text">
        <ul>
            <h4>First Year</h4>
            <li>Semester One</li>
            <li>Semester Two</li>
            
              <h4>Second Year</h4>
            <li>Semester One</li>
            <li>Semester Two</li>
            
              <h4>Third Year</h4>
            <li>Semester One</li>
            <li>Semester Two</li>
            
        
        </ul>
    </p>
    <a href="#" class="btn btn-sm btn-info">More</a>
  </div>
</div>
        </div>
    );
};


Dashboard.propTypes = {

};


export default Dashboard;
