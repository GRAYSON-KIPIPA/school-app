import React from 'react';
import PropTypes from 'prop-types';


const Results = () => {
    return (
        <div>
            <table class="table col-7">
  <thead>
    <tr>
      <th scope="col">S/N</th>
      <th scope="col">Course Name</th>
      <th scope="col">Course Code</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
      
    {semesterOne.map((one) => (
                       
    <tbody>
    <tr>
      <th scope="row">{one.id}</th>
      <td>{one.title}</td>
      <td>{one.courseCode}</td>
      <td>{one.score}</td>
    </tr>
    
  </tbody>
                ))}
</table>
   
        </div>
    );
};


export default Results;


const semesterOne = [
    {id: 1, title: 'Introduction to Computer Language', courseCode: 'CS111', score: 'A'},
    {id: 2, title: 'Introduction to Programing Language', courseCode: 'CS111', score: 'B'},
    {id: 3, title: 'Introduction to Networking', courseCode: 'CS111', score: 'B+'},
    {id: 4, title: 'Introduction to Machine Language', courseCode: 'CS111', score: 'C'},
    {id: 5, title: 'Introduction to Computer', courseCode: 'CS111', score: 'A'},
]