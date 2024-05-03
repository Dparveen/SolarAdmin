// import GoogleMap from "components/map/GoogleMap";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, FormGroup, Input, Row, Table, } from "reactstrap";
import constant from '../variables/constant';
const { Image_Url } = constant;
function Staff() {

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let hour = 0;
    hours-12 > 0 ? hour=hours-12 : hour= hours;
    // return `${day}-${month}-${year} ${hour}:${minutes}:${seconds}: ${hours-12 > 0 ? 'PM' : 'AM'}`;
    return `${day}-${month}-${year}`;
}

  let usersData=[
    {name: "John",phone: "789489745", city:'Hisar', dept:'Sales', state:'Haryana', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], requirement:'3 Watt solar pannel', order_by:'Parveen', created_at:'2024-04-22 09:11:46',latitude:'26.2657209',longitude:'72.9701266'},
    {name: "Honey",phone: "132154646",city:'Delhi', dept:'Technical',state:'Haryana', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], requirement:'10 Watt solar pannel', order_by:'Monu', created_at:'2024-04-22 12:11:46',latitude:'26.2657209',longitude:'72.9701266'},
    {name: "Preet",phone: "456489245",city:'Barwala',dept:'Management', state:'Haryana', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], requirement:'25 Watt solar pannel', order_by:'Parveen', created_at:'2024-04-22 14:11:46',latitude:'26.2657209',longitude:'72.9701266'},
    {name: "Singh",phone: "236548979",city:'Rothak',dept:'Equipment Provider', state:'Haryana', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], requirement:'30 Watt solar pannel', order_by:'Pardeep', created_at:'2024-04-22 23:11:46',latitude:'26.2657209',longitude:'72.9701266'},
  ]
  return (
    <>
      <div className="content">
        <Row>
        <Col md="4">
            <Card className="card-user">
            <CardHeader>
                <CardTitle tag="h5">Add Staff</CardTitle>
              </CardHeader>
              <CardBody style={{minHeight:'200px !important'}}>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Input
                          placeholder="Staff Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Input
                          placeholder="Phone Number"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          placeholder="State"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                      <select className="form-control">
                        <option value="">Select Department</option>
                        <option value="1">Management</option>
                        <option value="2">Sales</option>
                        <option value="3">Backend Team</option>
                        <option value="4">Technical</option>
                        <option value="5">Equipment Provider</option>
                        <option value="6">Field</option>
                      </select>
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
                        Add New
                      </Button>
                    </div>
                  </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Staff Details</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Department</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Reg Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {usersData.map((item, index)=>(
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.dept}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                      <th><span style={{fontSize:'12px'}}>{formatDate(item.created_at)}</span></th>
                      <th> <Link to="/admin/viewStaff"><i className="fa fa-eye" /></Link></th>
                    </tr>
                  ))}
                    
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

export default Staff;
