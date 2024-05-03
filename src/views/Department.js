
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
  Table
} from "reactstrap";
function Deaprtments(props) {
  let data = [{department:'Management', status:true},{department:'Verification', status:true},{department:'Backend Team', status:true},{department:'Equipment Provider', status:false},{department:'Technical', status:false},{department:'Field Enginner', status:true}];
  return (
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
            <CardHeader>
                <CardTitle tag="h5">Add New Department</CardTitle>
              </CardHeader>
              <CardBody style={{minHeight:'200px !important'}}>
                <Form>
                  <Row>
                    <Col className="pt-1" md="12">
                      <FormGroup>
                        <label>Department Name</label>
                        <Input
                          defaultValue="Management"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="success"
                        type="submit"
                      >
                        Create
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Department</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Department Name</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((item, index)=>(
                    <tr key={index}>
                      <td>{item.department}</td>
                      <td>{item.status ? 'Enable' : 'Disable'}</td>
                      <td>{item.status
                      ? <Button title="Disable" color="danger">Disable</Button>
                      : <Button title="Enable" color="primary">Enable</Button>}</td>
                    </tr>
                  ))}
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
  );
}

export default Deaprtments;
