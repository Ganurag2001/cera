
// DashBoard.js
import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge, Button } from 'react-bootstrap';
import RecentScans from '../pages/RecentScans';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register the required components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

import 'bootstrap/dist/css/bootstrap.min.css';

const DashBoard = () => {
  return (
    <>
       <h1>Welcome to the Dashboard</h1>
       <button onClick={handleLogin}>Login with Okta</button>
    <Container fluid className="p-4">
      <Row>
        <Col md={3}>
          {/* Sidebar */}
          <Sidebar />
        </Col>
        <Col md={9}>
          {/* Main Content */}
          <Dashboard />
        </Col>
      </Row>
      {/* <RecentScans></RecentScans> */}
    </Container>
    </>
  );
};

const Sidebar = () => (
  <Card>
    <Card.Body>
      <Card.Title>invicti</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>Targets</ListGroup.Item>
        <ListGroup.Item>Reporting</ListGroup.Item>
        <ListGroup.Item>Issues</ListGroup.Item>
        <ListGroup.Item>Notifications</ListGroup.Item>
        <ListGroup.Item>Activity</ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>
);

const Dashboard = () => (
  <div>
    <SummaryCards />
    <Row className="mt-4">
      <Col md={6}>
        <SeverityTrendChart />
      </Col>
      <Col md={6}>
        <NextScheduledScans />
      </Col>
    </Row>
    <Row className="mt-4">
      <Col md={6}>
        <SeveritiesPieChart />
      </Col>
      <Col md={6}>
        <ActiveIssues />
      </Col>
    </Row>
    <RecentScans></RecentScans>
  </div>
);

const SummaryCards = () => (
  <Row>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>15 Users</Card.Title>
          <Card.Text>4 users were active during the last week</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>370 Targets</Card.Title>
          <Card.Text>47 Secure, 317 Vulnerable, 19 Critical</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>203 Completed Scans</Card.Title>
          <Card.Text>Completed in 03:04:01 on average</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>1102 Active Issues</Card.Title>
          <Card.Text>8 Critical, 19 High, 346 Medium</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

const SeverityTrendChart = () => {
  const data = {
    labels: ['08/2024', '09/2024', '10/2024', '11/2024'],
    datasets: [
      {
        label: 'Critical',
        data: [100, 150, 80, 90],
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'High',
        data: [200, 250, 180, 150],
        borderColor: 'orange',
        fill: false,
      },
      {
        label: 'Medium',
        data: [150, 200, 150, 120],
        borderColor: 'yellow',
        fill: false,
      },
    ],
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Severity Trend of Scan Results</Card.Title>
        <Line data={data} />
      </Card.Body>
    </Card>
  );
};

const NextScheduledScans = () => (
  <Card>
    <Card.Body>
      <Card.Title>Next Scheduled Scans</Card.Title>
      <p>You have not yet scheduled any target scans.</p>
      <Button variant="primary">Schedule New Scan</Button>
    </Card.Body>
  </Card>
);

const SeveritiesPieChart = () => {
  const data = {
    labels: ['Information', 'Critical', 'High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Severities of Scan Results',
        data: [10, 2, 5, 75, 95],
        backgroundColor: ['blue', 'red', 'orange', 'yellow', 'green'],
      },
    ],
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Severities of Scan Results</Card.Title>
        <Pie data={data} />
      </Card.Body>
    </Card>
  );
};

const ActiveIssues = () => (
  <Card>
    <Card.Body>
      <Card.Title>Active Issues</Card.Title>
      <div className="active-issues-chart">
        {/* You may need a custom visualization here for the active issues tree map */}
        <p>[Tree Map Placeholder]</p>
      </div>
    </Card.Body>
  </Card>
);

// const RecentScans = () => (
//   <Card className="mt-4">
//     <Card.Body>
//       <Card.Title>Recent Scans</Card.Title>
//       <ListGroup variant="flush">
//         <ListGroup.Item>
//           Metis-Prod: Unique Id 45714 <Badge variant="danger">Critical</Badge>
//         </ListGroup.Item>
//         <ListGroup.Item>
//           Work Force Management System (WFM FS)-QA: Unique Id 100562 <Badge variant="warning">High</Badge>
//         </ListGroup.Item>
//         {/* Add other items as needed */}
//       </ListGroup>
//     </Card.Body>
//   </Card>
// );

export default DashBoard;
