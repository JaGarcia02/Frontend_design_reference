import axios from "axios";
import React, { useEffect, useState } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import moment from "momnet";

const ReactExcelRenderer_02 = () => {
  const [cutOffDate, setCutOffDate] = useState({ start: "", end: "" });
  const [cutOffList, setCutOffList] = useState([]);
  const [cutoff, setCutoff] = useState("");
  const [dtr, setDtr] = useState([]);
  const [summary, setSummary] = useState([]);
  const [dtr_data, setDtr_Data] = useState([]);
  const [summary_data, setSummary_Data] = useState([]);
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/timekeeping/view-all-cutoff")
      .then((res) => {
        setCutOffList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:9000/api/timekeeping/view-dtr-data")
      .then((res) => {
        setDtr_Data(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:9000/api/timekeeping/view-summarydata")
      .then((res) => {
        setSummary_Data(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const create_cutoff = () => {
    const cutoff_data = cutOffDate.start + " - " + cutOffDate.end;
    if (cutOffDate.start == "" || cutOffDate.end == "") {
      alert("Please Enter Cutoff date!");
    } else
      axios
        .post("http://localhost:9000/api/timekeeping/create-cutoff", {
          cutoff: cutoff_data,
        })
        .then((res) => {
          setCutOffList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const Excel_DTR = (e) => {
    const file = e.target.files[0];
    ExcelRenderer(file, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        let newRows = [];
        res.rows.slice(1).map((row, index) => {
          if (row && row !== "undefined!") {
            newRows.push({
              Time: row[0],
              BioID: row[1],
            });
          }
        });
        setDtr(newRows);
      }
    });
  };

  const Excel_Summary = (e) => {
    const file = e.target.files[0];
    ExcelRenderer(file, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        let newRows = [];
        res.rows.slice(1).map((row, index) => {
          if (row && row !== "undefined!") {
            newRows.push({
              REG: row[1],
              OT: row[2],
              UT: row[3],
              ND: row[4],
              LWP: row[5],
              REGNS: row[6],
              OTNS: row[7],
              OTND: row[8],
              LATES: row[9],
              ABSENT: row[10],
              Employee_ID: row[11],
            });
          }
        });
        setSummary(newRows);
      }
    });
  };

  const save_dtr_cutoff = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/api/timekeeping/create-dtr", {
        dtr: dtr,
      })
      .then((res) => {
        console.log(res.data);
        alert("DTR Imported successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const save_summary = (e) => {
    e.preventDefault();

    const summaryData = summary.map((res) => {
      return {
        cutOffID: cutoff,
        REG: res.REG,
        OT: res.OT,
        UT: res.UT,
        ND: res.ND,
        LWP: res.LWP,
        REGNS: res.REGNS,
        OTNS: res.OTNS,
        OTND: res.OTND,
        LATES: res.LATES,
        ABSENT: res.ABSENT,
        Employee_ID: res.Employee_ID,
      };
    });

    axios
      .post("http://localhost:9000/api/timekeeping/create-summary", {
        summaryData,
      })
      .then((res) => {
        console.log(res.data);
        alert("Summary Imported successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ultra-main">
      <div className="main3">
        {/* create cutoff */}
        <div className="create-cutoff-container">
          <h1 className="title1">Timekeeping</h1>
          <div className="input-container">
            <div className="input-start">
              <label htmlFor="">Start:</label>
              <input
                type="date"
                onChange={(e) =>
                  setCutOffDate({ ...cutOffDate, start: e.target.value })
                }
              />
            </div>

            <div className="input-end">
              <label htmlFor="">End:</label>
              <input
                type="date"
                onChange={(e) =>
                  setCutOffDate({ ...cutOffDate, end: e.target.value })
                }
              />
            </div>
          </div>

          <div className="selectCutoff-container">
            <select name="" id="" className="import-dropdown">
              <option value="" selected>
                Select Cutoff
              </option>
              {cutOffList.map((res) => {
                return <option value={res.cutOffID}>{res.cutOffID}</option>;
              })}
            </select>
          </div>

          <div className="btn-cutoff">
            <button onClick={create_cutoff}>Submit</button>
          </div>
        </div>
        {/* create cutoff */}

        {/* import dtr */}
        <div className="import-dtr-container">
          <div className="import-file-container">
            <form action="" onSubmit={save_dtr_cutoff}>
              <div className="dtr-file">
                <label htmlFor="">DTR File</label>
                <input
                  type="file"
                  className="dtr-import-file"
                  onChange={Excel_DTR}
                  required
                />
              </div>

              <div className="import-btn-submit">
                <input type="submit" className="import-submit" />
              </div>
            </form>

            <div className="table-dtr">
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Employee Bio Id</th>
                  </tr>
                </thead>
                <tbody>
                  {dtr.map((res) => {
                    return (
                      <>
                        <tr>
                          <td>{moment(res.Time).format("LT")}</td>
                          <td>{res.BioID}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="data-dtr-container">
          <h1 className="title1">DTR Data</h1>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Bio Id</th>
              </tr>
            </thead>
            <tbody>
              {dtr_data.map((res) => {
                return (
                  <>
                    <tr>
                      <td>{res.Time}</td>
                      <td>{res.BioID}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* import drt */}

        {/* import summary */}
      </div>

      {/* Data DTR */}
      <div className="right">
        {/* import summary */}
        <div className="import-summary-container">
          <div className="import-file-container">
            <form action="" onSubmit={save_summary}>
              <div className="summary-file">
                <label htmlFor="">Summary File</label>
                <input
                  type="file"
                  className="summary-import-file"
                  onChange={Excel_Summary}
                  required
                />
              </div>

              <div className="import-cutoff">
                <select
                  name=""
                  id=""
                  className="import-dropdown"
                  onChange={(e) => setCutoff(e.target.value)}
                >
                  <option value="">Select Cutoff</option>
                  {cutOffList.map((res) => {
                    return <option value={res.cutOffID}>{res.cutOffID}</option>;
                  })}
                </select>
              </div>

              <div className="import-btn-submit">
                <input type="submit" className="import-submit" />
              </div>
            </form>

            <div className="table-dtr">
              <table>
                <thead>
                  <tr>
                    <th>Cutoff</th>
                    <th>REG</th>
                    <th>OT</th>
                    <th>UT</th>
                    <th>ND</th>
                    <th>LWP</th>
                    <th>REGNS</th>
                    <th>OTNS</th>
                    <th>OTND</th>
                    <th>LATES</th>
                    <th>ABSENT</th>
                    <th>Emp Id</th>
                  </tr>
                </thead>
                <tbody>
                  {summary.map((res) => {
                    return (
                      <>
                        <tr>
                          <td>{cutoff}</td>
                          <td>{res.REG}</td>
                          <td>{res.OT}</td>
                          <td>{res.UT}</td>
                          <td>{res.ND}</td>
                          <td>{res.LWP}</td>
                          <td>{res.REGNS}</td>
                          <td>{res.OTNS}</td>
                          <td>{res.OTND}</td>
                          <td>{res.LATES}</td>
                          <td>{res.ABSENT}</td>
                          <td>{res.Employee_ID}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* import summary */}

        {/* summary data */}
        <div className="import-summary-container">
          <div className="import-file-container">
            <h1 className="title1">Summary Data</h1>

            <div className="table-dtr">
              <table>
                <thead>
                  <tr>
                    <th>Cutoff</th>
                    <th>REG</th>
                    <th>OT</th>
                    <th>UT</th>
                    <th>ND</th>
                    <th>LWP</th>
                    <th>REGNS</th>
                    <th>OTNS</th>
                    <th>OTND</th>
                    <th>LATES</th>
                    <th>ABSENT</th>
                    <th>Emp Id</th>
                  </tr>
                </thead>
                <tbody>
                  {summary_data.map((res) => {
                    return (
                      <>
                        <tr>
                          <td>{res.cutOffID}</td>
                          <td>{res.REG}</td>
                          <td>{res.OT}</td>
                          <td>{res.UT}</td>
                          <td>{res.ND}</td>
                          <td>{res.LWP}</td>
                          <td>{res.REGNS}</td>
                          <td>{res.OTNS}</td>
                          <td>{res.OTND}</td>
                          <td>{res.LATES}</td>
                          <td>{res.ABSENT}</td>
                          <td>{res.Employee_ID}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* summary data */}
      </div>
    </div>
  );
};

export default ReactExcelRenderer_02;
