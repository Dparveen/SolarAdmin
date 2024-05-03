// react plugin used to create charts
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart
} from "variables/charts.js";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-tap-01 text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Inquery</p>
                      <CardTitle tag="p">100</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Link to='/admin/addNewInquery' >
                <div className="stats">
                  <i className="fas fa-plus-square" /> Add New Inquery
                </div>
                </Link>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-money-coins text-success" /> */}
                      <i className="nc-icon nc-circle-10 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Staff</p>
                      <CardTitle tag="p">10</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Link to="/amdin/addNewStaff">
                <div className="stats">
                  <i className="far fa-plus-square" /> Add New
                </div>
                </Link>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-refresh-69 text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Reminder</p>
                      <CardTitle tag="p">08</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Link to="/amdin/reminderTrack">
                <div className="stats">
                  <i className="far fa-clock" /> In the last hour
                </div>
                </Link>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-user-run text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Followup</p>
                      <CardTitle tag="p">32</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Link to="/amdin/followupInquery">
                <div className="stats">
                  <i className="fas fa-check-circle" /> Check Now
                </div>
                </Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Users Behavior</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            {/* <Card>
              <CardHeader>
                <CardTitle tag="h5">Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Number of emails sent
                </div>
              </CardFooter>
            </Card> */}
            <Card className="card-plain" style={{backgroundColor:'#fff'}}>
                <CardHeader>
                  <CardTitle tag="h4">Latest Inquery</CardTitle>
                  {/* <p className="card-category">
                    Here is a subtitle for this table
                  </p> */}
                </CardHeader>
            <CardBody>
              <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Name</th>
                          <th>Requirement</th>
                          <th>Date</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Dakota Rice</td>
                          <td>Niger</td>
                          <td>Oud-Turnhout</td>
                          <td className="text-right">
                            <Link to="/admin/addNewInquery"><i className="fa fa-eye" style={{color:'blue'}}></i>&nbsp;</Link>&nbsp;
                            <i className="fa fa-trash" style={{color:'red'}}></i>
                            {/* <i className="fa fa-check" style={{color:'green'}}></i> */}
                          </td>
                        </tr>
                      </tbody>
              </Table>
            </CardBody>
            </Card>
          </Col>
          <Col md="12">
          <Card className="card-plain" style={{backgroundColor:'#fff'}}>
                <CardHeader>
                  <CardTitle tag="h4">Reminder</CardTitle>
                  {/* <p className="card-category">
                    Here is a subtitle for this table
                  </p> */}
                </CardHeader>
          <CardBody>
              <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Name</th>
                          <th>Inquery</th>
                          <th>Date</th>
                          <th>Resopnce</th>
                          <th>Department</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Dakota Rice</td>
                          <td>Niger</td>
                          <td>22/02/2024</td>
                          <td>Need to talk 25/02/2024 at 10 AM</td>
                          <td>Technical</td>
                          <td className="text-right">
                            <Link to="/admin/addNewInquery"><i className="fa fa-eye" style={{color:'blue'}}></i>&nbsp;</Link>&nbsp;
                            <i className="fa fa-trash" style={{color:'red'}}></i>
                            {/* <i className="fa fa-check" style={{color:'green'}}></i> */}
                          </td>
                        </tr>
                        <tr>
                          <td>Yours Tech</td>
                          <td>Niger</td>
                          <td>22/02/2024</td>
                          <td>Need to talk 25/02/2024 at 2:10 PM</td>
                          <td>Management</td>
                          <td className="text-right">
                            <Link to="/admin/addNewInquery"><i className="fa fa-eye" style={{color:'blue'}}></i>&nbsp;</Link>&nbsp;
                            <i className="fa fa-trash" style={{color:'red'}}></i>
                            {/* <i className="fa fa-check" style={{color:'green'}}></i> */}
                          </td>
                        </tr>
                      </tbody>
              </Table>
            </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
