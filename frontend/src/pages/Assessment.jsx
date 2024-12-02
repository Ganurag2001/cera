import React, { useState } from "react";

const Assessment = ({ templates = [] }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isEditorDisabled, setIsEditorDisabled] = useState(true);
  const [newTemplateName, setNewTemplateName] = useState("");

  const handleCreateTemplate = () => {
    setSelectedTemplate({
      id: templates.length + 1,
      title: "New Template",
      type: "Default",
      user: { fname: "Admin", lname: "" },
      created: new Date().toISOString(),
      active: false,
    });
    setIsEditorDisabled(false);
  };

  const handleSaveTemplate = () => {
    if (selectedTemplate) {
      // Logic to save the template
      alert("Template saved!");
      setIsEditorDisabled(true);
    }
  };

  const handleDeleteTemplate = (id) => {
    // Logic to delete the template
    alert(`Template with ID ${id} deleted!`);
  };

  const handleActiveChange = (id) => {
    // Logic to handle the checkbox toggle
    const updatedTemplates = templates.map((template) =>
      template.id === id ? { ...template, active: !template.active } : template
    );
    console.log("Updated templates:", updatedTemplates);
  };

  return (
    <div className="content-wrapper">
      {/* Header */}
      <section className="content-header">
        <h1>
          <i className="glyphicon glyphicon-pencil"></i> Assessment
        </h1>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="row">
          {/* Left Panel */}
          <div className="col-md-4">
            <div className="box box-primary">
              <div className="box-body">
                {/* Create Template Button */}
                <div className="row mb-3">
                  <div className="col-sm-4" style={{ marginBottom: "-30px", zIndex: 1 }}>
                    <button
                      className="btn btn-block btn-primary btn-sm"
                      onClick={handleCreateTemplate}
                    >
                      New Template
                    </button>
                  </div>
                </div>

                {/* Templates Table */}
                <table
                  id="templateTable"
                  className="table table-striped table-hover dataTable"
                >
                  <thead className="theader">
                    <tr>
                      <th>ID</th>
                      <th>Description</th>
                      <th>Active</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {templates.map((template) => (
                      <tr key={template.id} id={`template${template.id}`}>
                        <td>{template.id}</td>
                        <td>
                          <b>{template.title}</b>
                          <br />
                          <small>
                            <span>
                              <b>Type:</b> {template.type}
                            </span>{" "}
                            <span>
                              <b>By:</b> {template.user.fname} {template.user.lname}
                            </span>{" "}
                            <span>
                              <b>On:</b>{" "}
                              {new Date(template.created).toLocaleDateString()}
                            </span>
                          </small>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            className="activeCheckBox"
                            checked={template.active}
                            onChange={() => handleActiveChange(template.id)}
                          />
                        </td>
                        <td>
                          <span
                            className="vulnControl vulnControl-delete"
                            onClick={() => handleDeleteTemplate(template.id)}
                          >
                            <i className="fa fa-trash" title="Delete Template"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-md-8">
            <div className="col-md-12">
              <div
                id="editorContainer"
                className={`box box-primary ${
                  isEditorDisabled ? "disabled" : ""
                }`}
              >
                <div className="box-header">
                  <h2>
                    <span id="templateName">
                      {selectedTemplate ? selectedTemplate.title : "No Template Selected"}
                    </span>
                    <span id="edits"></span>
                  </h2>
                  <span
                    id="saveTemplate"
                    className="vulnControl pull-right"
                    style={{ marginTop: "-40px" }}
                    onClick={handleSaveTemplate}
                  >
                    <i className="fa fa-save" title="Save Template"></i>
                  </span>
                </div>
                <div className="box-body">
                  <form>
                    <div
                      name="templateEditor"
                      id="templateEditor"
                      style={{
                        backgroundColor: "white",
                        pointerEvents: isEditorDisabled ? "none" : "auto",
                        opacity: isEditorDisabled ? 0.3 : 1,
                      }}
                    >
                      <textarea
                        rows="10"
                        className="form-control"
                        value={newTemplateName}
                        onChange={(e) => setNewTemplateName(e.target.value)}
                        placeholder="Edit template here..."
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assessment;
