import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

const DynamicAddRemove2 = () => {
  const [dataArray, setDataArray] = useState({
    developer: [],
  });
  const [person, setPerson] = useState({ id: "", name: "" });
  const SaveArray = () => {
    if (!person.name) {
      alert("Error");
    } else {
      setDataArray({
        ...dataArray,
        developer: [...dataArray.developer, person],
      });
      document.getElementById("input1").value = "";
      setPerson("");
    }
  };
  const setData = () => {
    alert(JSON.stringify(dataArray.developer));
  };

  const deleteData = (filter) => {
    const newValue = dataArray.developer.filter((fil) => fil.id != filter);

    setDataArray({ ...dataArray, developer: newValue });
  };
  console.log(dataArray.developer);

  return (
    <div>
      <h5>Developer</h5>
      {dataArray.developer?.map((data) => {
        return (
          <>
            <br />
            {data.name && (
              <>
                <input type="text" value={data.name} />
                <button onClick={() => deleteData(data.id)}>X</button>
              </>
            )}
          </>
        );
      })}
      <br />
      <input
        type="text"
        id="input1"
        onChange={(e) =>
          setPerson({
            ...person,
            name: e.target.value,
            id: uniqid(),
          })
        }
      />
      <button onClick={SaveArray}>add</button>

      <br />
      <br />
      <button onClick={setData}>save</button>
    </div>
  );
};

export default DynamicAddRemove2;

//  const [arrayData, setArrayData] = useState([
//     {
//       developer: [],
//       officeStaff: [],
//     },
//   ]);
//   const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
//   const [inputList2, setInputList2] = useState([
//     { firstName: "", lastName: "" },
//   ]);

//   // developer
//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//   };
//   // office staff
//   const handleChange2 = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList2];
//     list[index][name] = value;
//     setInputList2(list);
//   };

//   // add for developer
//   const handleAddClick = () => {
//     // alert("object added!");
//     setInputList([...inputList, { firstName: "", lastName: "" }]);
//   };
//   // add for office staff
//   const handleAddClick2 = () => {
//     // alert("object added!");
//     setInputList2([...inputList2, { firstName: "", lastName: "" }]);
//   };

//   const handleSave = (index, e) => {
//     const { object, value } = e.target;
//     const list1 = [...inputList];
//     const list2 = [...inputList2];
//     list1[index][object] = value;
//     list2[index][object] = value;
//     setArrayData({
//       ...arrayData,
//       developer: list1,
//       ...arrayData,
//       officeStaff: list2,
//     });
//   };

//   // remove developer
//   const handleRemoveClick = (index) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//   };
//   // remove office staff
//   const handleRemoveClick2 = (index) => {
//     const list = [...inputList2];
//     list.splice(index, 1);
//     setInputList2(list);
//   };

//   console.log(inputList, "Data 1");
//   console.log(inputList2, "Data 2");

//   console.log(arrayData);

// <div>
// <div>
//   <h5>Developers</h5>
//   <div>
//     {inputList.map((x, i) => {
//       return (
//         <>
//           <div>
//             <label htmlFor="">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Enter firstname"
//               onChange={(e) => handleChange(e, i)}
//             />
//           </div>
//           <div>
//             <label htmlFor="">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Enter lastname"
//               onChange={(e) => handleChange(e, i)}
//             />
//           </div>
//           <div>
//             {inputList.length - 1 === i && (
//               <button className="" onClick={handleAddClick}>
//                 Add more
//               </button>
//             )}
//             {inputList.length !== 1 && (
//               <button
//                 className=""
//                 onClick={(e) => handleRemoveClick(i)}
//               >
//                 Remove
//               </button>
//             )}
//           </div>
//         </>
//       );
//     })}
//   </div>
//   <h5>Office Staff</h5>
//   <div>
//     {inputList2.map((x, i) => {
//       return (
//         <>
//           <div>
//             <label htmlFor="">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Enter firstname"
//               onChange={(e) => handleChange2(e, i)}
//             />
//           </div>
//           <div>
//             <label htmlFor="">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Enter lastname"
//               onChange={(e) => handleChange2(e, i)}
//             />
//           </div>
//           <div>
//             {inputList2.length - 1 === i && (
//               <button className="" onClick={handleAddClick2}>
//                 Add more
//               </button>
//             )}
//             {inputList2.length !== 1 && (
//               <button
//                 className=""
//                 onClick={(e) => handleRemoveClick2(i)}
//               >
//                 Remove
//               </button>
//             )}
//           </div>
//         </>
//       );
//     })}
//   </div>
//   <br />
//   <br />
//   <button onClick={(e) => handleSave(e)}>Save Data</button>
// </div>
// </div>
