import React, { useState } from "react";

const ReportMapping = () => {
  const [currentMap, setCurrentMap] = useState({
    reportName: "Sample Report",
    defaultVuln: { name: "Sample Vulnerability", id: 1 },
    listname: "Sample XML Param",
    mapping: [
      {
        id: 1,
        param: "Param1",
        prop: { value: "Value1", label: "Label1" },
        recursive: true,
        base64: false,
      },
      {
        id: 2,
        param: "Param2",
        prop: { value: "Value2", label: "Label2" },
        recursive: false,
        base64: true,
      },
    ],
  });

  const [props] = useState([
    { value: "Value1", label: "Label1" },
    { value: "Value2", label: "Label2" },
    { value: "Value3", label: "Label3" },
  ]);

  const addRow = () => {
    const newId = currentMap.mapping.length + 1;
    const newRow = {
      id: newId,
      param: "",
      prop: { value: "", label: "" },
      recursive: false,
      base64: false,
    };
    setCurrentMap({
      ...currentMap,
      mapping: [...currentMap.mapping, newRow],
    });
  };

  const deleteRow = (rowId) => {
    const updatedMapping = currentMap.mapping.filter((row) => row.id !== rowId);
    setCurrentMap({ ...currentMap, mapping: updatedMapping });
  };

  const handleInputChange = (id, field, value) => {
    const updatedMapping = currentMap.mapping.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setCurrentMap({ ...currentMap, mapping: updatedMapping });
  };

  return (
    <div className="container">
      {/* Report Name */}
      <div className="row mb-3">
        <label htmlFor="reportName" className="form-label">
          Report Name: *
        </label>
        <input
          type="text"
          className="form-control"
          id="reportName"
          value={currentMap.reportName}
          onChange={(e) =>
            setCurrentMap({ ...currentMap, reportName: e.target.value })
          }
        />
      </div>

      {/* Default Vulnerability */}
      <div className="row mb-3">
        <label htmlFor="dtitle" className="form-label">
          Default Vulnerability:
        </label>
        <input
          type="text"
          className="form-control"
          id="dtitle"
          value={currentMap.defaultVuln.name}
          readOnly
        />
      </div>

      {/* Starting XML Parameter */}
      <div className="row mb-3">
        <label htmlFor="listname" className="form-label">
          Starting XML Parameter: *
        </label>
        <input
          type="text"
          className="form-control"
          id="listname"
          value={currentMap.listname}
          onChange={(e) =>
            setCurrentMap({ ...currentMap, listname: e.target.value })
          }
        />
      </div>

      {/* Data Table */}
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>XML Param</th>
              <th>Faction Param</th>
              <th>Has Elements</th>
              <th>Base64 Encoded</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMap.mapping.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="text"
                    value={row.param}
                    onChange={(e) =>
                      handleInputChange(row.id, "param", e.target.value)
                    }
                  />
                </td>
                <td>
                  <select
                    value={row.prop.value}
                    onChange={(e) =>
                      handleInputChange(row.id, "prop", {
                        value: e.target.value,
                        label: props.find((p) => p.value === e.target.value)
                          ?.label || "",
                      })
                    }
                  >
                    <option value="">Select</option>
                    {props.map((prop) => (
                      <option key={prop.value} value={prop.value}>
                        {prop.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.recursive}
                    onChange={(e) =>
                      handleInputChange(row.id, "recursive", e.target.checked)
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.base64}
                    onChange={(e) =>
                      handleInputChange(row.id, "base64", e.target.checked)
                    }
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRow(row.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Row Button */}
      <div className="row mt-3">
        <button className="btn btn-primary" onClick={addRow}>
          Add Row
        </button>
      </div>
    </div>
  );
};

export default ReportMapping;
