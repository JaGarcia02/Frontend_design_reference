import axios from "axios";
import React, { useEffect, useState } from "react";

const Timekeeping = () => {
  const [dtr, setDtr] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/new_DTR/dtr_viewAll")
      .then((res) => {
        setDtr(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(dtr);
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="content">
          <h1 className="title">Timekeeping</h1>
          <button className="add-dtr">Add Timerecord</button>
          <table>
            <thead>
              <tr>
                <th className="one">No.</th>
                <th className="two">Cutoff</th>
                <th className="three">Time in</th>
                <th className="four">Break out</th>
                <th className="five">Break in</th>
                <th className="six">Time out</th>
                <th className="seven">Bio ID</th>
              </tr>
            </thead>
            <tbody>
              <div className="td-content">
                {dtr.map((data, index) => {
                  return (
                    <>
                      <tr>
                        <td className="td-one">{index + 1}</td>
                        <td className="td-two">{data.Cutoff}</td>
                        <td className="td-three">{data.Time_in}</td>
                        <td className="td-four">{data.Time_break_out}</td>
                        <td className="td-five">{data.Time_break_in}</td>
                        <td className="td-six">{data.Time_out}</td>
                        <td className="td-seven">{data.BioID}</td>
                      </tr>
                    </>
                  );
                })}
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Timekeeping;
