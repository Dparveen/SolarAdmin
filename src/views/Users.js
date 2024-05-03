// import GoogleMap from "components/map/GoogleMap";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table, } from "reactstrap";
import constant from '../variables/constant';
const { Image_Url } = constant;
function Users() {

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
    return `${day}-${month}-${year}`;
}

  let usersData=[
    {name: "John",phone: "789489745", city:'Hisar', state:'Haryana', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], requirement:'3 Watt solar pannel', order_by:'Parveen', created_at:'2024-04-22 09:11:46',latitude:'26.2657209',longitude:'72.9701266'},
    {name: "Honey",phone: "132154646",city:'Delhi', state:'Haryana', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], requirement:'10 Watt solar pannel', order_by:'Monu', created_at:'2024-04-22 12:11:46',latitude:'26.2657209',longitude:'72.9701266'},
    {name: "Preet",phone: "456489245",city:'Barwala', state:'Haryana', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], requirement:'25 Watt solar pannel', order_by:'Parveen', created_at:'2024-04-22 14:11:46',latitude:'26.2657209',longitude:'72.9701266'},
    {name: "Singh",phone: "236548979",city:'Rothak', state:'Haryana', profile:'/images/1708589463700-2024-02-22T13:41:02.875771.jpg',profiles:['/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg','/images/1708589463700-2024-02-22T13:41:02.875771.jpg'], requirement:'30 Watt solar pannel', order_by:'Pardeep', created_at:'2024-04-22 23:11:46',latitude:'26.2657209',longitude:'72.9701266'},
  ]
  return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Registered User</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Details</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Order By</th>
                      <th>Reg Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {usersData.map((item, index)=>(
                    <tr key={index+1}>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                      <td>{item.requirement}</td>
                      <td>{item.order_by}</td>
                      <th><span style={{fontSize:'12px'}}>{formatDate(item.created_at)}</span></th>
                      <td><Link to={`/admin/addNewInquery/${index+1}`}><i className="fa fa-eye" /> </Link></td>
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

export default Users;
