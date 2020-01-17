import React, { useState } from "react";
// import NumericInputItem from "./NumericInputItem";
import BookInputItem from './BookInputItem';

const DynamicInputList = () => {
  const [list, setList] = useState([]);

  const add = () => {
    setList(prevState => {
      return [...prevState, { value: 0 }];
    });
  };
  const remove = () => {
    setList(prevState => {
      return prevState.slice(0, prevState.length - 1);
    });
  };

  // const handleChange = (val, idx) => {
  //   setList(prevState => {
  //     const updatedState = prevState.slice();
  //     updatedState[idx] = { ...prevState[idx], value: val };
  //     return updatedState;
  //   });
  // };
  return (
    <div>
      {JSON.stringify(list)}
      <div>
        <button type="button" onClick={add}>
          add
        </button>
        <button type="button" onClick={remove}>
          remove
        </button>
      </div>
      {list.map((item, idx) => {
        return (
          // <NumericInputItem
          //   value={item.value}
          //   key={idx}
          //   idx={idx}
          //   handleChange={handleChange}
          // />
          <BookInputItem key={idx}/>
        );
      })}
    </div>
  );
};

export default DynamicInputList;
