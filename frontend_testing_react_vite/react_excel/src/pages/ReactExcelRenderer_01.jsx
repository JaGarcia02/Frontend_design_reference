import React from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ReactExcelRenderer_01 = () => {
  // for the employee list
  const [header, setHeader] = useState([]);
  const [cols, setCols] = useState([]);
  const [emp, setEmp] = useState([]);
  const [buttonHide, setButtonHide] = useState(false);

  //  for timekeeping
  const [Theader, setTheder] = useState([]);
  const [Tcols, setTcols] = useState([]);
  const [timekeep, setTimeKeep] = useState([]);
  const [dtr, setDtr] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8587/test/get-data")
      .then((res) => {
        setEmp(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8587/test/get-data-timekeeping")
      .then((res) => {
        setDtr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFile = (e) => {
    setButtonHide(true);
    const file = e.target.files[0];
    ExcelRenderer(file, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setHeader(res.rows[0]);
      }

      let newRows = [];
      res.rows.slice(1).map((row, index) => {
        if (row && row !== "undefined!") {
          newRows.push({
            // the rows must be on the data base
            employee_name: row[0],
            employee_id: row[1],
          });
        }
      });
      setCols(newRows);
    });
  };

  const handleFile2 = (e) => {
    setButtonHide(true);
    const file = e.target.files[0];
    ExcelRenderer(file, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setHeader(res.rows[0]);
      }

      let newRows = [];
      res.rows.slice(1).map((row, index) => {
        if (row && row !== "undefined!") {
          newRows.push({
            // the rows must be on the data base
            Time: row[0],
            BioID: row[1],
          });
        }
      });
      setCols(newRows);
    });
  };

  const submit_data = () => {
    axios
      .post("http://localhost:8587/test/bulk-create", { excel_file: cols })
      .then((res) => {
        console.log(res);
        alert("Data Submited Successfully!");
        // to load updated employee list
        axios
          .get("http://localhost:8587/test/get-data")
          .then((res) => {
            setEmp(res.data);
          })
          .catch((err) => console.log(err));
        setButtonHide(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main">
      <div className="content-1">
        <h1>Employee File</h1>
        <input type="file" onChange={handleFile} />
        <br />

        <div className="inside-content-1">
          <table>
            <thead>
              <tr>
                {header.map((h, i) => (
                  <>
                    <th key={i}>{h}</th>
                  </>
                ))}
              </tr>
            </thead>
            <tbody>
              {cols.map((data, index) => {
                return (
                  <>
                    <tr>
                      <td>{data.employee_name}</td>
                      <td>{data.employee_id}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <br />
        {buttonHide && (
          <button id="button-submit" onClick={submit_data}>
            Submit
          </button>
        )}
      </div>

      {/* 2nd part */}

      <div className="content-2">
        <h1>Employee List</h1>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((data) => {
              return (
                <>
                  <tr>
                    <td>{data.employee_name}</td>
                    <td>{data.employee_id}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 3rd part timekeeping */}

      <div>
        <div className="content-1">
          <h1>Time Keeping</h1>
          <input type="file" onChange={handleFile2} />
          <br />

          <div className="inside-content-1">
            <table>
              <thead>
                <tr>
                  {Theader.map((h, i) => (
                    <>
                      <th key={i}>{h}</th>
                    </>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Tcols.map((data, index) => {
                  return (
                    <>
                      <tr>
                        <td>{data.employee_name}</td>
                        <td>{data.employee_id}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <br />
          {buttonHide && (
            <button id="button-submit" onClick={submit_data}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReactExcelRenderer_01;
