// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Modal = ({ onClose, onSubmit }) => {
//     const [selectedType, setSelectedType] = useState('');
//     const navigate = useNavigate();

//     const handleTypeChange = (event) => {
//         setSelectedType(event.target.value);
//     };

//     const handleGenerate = () => {
//         if (selectedType) {
//             onSubmit(selectedType);
//             navigate('/table');
//         }
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
//                 <h2 className="text-2xl font-semibold text-black mb-4">Add New Target</h2>
//                 <div className="text-left mb-4">
//                     <label className="block font-bold text-black mb-2">Type</label>
//                     <select
//                         value={selectedType}
//                         onChange={handleTypeChange}
//                         className="w-full p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         <option value="">Select</option>
//                         <option value="Web Application">Web Application</option>
//                         <option value="Infra">Infra</option>
//                         <option value="API">API</option>
//                         <option value="Cloud">Cloud</option>
//                     </select>
//                 </div>
//                 <div className="flex justify-center gap-4">
//                     <button
//                         className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
//                         onClick={handleGenerate}
//                     >
//                         Generate
//                     </button>
//                     <button
//                         className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
//                         onClick={onClose}
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  InputGroup,
  FormControl,
  Nav,
} from "react-bootstrap";
import { FaSearch, FaPlus, FaMinus, FaCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Multiselect from "multiselect-react-dropdown";

// import MultiSelect from './Mutliselect';

const Modal = () => {
  const [dateRange, setDateRange] = useState([
    new Date(2024, 0, 1),
    new Date(2024, 0, 30),
  ]);
  const [selectedAssessors, setSelectedAssessors] = useState([
    "Josh Summit - Hacking Team | Open",
  ]);
  const [selectedCIA, setSelectedCIA] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedScopes, setSelectedScopes] = useState([]);

  const assessors = [
    "Josh Summit - Hacking Team | Open",
    "Test User - Hacking Team | Open",
    "PR User - Hacking Team | Open",
    "PR2 User - Hacking Team | Open",
  ];

  const assessmentOptions = [
    { name: "Web Application", id: 1 },
    { name: "API", id: 2 },
    { name: "Infra", id: 3 },
    { name: "IoT", id: 4 },
    { name: "Cloud", id: 5 },
    { name: "Mobile", id: 6 },
    { name: "Red Team", id: 7 },
    { name: "Customized Testing", id: 8 },
  ];

  const scopeOptions = [
    { name: "Urls", id: 1 },
    { name: "ip", id: 2 },
    { name: "address", id: 3 },
    { name: "target Names", id: 4 },
  ];

  const handleMultiselectChange = (selectedList) => {
    setSelectedTypes(selectedList);
  };

  const handleMultiselectRemove = (removedList) => {
    setSelectedTypes(removedList);
  };

  const handleMultiselectScopeChange = (selectedList) => {
    setSelectedScopes(selectedList);
  };

  const handleMultiselectScopeRemove = (removedList) => {
    setSelectedScopes(removedList);
  };

  const handleDropdownChange = (event) => {
    setSelectedCIA(event.target.value);
  };

  return (
    <Container
      fluid
      className="p-4 bg-dark text-light"
      style={{ minHeight: "100vh" }}
    >
      {/* Side Navigation */}
      <Nav
        className="flex-column position-fixed bg-secondary p-3"
        style={{ width: "70px", height: "100vh" }}
      >
        <Nav.Item>
          <Nav.Link href="#" className="text-light">
            {" "}
            {/* Add relevant icons here */}{" "}
          </Nav.Link>
        </Nav.Item>
        {/* Add more Nav items for the other icons as per the design */}
      </Nav>

      {/* Main Content */}
      <Container style={{ marginLeft: "90px" }}>
        <h3 className="mb-4">Schedule Assessment</h3>

        {/* Tabs for Assessments, Search, Upload */}
        <Nav variant="tabs" defaultActiveKey="assessments">
          <Nav.Item>
            <Nav.Link eventKey="assessments" className="text-light bg-dark">
              Assessments
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="search" className="text-light bg-dark">
              Search
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="upload" className="text-light bg-dark">
              Upload
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Row className="mt-4">
          {/* Left Panel */}
          <Col md={5}>
            <Form>
              <Form.Group controlId="appId">
                <Form.Label>App ID: *</Form.Label>
                <InputGroup>
                  <FormControl placeholder="Random" />
                  <Button variant="outline-secondary">
                    <FaSearch />
                  </Button>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="projectName">
                <Form.Label>Project Name: *</Form.Label>
                <FormControl type="text" placeholder="Application Name" />
              </Form.Group>

              <Form.Group controlId="appName">
                <Form.Label>App Name: *</Form.Label>
                <FormControl type="text" placeholder="Application Assessment" />
              </Form.Group>

              <Form.Group controlId="dateRange">
                <Form.Label>Start and End Date: *</Form.Label>
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="01/15/2024 to 01/20/2024"
                  />
                  <Button variant="outline-secondary">
                    <FaCalendarAlt />
                  </Button>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="engagementContact">
                <Form.Label>Engagement Contact:</Form.Label>
                <Form.Control as="select">
                  <option>Josh Summit</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="remediationContact">
                <Form.Label>Remediation Contact:</Form.Label>
                <Form.Control as="select">
                  <option>Josh Summit</option>
                </Form.Control>
              </Form.Group>

              {/* <Form.Group controlId="jiraProject">
                <Form.Label>Jira Project..:</Form.Label>
                <FormControl type="text" placeholder="myproj.." />
              </Form.Group> */}

              {/* <Form.Group controlId="test">
                <Form.Label>Test:</Form.Label>
                <Form.Control as="select">
                  <option>test</option>
                </Form.Control>
              </Form.Group> */}

              {/* <Form.Group controlId="mylist">
                <Form.Label>mylist:</Form.Label>
                <Form.Control as="select">
                  <option>mylist</option>
                </Form.Control>
              </Form.Group> */}

              <Form.Group controlId="mybool">
                <Form.Check type="checkbox" label="mybool" />
              </Form.Group>

              <Form.Group controlId="selectTeam">
                <Form.Label>Select Team: *</Form.Label>
                <Form.Control as="select">
                  <option>Hacking Team</option>
                </Form.Control>
              </Form.Group>

              {/* <Form.Group controlId="assessmentType">
                <Form.Label>Assessment Type: *</Form.Label>
                <Form.Control as="select">
                  <option>Security Assessment</option>
                </Form.Control>
              </Form.Group> */}

              <Form.Group controlId="selectCampaign">
                <Form.Label>Select Campaign:</Form.Label>
                <Form.Control as="select">
                  <option>2023 Assessments</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="selectStatus">
                <Form.Label>Select Status:</Form.Label>
                <Form.Control as="select">
                  <option>Open</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="dropdownCIA">
                <Form.Label>CIA Value</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCIA}
                  onChange={handleDropdownChange}
                  className="text-dark"
                >
                  <option value="">-- Select an Option --</option>
                  <option value="Confidentiality">Confidentiality</option>
                  <option value="Integrity">Integrity</option>
                  <option value="Availability">Availability</option>
                </Form.Control>
              </Form.Group>

              {/* Multiselect Component for Assessment Type */}
              <Form.Group controlId="assessmentType">
                <Form.Label>Assessment Type: *</Form.Label>
                <Multiselect
                  options={assessmentOptions}
                  selectedValues={selectedTypes}
                  onSelect={handleMultiselectChange}
                  onRemove={handleMultiselectRemove}
                  displayValue="name"
                  placeholder="Select Assessment Types"
                />
              </Form.Group>

              <Form.Group controlId="distributionList">
              <Form.Label>Scopes Type: *</Form.Label>
                <Multiselect
                  options={scopeOptions}
                  selectedValues={selectedScopes}
                  onSelect={handleMultiselectScopeChange}
                  onRemove={handleMultiselectScopeRemove}
                  displayValue="name"
                  placeholder="Select Assessment Types"
                />
              </Form.Group>
            </Form>
          </Col>
          Right Panel
          <Col md={7}>
            <h5>January 2024</h5>
            {/* <Calendar
              selectRange
              value={dateRange}
              onChange={setDateRange}
              tileClassName={({ date, view }) =>
                (date >= dateRange[0] && date <= dateRange[1]) ? 'bg-primary text-white' : ''
              }
            /> */}

            <hr />

            {/* <Form.Group controlId="searchAssessors">
              <Form.Label>Search Assessors:</Form.Label>
              <InputGroup>
                <FormControl placeholder="Search" />
                <Button variant="outline-secondary"><FaSearch /></Button>
              </InputGroup>
            </Form.Group> */}

            <Form.Group controlId="findAssessors">
              <Form.Label>Find Assessors:</Form.Label>
              <ListGroup>
                {assessors.map((assessor, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {assessor}
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() =>
                        setSelectedAssessors([...selectedAssessors, assessor])
                      }
                    >
                      <FaPlus />
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Form.Group>

            <Form.Group controlId="assignedAssessors">
              <Form.Label>Assigned Assessors:</Form.Label>
              <ListGroup>
                {selectedAssessors.map((assessor, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {assessor}
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() =>
                        setSelectedAssessors(
                          selectedAssessors.filter((a) => a !== assessor)
                        )
                      }
                    >
                      <FaMinus />
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Modal;
