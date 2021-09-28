import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Card from '../../../components/Card'

const Data_table = [
   {
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      age: '33',
      startdate: '2008/11/28',
      salary: '$162,700'
   },
   {
      name: 'Angelica Ramos',
      position: 'Chief Executive Officer (CEO)',
      office: 'London',
      age: '47',
      startdate: '2009/10/09',
      salary: '$1,200,000'
   },
   {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: '66',
      startdate: '2009/01/12',
      salary: '$86,000'
   },
   {
      name: 'Bradley Greer',
      position: 'Software Engineer',
      office: 'London',
      age: '41',
      startdate: '2012/10/13',
      salary: '$132,000'
   },
   {
      name: 'Brenden Wagner',
      position: 'Software Engineer',
      office: 'San Francisco',
      age: '28',
      startdate: '2011/06/07',
      salary: '$206,850'
   },
   {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'New York',
      age: '61',
      startdate: '2012/12/02',
      salary: '$372,000'
   },
   {
      name: 'Bruno Nash',
      position: 'Software Engineer',
      office: 'London',
      age: '38',
      startdate: '2011/05/03',
      salary: '$163,500'
   },
   {
      name: 'Caesar Vance',
      position: 'Pre-Sales Support',
      office: 'New York',
      age: '21',
      startdate: '2011/12/12',
      salary: '$106,450'
   },
   {
      name: 'Cara Stevens',
      position: 'Sales Assistant',
      office: 'New York',
      age: '46',
      startdate: '2011/12/06',
      salary: '$145,600'
   },
   {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      age: '22',
      startdate: '2012/03/29',
      salary: '$433,060'
   },
]

const TableData = () => {
    return (
      <>
         <Row>
            <Col sm="12">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Bootstrap Datatables</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
                     <div className="table-responsive">
                        <table id="datatable" className="table table-striped" data-toggle="data-table">
                           <thead>
                              <tr>
                                 <th>Name</th>
                                 <th>Position</th>
                                 <th>Office</th>
                                 <th>Age</th>
                                 <th>Start date</th>
                                 <th>Salary</th>
                              </tr>
                           </thead>
                           <tbody>
                           { 
                                 Data_table.map((item) => (
                              <tr key={item.age}>
                                 <td>{item.name}</td>
                                 <td>{item.position}</td>
                                 <td>{item.office}</td>
                                 <td>{item.age}</td>
                                 <td>{item.startdate}</td>
                                 <td>{item.salary}</td>
                              </tr>
                                 ))}
                           </tbody>
                           <tfoot>
                              <tr>
                                 <th>Name</th>
                                 <th>Position</th>
                                 <th>Office</th>
                                 <th>Age</th>
                                 <th>Start date</th>
                                 <th>Salary</th>
                              </tr>
                           </tfoot>
                        </table>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </>
   )
}

export default TableData
