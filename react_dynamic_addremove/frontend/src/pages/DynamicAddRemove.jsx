import React, { useState } from "react";

const DynamicAddRemove = () => {
  //   const [val, setVal] = useState({
  //     array1: [],
  //     array2: [],
  //   });
  //   const [valObj, setValObj] = useState({
  //     name: "",
  //   });
  //   const [valObj2, setValObj2] = useState({
  //     name: "",
  //   });

  //   const add = () => {
  //     setVal({ ...val, array1: [...val.array1, valObj] });
  //   };
  //   const add2 = () => {
  //     setVal({ ...val, array2: [...val.array2, valObj2] });
  //   };

  //   console.log(val);

  // data 2

  // put obj in the array
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };
  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };
  console.log(val, "data-");

  return (
    <>
      <button onClick={() => handleAdd()}>Add</button>
      {val.map((data, i) => {
        return (
          <div>
            <input value={data} onChange={(e) => handleChange(e, i)} />
            <button onClick={() => handleDelete(i)}>x</button>
          </div>
        );
      })}
    </>
    // <div>
    //   <h1>1st Array</h1>
    //   <button onClick={add}>Add</button>
    //   <br />
    //   <br />
    //   <input
    //     type="text"
    //     onChange={(e) => setValObj({ ...valObj, name: e.target.value })}
    //   />

    //   <h1>2nd Array</h1>
    //   <button onClick={add2}>Add</button>
    //   <br />
    //   <br />
    //   <input
    //     type="text"
    //     onChange={(e) => setValObj2({ ...valObj2, name: e.target.value })}
    //   />
    // </div>
  );
};

export default DynamicAddRemove;
