import React from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import axios from "axios";
import { useState } from "react";

const ReactExcelRenderer_01 = () => {
  const [header, setHeader] = useState([]);
  const [cols, setCols] = useState([]);
  const [emp, setEmp] = useState([]);

  return <div>ReactExcelRenderer_01</div>;
};

export default ReactExcelRenderer_01;