import React from 'react';


const Card = ({name , ClassNo , money , height , weight}) => { // Renamed 'card' to 'Card'
  return (
    <div>
      <h1 className='bg-amber-700 font-stretch-50% font-bold rounded-xl'>Student Details</h1>
      <br />
      <p className='bg-amber-400 font-light font-stretch-75% rounded-l-md'>
        My name is {name || 'Ashutosh'}, I study in class {ClassNo || "10"},
        I have {money || "10000"} rupees with me, my height is {height || "150"}cm,
        and my weight is {weight ||"56"}kg.
      </p>
    </div>
  );
};

export default Card;
