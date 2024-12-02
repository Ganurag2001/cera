import React, { useState } from "react";
import DataTable from "react-data-table-component";

const InfraSecurity = () => {
  const [rows, setRows] = useState([
    {
      id: "1",
      wstgId: "",
      testName: "Host Discovery",
      objectives:
        "Identify active hosts in the network. The total number of live hosts and devices are identified. Ping sweeps and port scans are performed to identify live hosts and devices.",
      tools: "",
      owaspTop10: "",
      cwe: "",
      vulnerabilityName: "",
      descriptionOfFindings: "",
      urlAffected: "",
      affectedItem: "",
      result: "Pass",
      status: "",
    },
    {
      id: "2",
      wstgId: "",
      testName: "Port Scanning",
      objectives:
        "Identify all open ports TCP and UDP in all individual machines. Automated port scanning tools and custom developed scripts will be used for the identification.",
      tools: "",
      owaspTop10: "",
      cwe: "",
      vulnerabilityName: "",
      descriptionOfFindings: "",
      urlAffected: "",
      affectedItem: "",
      result: "Pass",
      status: "",
    },
    {
      id: "3",
      wstgId: "",
      testName: "Operating System Enumeration",
      objectives:
        "Identify the underlying operating system/s in the target network.",
      tools: "",
      owaspTop10: "",
      cwe: "",
      vulnerabilityName: "",
      descriptionOfFindings: "",
      urlAffected: "",
      affectedItem: "",
      result: "Pass",
      status: "",
    },
    // Add more rows as required
  ]);

  // Columns for DataTable
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Test Name",
      selector: (row) => row.testName,
      sortable: true,
    },
    {
      name: "Objectives",
      selector: (row) => row.objectives,
      sortable: false,
    },
    {
      name: "Remarks",
      selector: (row) => row.tools || "-",
    },
    {
      name: "POC",
      selector: (row) => row.result,
    },
    {
      name: "Status",
      cell: (row, index) => (
        <input
          type="text"
          className="w-full p-1 border border-gray-300 rounded"
          value={row.status}
          onChange={(e) => handleChange(index, "status", e.target.value)}
          placeholder="Add status"
        />
      ),
    },
  ];

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  // Custom CSS Styles
  const customStyles = {
    header: {
      style: {
        backgroundColor: "#f8f9fa",
        fontWeight: "bold",
        fontSize: "16px",
        color: "#495057",
        textAlign: "left",
        padding: "12px",
      },
    },
    rows: {
      style: {
        fontSize: "14px",
        color: "#212529",
        backgroundColor: "#ffffff",
        "&:nth-of-type(odd)": {
          backgroundColor: "#f8f9fa",
        },
        "&:hover": {
          backgroundColor: "#e9ecef",
        },
      },
    },
    headCells: {
      style: {
        backgroundColor: "#343a40",
        color: "#ffffff",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "13px",
        padding: "10px",
      },
    },
    cells: {
      style: {
        padding: "10px",
      },
    },
  };

  return (
    // <div className="w-full p-4">
    //   <DataTable
    //     title="Infrastructure Security Tests"
    //     columns={columns}
    //     data={rows}
    //     highlightOnHover
    //     pagination
    //     customStyles={customStyles}
    //   />
    // </div>

    <div className="p-4 bg-gray-100 shadow-lg rounded-lg">
    <DataTable
      title={
        <h2 className="text-lg font-semibold text-gray-700">
          Infrastructure Security Tests
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

export default InfraSecurity;
