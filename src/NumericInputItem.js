import React from 'react';

const NumericInputItem = ({value,idx,handleChange}) =>{
  const changeHandler = (e) =>{
    handleChange(e.target.value,idx);
  }
  return(
    <div>
      <label>number</label>
      <input type='number' value={value} onChange={changeHandler}/>
    </div>
  )
}

export default NumericInputItem;
