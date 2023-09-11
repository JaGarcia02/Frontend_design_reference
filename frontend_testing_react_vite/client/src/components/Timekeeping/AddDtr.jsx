import axios from "axios";
import React, { useState } from "react";
import uniqid from "uniqid";

const AddDtr = ({ setOpenAdd, setDtr }) => {
  const [dataArray, setDataArray] = useState({ data: [] });
  const [dtrInput, setDtrInput] = useState({
    id: "",
    cutoff: "",
    timeIn: "",
    breakStart: "",
    breakEnd: "",
    timeOut: "",
    bioId: "",
  });

  const SaveArray = () => {
    if (!dtrInput) {
      alert("empty");
    } else {
      setDataArray({ ...dataArray, data: [...dataArray.data, dtrInput] });
      document.getElementById("cutoffInput").value = "";
      document.getElementById("timeIn").value = "";
      document.getElementById("breakStart").value = "";
      document.getElementById("breakEnd").value = "";
      document.getElementById("timeOut").value = "";
      document.getElementById("bioId").value = "";
      setDtrInput("");
    }
  };

  console.log(dataArray);

  const RemoveInput = (id) => {
    const newValue = dataArray.data.filter((fil) => fil.id != id);
    setDataArray({ ...dataArray, data: newValue });
  };

  const SubmitData = () => {
    const test_data = dataArray.data.map((data) => {
      return {
        Cutoff: data.cutoff,
        Time_in: data.timeIn,
        Time_break_out: data.breakStart,
        Time_break_in: data.breakEnd,
        Time_out: data.timeOut,
        BioID: data.bioId,
      };
    });
    console.log(test_data);
    axios
      .post("http://localhost:9000/api/new_DTR/dtr_submit", {
        dtr: test_data,
      })
      .then((res) => {
        console.log(res.data);
        setDtr(res.data);
      });
  };

  return (
    <div className="modal-container-main">
      <div className="modal-container">
        <h1 className="title">Hello</h1>
        {dataArray.data.map((array) => {
          return (
            <>
              <div className="form-content">
                <div className="input-container">
                  <label htmlFor="">Cutoff</label>
                  <input
                    type="text"
                    placeholder="cutoff"
                    defaultValue={array.cutoff}
                    onChange={(e) =>
                      setDtrInput({ ...dtrInput, cutoff: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="">Time in</label>
                  <input
                    type="text"
                    placeholder="Time in"
                    defaultValue={array.timeIn}
                    onChange={(e) =>
                      setDtrInput({ ...dtrInput, timeIn: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="">Break start</label>
                  <input
                    type="text"
                    placeholder="Break start"
                    defaultValue={array.breakStart}
                    onChange={(e) =>
                      setDtrInput({ ...dtrInput, breakStart: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="">Break end</label>
                  <input
                    type="text"
                    placeholder="Break end"
                    defaultValue={array.breakEnd}
                    onChange={(e) =>
                      setDtrInput({ ...dtrInput, breakEnd: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="">Time out</label>
                  <input
                    type="text"
                    placeholder="Time out"
                    defaultValue={array.timeOut}
                    onChange={(e) =>
                      setDtrInput({ ...dtrInput, timeOut: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="">Bio id</label>
                  <input
                    type="text"
                    placeholder="Bio Id"
                    defaultValue={array.bioId}
                    onChange={(e) =>
                      setDtrInput({ ...dtrInput, bioId: e.target.value })
                    }
                  />
                </div>
                <button onClick={() => RemoveInput(array.id)}>Remove</button>
              </div>
            </>
          );
        })}
        {dataArray.data.length == 10 ? (
          ""
        ) : (
          <>
            <div className="form-content">
              <div className="input-container">
                <label htmlFor="">Cutoff</label>
                <input
                  id="cutoffInput"
                  type="text"
                  placeholder="cutoff"
                  onChange={(e) =>
                    setDtrInput({
                      ...dtrInput,
                      id: uniqid(),
                      cutoff: e.target.value,
                    })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="">Time in</label>
                <input
                  id="timeIn"
                  type="text"
                  placeholder="Time in"
                  onChange={(e) =>
                    setDtrInput({ ...dtrInput, timeIn: e.target.value })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="">Break start</label>
                <input
                  id="breakStart"
                  type="text"
                  placeholder="Break start"
                  onChange={(e) =>
                    setDtrInput({ ...dtrInput, breakStart: e.target.value })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="">Break end</label>
                <input
                  id="breakEnd"
                  type="text"
                  placeholder="Break end"
                  onChange={(e) =>
                    setDtrInput({ ...dtrInput, breakEnd: e.target.value })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="">Time out</label>
                <input
                  id="timeOut"
                  type="text"
                  placeholder="Time out"
                  onChange={(e) =>
                    setDtrInput({ ...dtrInput, timeOut: e.target.value })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="">Bio id</label>
                <input
                  id="bioId"
                  type="text"
                  placeholder="Bio Id"
                  onChange={(e) =>
                    setDtrInput({ ...dtrInput, bioId: e.target.value })
                  }
                />
              </div>
              <button className="addDtrData" onClick={SaveArray}>
                +
              </button>
            </div>
          </>
        )}
        <dir className="button-container">
          <button className="submit-button" onClick={SubmitData}>
            Save
          </button>
        </dir>
      </div>
    </div>
  );
};

export default AddDtr;

/*{
  /**
          * 
          * 
          * 
          * 
          * 
          * 
          * 
        <form className="form-content">
          <div className="input-container">
            <label htmlFor="">Cutoff</label>
            <input type="text" placeholder="cutoff" />
          </div>
          <div className="input-container">
            <label htmlFor="">Time in</label>
            <input type="text" placeholder="Time in" />
          </div>
          <div className="input-container">
            <label htmlFor="">Break start</label>
            <input type="text" placeholder="Break start" />
          </div>
          <div className="input-container">
            <label htmlFor="">Break end</label>
            <input type="text" placeholder="Break end" />
          </div>
          <div className="input-container">
            <label htmlFor="">Time out</label>
            <input type="text" placeholder="Time out" />
          </div>
          <div className="input-container">
            <label htmlFor="">Bio id</label>
            <input type="text" placeholder="Bio Id" />
          </div>
        </form>
          */
//
