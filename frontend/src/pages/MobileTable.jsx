import React, { useState } from "react";
import DataTable from "react-data-table-component";

const MobileTable = () => {
  const [rows, setRows] = useState([
    {
      id: "8.1",
      mstgId: "MSTG-RESILIENCE-1",
      requirement:
        "The app detects, and responds to, the presence of a rooted or jailbroken device either by alerting the user or shutting down.",
      result: "✔",
      status: "Pass",
      testingProcedures: "Jailbreak Detection (MSTG-RESILIENCE-1)",
      comments: "",
    },
    {
      id: "8.2",
      mstgId: "MSTG-RESILIENCE-2",
      requirement:
        "The app prevents debugging and/or detects, and responds to, a debugger being attached.",
      result: "✔",
      status: "Pass",
      testingProcedures: "Anti-Debugging Checks",
      comments: "",
    },
    {
      id: "8.3",
      mstgId: "MSTG-RESILIENCE-3",
      requirement:
        "The app detects, and responds to, tampering with executable files and critical data within its own sandbox.",
      result: "✔",
      status: "Pass",
      testingProcedures:
        "File Integrity Checks (MSTG-RESILIENCE-3 and MSTG-RESILIENCE-11)",
      comments: "",
    },
    {
      id: "8.4",
      mstgId: "MSTG-RESILIENCE-4",
      requirement:
        "The app detects, and responds to, the presence of widely used reverse engineering tools and frameworks on the device.",
      result: "✔",
      status: "Pass",
      testingProcedures:
        "Testing Reverse Engineering Tools Detection (MSTG-RESILIENCE-4)",
      comments: "",
    },
    // Add other rows here...
  ]);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Define the columns
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "60px",
    },
    {
      name: "MSTG-ID",
      selector: (row) => row.mstgId,
      sortable: true,
      wrap: true,
    },
    {
      name: "Requirement",
      selector: (row) => row.requirement,
      wrap: true,
    },
    {
      name: "Result",
      selector: (row) => row.result,
      sortable: true,
      width: "100px",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      width: "100px",
    },
    {
      name: "Testing Procedures",
      selector: (row) => row.testingProcedures,
      wrap: true,
    },
    {
      name: "Comments",
      cell: (row, index) => (
        <input
          type="text"
          className="w-full p-1 border border-gray-300 rounded"
          value={row.comments}
          onChange={(e) => handleChange(index, "comments", e.target.value)}
          placeholder="Add comments"
        />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  return (
    <div className="p-4 bg-gray-100 shadow-lg rounded-lg">
      <DataTable
        title={
          <h2 className="text-lg font-semibold text-gray-700">
            Mobile Security Testing Guide Table
          </h2>
        }
        columns={columns}
        data={rows}
        pagination
        highlightOnHover
        defaultSortFieldId={1}
        customStyles={{
          rows: {
            style: {
              backgroundColor: "#f9fafb",
              "&:nth-of-type(odd)": {
                backgroundColor: "#e7ebf0",
              },
              minHeight: "60px", // Row height
            },
          },
          headCells: {
            style: {
              backgroundColor: "#1e293b",
              color: "#f1f5f9",
              fontWeight: "bold",
              fontSize: "14px",
              textAlign: "left",
            },
          },
          cells: {
            style: {
              padding: "8px",
            },
          },
        }}
      />
    </div>
  );
};

export default MobileTable;
