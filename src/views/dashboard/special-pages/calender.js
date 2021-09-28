
import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import {Row,Col} from 'react-bootstrap'
import Card from '../../../components/Card'
import HeaderBread from '../../../components/partials/components/header-breadcrumb'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from "@fullcalendar/list"
import bootstrapPlugin from '@fullcalendar/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Calender = () => {
    return (
        <>
            <HeaderBread/>
            <Row>
                <Col lg="12">
                    <Row>
                        <Col lg="12" className="col-lg-12">
                            <Card>
                                <Card.Body>
                                <FullCalendar                

                                plugins={[ dayGridPlugin,listPlugin,bootstrapPlugin, ]}
                                // themeSystem = 'bootstrap' 
                                
                                headerToolbar={{
                                    
                                    left:'prev,next today',
                                    center:'title',
                                    right:'dayGridMonth,dayGridWeek,dayGridDay,listWeek',
                                    
                                }}
                                events={[
                                            {title: '5:30a Click for Google', url: 'http://google.com/', date: '2021-08-05',textColor:'rgba(58,87,232,1)',backgroundColor:'rgba(58,87,232,0.2)',borderColor:'rgba(58,87,232,1)'},
                                            {title: '5:30a All Day Event', date: '2021-08-07',textColor:'rgba(108,117,125,1)',backgroundColor:'rgba(108,117,125,0.2)',borderColor:'rgba(108,117,125,1)'},
                                            {title:'5:30a Long Event',date: '2021-08-09', end:'2021-08-12',textColor:'rgba(8,130,12,1)',backgroundColor:'rgba(8,130,12,0.2)',borderColor:'rgba(8,130,12,1)'},
                                            {title:'5:30a Repeating Event' ,date:'2021-08-11',textColor:'rgba(4,118,133,1)',backgroundColor:'rgba(4,118,133,0.2)',borderColor:'rgba(4,118,133,1)'},
                                            {title:'5:30a Repeating Event' ,date:'2021-08-13',textColor:'rgba(235,153,27,1)',backgroundColor:'rgba(235,153,27,0.2)',borderColor:'rgba(235,153,27,1)'},
                                            {title:'5:30a Repeating Event' ,date:'2021-08-15',textColor:'rgba(206,32,20,1)',backgroundColor:'rgba(206,32,20,0.2)',borderColor:'rgba(206,32,20,1)'},
                                            {title: 'Birthday Party',date:'2021-08-17',backgroundColor: 'rgba(58,87,232,0.2)',textColor: 'rgba(58,87,232,1)',borderColor: 'rgba(58,87,232,1)'},
                                            {title: 'Meeting',date:'2021-08-19',backgroundColor: 'rgba(58,87,232,0.2)',textColor: 'rgba(58,87,232,1)',borderColor: 'rgba(58,87,232,1)'},
                                            {title: 'Birthday Party',date:'2021-08-20',backgroundColor: 'rgba(235,153,27,0.2)',textColor: 'rgba(235,153,27,1)',borderColor: 'rgba(235,153,27,1)'},
                                            {title: 'Birthday Party',date:'2021-08-23',backgroundColor: 'rgba(235,153,27,0.2)',textColor: 'rgba(235,153,27,1)',borderColor: 'rgba(235,153,27,1)'},
                                            {title: 'Birthday Party',date:'2021-08-25',backgroundColor: 'rgba(235,153,27,0.2)',textColor: 'rgba(235,153,27,1)',borderColor: 'rgba(235,153,27,1)'},
                                            {title: 'Meeting',date:'2021-08-25',backgroundColor: 'rgba(58,87,232,0.2)',textColor: 'rgba(58,87,232,1)',borderColor: 'rgba(58,87,232,1)'},
                                            {title: 'Click for Google', url: 'http://google.com/',date:'2021-08-25',backgroundColor: 'rgba(58,87,232,0.2)',textColor: 'rgba(58,87,232,1)',borderColor: 'rgba(58,87,232,1)'},
                                            {title: '5:30a All Day Event', date: '2021-08-26', backgroundColor: 'rgba(58,87,232,0.2)',textColor: 'rgba(58,87,232,1)',borderColor: 'rgba(58,87,232,1)'},
                                            {title: '5:30a Repeating Event', date: '2021-09-01', backgroundColor: 'rgba(58,87,232,0.2)',textColor: 'rgba(58,87,232,1)',borderColor: 'rgba(58,87,232,1)'},
                                            {title: '5:30a Repeating Event', date: '2021-09-04', backgroundColor: 'rgba(58,87,232,0.2)',textColor: 'rgba(58,87,232,1)',borderColor: 'rgba(58,87,232,1)'}
                                        ]}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Calender
