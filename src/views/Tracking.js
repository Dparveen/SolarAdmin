import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table, } from "reactstrap";
import constant from '../variables/constant';
const { Image_Url } = constant;
function Tracking() {
  let usersData=[
    {name: "John",phone: "8798787", res:'Waiting for Govt Reg.', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg']},
    {name: "John",phone: "8978798", res:'Submitted to Field team',profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg']},
    {name: "John",phone: "12465463",res:'Talk Next Monday 10:30 AM', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg']},
    {name: "John",phone: "78945123",res:'Wait for final setup and client review', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg']},
  ]
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Deleted User</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Responce</th>
                      {/* <th>Profile</th>
                      <th>Pics</th> */}
                      <th>R Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {usersData.map((item, index)=>(
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.res}</td>
                      {/* <td><img style={{width:'50px',height:'50px', borderRadius:'50%'}} src={`${Image_Url}/${item.profile}`} /></td>
                      <td >
                      { item.profiles.map((data, index)=>(
                      <img style={{width:'50px',height:'50px', borderRadius:'50%'}} src={`${Image_Url}/${data}`} />
                      ))}
                      </td> */}
                      <td>Reg Date</td>
                      <td><i className="fa fa-eye" /> <i className="fa fa-check" /></td>
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

export default Tracking;
