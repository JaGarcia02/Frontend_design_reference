import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

const DynamicAddRemove_Page = () => {
  const [dataArray, setDataArray] = useState({ service: [] });
  const [employee, setEmployee] = useState({ id: "", name: "" });

  const SaveArray = () => {
    if (!employee.name) {
      alert("Empty!");
    } else if (dataArray.service.length >= 4) {
      alert("Limit has been reached!");
      document.getElementById("service").value = "";
      setEmployee("");
    } else {
      setDataArray({
        ...dataArray,
        service: [...dataArray.service, employee],
      });
      document.getElementById("service").value = "";
      setEmployee("");
    }
  };

  const DeleteData = (data) => {
    const newValue = dataArray.service.filter((fil) => fil.id != data);
    setDataArray({ ...dataArray, service: newValue });
  };

  const setArray = () => {
    alert(JSON.stringify(dataArray.service));
    console.log(dataArray);
  };

  return (
    <div>
      <div>
        <h1>Test</h1>
        <div>
          {dataArray.service?.map((res) => {
            console.log();
            return (
              <>
                <br />
                {res.name && (
                  <>
                    <input type="text" defaultValue={res.name} />
                    <button onClick={() => DeleteData(res.id)}>
                      Remove Employee
                    </button>
                  </>
                )}
              </>
            );
          })}
          <br />

          {dataArray.service.length == 4 ? (
            ""
          ) : (
            <>
              <input
                type="text"
                name="service"
                id="service"
                onChange={(e) =>
                  setEmployee({
                    ...employee,
                    id: uniqid(),
                    name: e.target.value,
                  })
                }
              />
              <button onClick={SaveArray}>Add Employee</button>
            </>
          )}
        </div>
        <button onClick={setArray}>Save</button>
      </div>
    </div>
  );
};

export default DynamicAddRemove_Page;

// const DynamicAddRemove_Page = () => {
//     const [serviceList, setServiceList] = useState([{ service: "" }]);

//     const handleServiceChange = (e, index) => {
//       const { name, value } = e.target;
//       const list = [...serviceList];
//       list[index][name] = value;
//       setServiceList(list);
//     };

//     const handleServiceRemove = (index) => {
//       const list = [...serviceList];
//       list.splice(index, 1);
//       setServiceList(list);
//     };

//     const handleServiceAdd = () => {
//       setServiceList([...serviceList, { service: "" }]);
//     };

//     return (
//       <form className="main-container" autoComplete="off">
//         <div className="form-field">
//           <label htmlFor="service">Service(s)</label>
//           {serviceList.map((singleService, index) => (
//             <div key={index} className="services">
//               <div className="first-division">
//                 <input
//                   name="service"
//                   type="text"
//                   id="service"
//                   value={singleService.service}
//                   onChange={(e) => handleServiceChange(e, index)}
//                   required
//                 />
//                 {serviceList.length - 1 === index && serviceList.length < 4 && (
//                   <button
//                     type="button"
//                     onClick={handleServiceAdd}
//                     className="add-btn"
//                   >
//                     <span>Add a Service</span>
//                   </button>
//                 )}
//               </div>
//               <div className="second-division">
//                 {serviceList.length !== 1 && (
//                   <button
//                     type="button"
//                     onClick={() => handleServiceRemove(index)}
//                     className="remove-btn"
//                   >
//                     <span>Remove</span>
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="output">
//           <h2>Output</h2>
//           {serviceList &&
//             serviceList.map((singleService, index) => (
//               <ul key={index}>
//                 {singleService.service && <li>{singleService.service}</li>}
//               </ul>
//             ))}
//         </div>
//       </form>
//     );
//   };

// const [dataArray, setDataArray] = useState({ service: [] });
// const [employee, setEmployee] = useState({ id: "", name: "" });

// const SaveArray = () => {
//   if (!employee.name) {
//     alert("Empty!");
//   } else if (dataArray.service.length >= 4) {
//     alert("Limit has been reached!");
//     document.getElementById("service").value = "";
//     setEmployee("");
//   } else {
//     setDataArray({
//       ...dataArray,
//       service: [...dataArray.service, employee],
//     });
//     document.getElementById("service").value = "";
//     setEmployee("");
//   }
// };

// const DeleteData = (filter) => {
//   const newValue = dataArray.service.filter((fil) => fil.id != filter);
//   setDataArray({ ...dataArray, service: newValue });
// };

// const setArray = () => {
//   alert(JSON.stringify(dataArray.service));
//   console.log(dataArray);
// };

// return (
//   <div>
//     <div>
//       <h1>Test</h1>
//       <div>
//         {dataArray.service?.map((res) => {
//           console.log();
//           return (
//             <>
//               <br />
//               {res.name && (
//                 <>
//                   <input type="text" defaultValue={res.name} />
//                   <button onClick={() => DeleteData(res.id)}>
//                     Remove Employee
//                   </button>
//                 </>
//               )}
//             </>
//           );
//         })}
//         <br />

//         {dataArray.service.length == 4 ? (
//           ""
//         ) : (
//           <>
//             <input
//               type="text"
//               name="service"
//               id="service"
//               onChange={(e) =>
//                 setEmployee({
//                   ...employee,
//                   id: uniqid(),
//                   name: e.target.value,
//                 })
//               }
//             />
//             <button onClick={SaveArray}>Add Employee</button>
//           </>
//         )}
//       </div>
//       <button onClick={setArray}>Save</button>
//     </div>
//   </div>
// );
// };

// export default DynamicAddRemove_Page;
