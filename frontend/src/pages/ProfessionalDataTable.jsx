import React from "react";
import DataTable from "react-data-table-component";

// Define the columns
const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    width: "60px",
  },
  {
    name: "WSTG-ID",
    selector: (row) => row.wstgId,
    sortable: true,
  },
  {
    name: "Test Name",
    selector: (row) => row.testName,
    sortable: true,
    wrap: true,
  },
  {
    name: "Objectives",
    selector: (row) => row.objectives,
    wrap: true,
  },
  {
    name: "Tools",
    selector: (row) => row.tools,
    wrap: true,
  },
  {
    name: "OWASP Top 10",
    selector: (row) => row.owaspTop10,
    wrap: true,
  },
  {
    name: "CWE",
    selector: (row) => row.cwe,
    sortable: true,
    wrap: true,
  },
  {
    name: "Vulnerability Name",
    cell: (row, index) => (
      <select
        className="w-full p-1 border border-gray-300 rounded"
        value={row.vulnerabilityName}
        onChange={(e) => handleChange(index, "vulnerabilityName", e.target.value)}
      >
        <option value="">Select</option>
        <option value="XSS">XSS</option>
        <option value="SQL Injection">SQL Injection</option>
        <option value="CSRF">CSRF</option>
        <option value="Insecure Deserialization">Insecure Deserialization</option>
      </select>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
  },
  {
    name: "Description of Findings",
    cell: (row, index) => (
      <input
        type="text"
        className="w-full p-1 border border-gray-300 rounded"
        value={row.descriptionOfFindings}
        onChange={(e) =>
          handleChange(index, "descriptionOfFindings", e.target.value)
        }
        placeholder="Description of findings"
      />
    ),
    ignoreRowClick: true,
    allowOverflow: true,
  },
  {
    name: "URL Affected",
    cell: (row, index) => (
      <input
        type="text"
        className="w-full p-1 border border-gray-300 rounded"
        value={row.urlAffected}
        onChange={(e) => handleChange(index, "urlAffected", e.target.value)}
        placeholder="URL Affected"
      />
    ),
    ignoreRowClick: true,
    allowOverflow: true,
  },
  {
    name: "Affected Item",
    cell: (row, index) => (
      <input
        type="file"
        className="w-full"
        onChange={(e) =>
          handleChange(index, "affectedItem", e.target.files[0]?.name)
        }
      />
    ),
    ignoreRowClick: true,
    allowOverflow: true,
  },
  {
    name: "Result",
    cell: (row, index) => (
      <select
        className={`w-full p-1 border border-gray-300 rounded ${
          row.result === "Pass"
            ? "bg-green-200"
            : row.result === "Issue"
            ? "bg-red-200"
            : "bg-yellow-200"
        }`}
        value={row.result}
        onChange={(e) => handleChange(index, "result", e.target.value)}
      >
        <option value="Pass">Pass</option>
        <option value="Issue">Issue</option>
        <option value="Solved">Solved</option>
      </select>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
  },
  {
    name: "Severity",
    selector: (row) => row.status,
    sortable: true,
  },
];

// Dummy handler for input changes
const handleChange = (index, field, value) => {
  console.log(`Row ${index}, Field ${field}, Value ${value}`);
};

// Sample data
const rows = [
  {
    id: 1,
    wstgId: "WSTG-INP-01",
    testName: "Test for SQL Injection",
    objectives: "Ensure database queries are secure.",
    tools: "SQLMap",
    owaspTop10: "A03:2021",
    cwe: "CWE-89",
    vulnerabilityName: "",
    descriptionOfFindings: "",
    urlAffected: "",
    affectedItem: "",
    result: "Pass",
    status: "Low",
  },
  {
    id: 2,
    wstgId: "WSTG-INP-02",
    testName: "Test for XSS",
    objectives: "Prevent malicious scripts execution.",
    tools: "Burp Suite, OWASP ZAP",
    owaspTop10: "A07:2021",
    cwe: "CWE-79",
    vulnerabilityName: "",
    descriptionOfFindings: "",
    urlAffected: "",
    affectedItem: "",
    result: "Issue",
    status: "High",
  },
];

const ProfessionalDataTable = () => {
    return (
      <div className="p-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 shadow-lg rounded-lg">
        <DataTable
          title={
            <h2 className="text-lg font-semibold text-gray-700">
              Vulnerability Assessment Table
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
                minHeight: "60px", // Set row height
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

export default ProfessionalDataTable;
