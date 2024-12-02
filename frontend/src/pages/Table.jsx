import React, { useState } from "react";
import { form2 } from "../data/form2";
import MobileTable from "./MobileTable";
import InfraSecurity from "./InfraSecurity";
import ProfessionalDataTable from "./ProfessionalDataTable";

const Table = () => {
  const [rows, setRows] = useState(form2);

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleGenerateReport = () => {
    // Generate and download a CSV report
  };

  const handleSave = () => {
    // Mock save operation, for example, sending data to a backend API
    console.log("Data saved:", rows);
    alert("Data has been saved successfully!");
  };

  return (
    <div className="w-full overflow-x-auto p-4">
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleGenerateReport}
        >
          Generate Report
        </button>
      </div>
      <ProfessionalDataTable></ProfessionalDataTable>    
      <MobileTable></MobileTable>
      <InfraSecurity></InfraSecurity>
    </div>
  );
};

export default Table;
