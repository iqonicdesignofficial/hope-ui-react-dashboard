import React,{useState, useEffect} from 'react'
import {bindActionCreators} from "redux"
import {Button, Nav, Collapse, Navbar, Container} from 'react-bootstrap'
import Card from '../../src/components/Card'
import Logo from '../components/partials/components/logo'
import { ScrollSpy } from 'bootstrap'
import { Link } from 'react-router-dom'

//uiKit
import Accordions from './uikit/accordion'
import Alerts from './uikit/alert'
import Badges from './uikit/badge'
import Breadcrumbs from './uikit/breadcrumb'
import Buttons from './uikit/button'
import ButtonGroups from './uikit/buttons-group'
import Calenders from './uikit/calender'
import Cards from './uikit/card'
import Carousels from './uikit/carousel'
import DropDowns from './uikit/dropdowns'
import ListGroups from './uikit/list-group'
import Modals from './uikit/modal'
import Navbars from './uikit/navbar'
import Navs from './uikit/nav'
import OffCanvass from './uikit/off-canvas'
import Paginations from './uikit/pagination'
import Popovers from './uikit/popovers'
import Scrollspys from './uikit/scrollspy'
import Spinnerss from './uikit/spinner'
import Toasts from './uikit/toast'
import Tooltips from './uikit/tooltip'
import Progresss from './uikit/progress'
//form
import DisabledForms from './uikit/disabled-form'
import AFormControls from './uikit/alternate-form-control'
import Sizings from './uikit/sizing'
import InputGroups from './uikit/input-group'
import FloatingLables from './uikit/floating-lable'
import AFloatingLables from './uikit/alternate-floating-lable'
import ToggleBtns from './uikit/toggle-btn'
import Validations from './uikit/validation'
import Overview from './uikit/form-overview'

// content
import Typographys from './uikit/typography'
import Images from './uikit/image'
import Figures from './uikit/figure'
import Tables from './uikit/table'

//img
import topImage from '../assets/images/dashboard/top-image.jpg'
import github from '../assets/images/brands/23.png'

//prism
import '../../node_modules/prismjs/prism';
import '../../node_modules/prismjs/themes/prism-okaidia.css'

// SliderTab
import SliderTab from '../plugins/slider-tabs'

// sidebar-offcanvas
import SidebarOffcanvas from'./uikit/sidebar-offcanvas'
// store
import {NavbarstyleAction, getDirMode, getcustomizerMode, getcustomizerprimaryMode, getcustomizerinfoMode,  SchemeDirAction, ColorCustomizerAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, getSidebarTypeMode} from '../store/setting/setting'
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        darkMode: getDarkMode(state),
        customizerMode: getcustomizerMode(state),
        cololrinfomode: getcustomizerinfoMode(state),
        colorprimarymode: getcustomizerprimaryMode(state),
        schemeDirMode: getDirMode(state),
        sidebarcolorMode: getSidebarColorMode(state),
        sidebarTypeMode: getSidebarTypeMode(state),
        sidebaractivestyleMode: getSidebarActiveMode(state),
        navbarstylemode: getNavbarStyleMode(state),
    };
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            ModeAction,
            SchemeDirAction,
            SidebarColorAction,
            SidebarActiveStyleAction,
            NavbarstyleAction,
            ColorCustomizerAction,
        },
        dispatch
    )
})
const Index = (props) => {
     //   darkmode
     const colorMode = sessionStorage.getItem('color-mode');
     if(colorMode===null){
         props.ModeAction(props.darkMode);
     }
     else{
         props.ModeAction(colorMode);
     }
     // colocustomizermode
     const colorcustomizerMode = sessionStorage.getItem('color-customizer-mode');
     const colorcustomizerinfoMode = sessionStorage.getItem('colorcustominfo-mode');
     const colorcustomizerprimaryMode = sessionStorage.getItem('colorcustomprimary-mode');
     if(colorcustomizerMode===null){
         props.ColorCustomizerAction(props.customizerMode, props.cololrinfomode, props.colorprimarymode);
         document.documentElement.style.setProperty('--bs-info', props.cololrinfomode );
     }
     else{
         props.ColorCustomizerAction(colorcustomizerMode, colorcustomizerinfoMode, colorcustomizerprimaryMode);
         document.documentElement.style.setProperty('--bs-info', colorcustomizerinfoMode);
     }

     // rtlmode
     const rtlMode = sessionStorage.getItem('rtl-mode');
     if(rtlMode===null){
         props.SchemeDirAction(props.schemeDirMode)
     }
     else{
         props.SchemeDirAction(rtlMode);
     }   
     
    // collapse
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            Array.from(document.querySelectorAll('[data-toggle="slider-tab"]'), (elem) => {
                return new SliderTab(elem)
             })
        }, 100);
        new ScrollSpy(document.body, {
            target: '#components-collapse'
          });
         new ScrollSpy(document.body, {
            target: '#forms-collapse'
         });
         new ScrollSpy(document.body, {
            target: '#contents-collapse'
         })
    })
    
    return (
        <>
         <span className="uisheet screen-darken"></span>
            <div className="header" style= {{background:`url(${topImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh", position: "relative",}}>
                <div className="main-img">
                    <div className="container">
                        <svg width="150" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.423828" y="34.5762" width="50" height="7.14286" rx="3.57143" transform="rotate(-45 -0.423828 34.5762)" fill="white"/>
                            <rect x="14.7295" y="49.7266" width="50" height="7.14286" rx="3.57143" transform="rotate(-45 14.7295 49.7266)" fill="white"/>
                            <rect x="19.7432" y="29.4902" width="28.5714" height="7.14286" rx="3.57143" transform="rotate(45 19.7432 29.4902)" fill="white"/>
                            <rect x="19.7783" y="-0.779297" width="50" height="7.14286" rx="3.57143" transform="rotate(45 19.7783 -0.779297)" fill="white"/>
                        </svg>
                        <h1 className="my-4">
                            <span>Hope ui - Design System</span>
                        </h1>
                        <h4 className="text-white mb-5">Production ready FREE Open Source <b>Dashboard UI Kit</b> and <b>Design System</b>.</h4>
                        <div className="d-flex justify-content-center align-items-center">
                            <div>
                                <Link className="btn btn-light bg-white" to="/dashboard" target="_black">
                                    <svg width="22" height="22" className="me-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                    Dashboard Demo
                                </Link>
                            </div>
                            <div className="ms-3">
                                <Button bsPrefix=" btn btn-light bg-white d-flex" target="_blank" href="https://github.com/iqonic-design/hope-ui-react-dashboard">
                                    <img src={github} width="24px" height="24px" alt="github"/>
                                    <span className="text-danger mx-2 fw-bold">STAR US</span> 
                                    <span>ON GITHUB</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Container>
                    <Navbar bg="white" expand="lg" className="top-1 rounded">
                        <Container>
                            <Navbar.Brand href="#" className="mx-2 d-flex align-items-center">
                                <Logo color={true} />
                                <h5 className="logo-title mx-3">Hope UI</h5>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto mb-2 mb-lg-0 d-flex align-items-start">
                                    <Nav.Link href="https://templates.iqonic.design/hope-ui/documentation/react/build/" target="_blank" className="">Documentation</Nav.Link>
                                    <Nav.Link href="https://templates.iqonic.design/hope-ui/documentation/react/build/changelog" target="_blank" className="me-3">Change Log</Nav.Link>
                                    <Nav.Link href="https://iqonic.design/product/admin-templates/hope-ui-free-open-source-react-admin-template/" className="btn btn-success text-white">
                                        <svg width="22" className="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                                        </svg>
                                        Download
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
            <div className=" body-class-1 container">
                <aside className="mobile-offcanvas bd-aside card iq-document-card sticky-xl-top text-muted align-self-start mb-5 mt-n5" id="left-side-bar">
                    <div className="offcanvas-header p-0">  
                        <button className="btn-close float-end"></button>
                    </div>
                    <h2 className="h6 pb-2 border-bottom">On this page</h2>
                    <Nav className="small" id="elements-section">
                        <ul className="list-unstyled mb-0">
                            <li className="mt-2">
                                <Button variant=" d-inline-flex align-items-center "   
                                        onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>
                                            <i className="right-icon me-2" onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </i>
                                    Components
                                </Button>
                                <Collapse in={open}>
                                    <ul className="list-unstyled ps-3 " id="components-collapse" to="#components">
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#accordion">Accordion</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#alerts">Alerts</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#badge">Badge</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#breadcrumb">Breadcrumb</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#buttons">Buttons</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#button-group">Button Group</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#calendar">Calendar</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#card">Card</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#carousel">Carousel</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#dropdowns">Dropdowns</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#list-group">List Group</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#modal">Modal</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#navs">Navs</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#navbar">Navbar</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#off-canvas">Off Canvas</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#pagination">Pagination</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#popovers">Popovers</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#progress">Progress</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#scrollspy">Scrollspy</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#spinners">Spinners</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#toasts">Toasts</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#tooltips">Tooltips</Nav.Link></li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="my-2">
                                <Button variant=" d-inline-flex align-items-center "
                                        onClick={() => setOpen1(!open1)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open1}>
                                            <i className="right-icon me-2" onClick={() => setOpen1(!open1)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open1} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </i>
                                    Forms
                                </Button>
                                <Collapse in={open1}>
                                    <ul className="list-unstyled ps-3 " id="forms-collapse" to="#forms">
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#overview">Overview</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#disabled-forms">Disabled Forms</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#sizing">Sizing</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#input-group">Input Group</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#a-form-control">Alertnate Input</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#floating-labels">Floating Labels</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#a-floating-labels">Alertnate Float Labels</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#toggle-btn">Toggle Button</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#validation">Validation</Nav.Link></li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="mb-2">
                                <Button variant=" d-inline-flex align-items-center " 
                                        onClick={() => setOpen2(!open2)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open2}>
                                            <i className="right-icon me-2" onClick={() => setOpen2(!open2)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open2} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </i>
                                    Contents
                                </Button>
                                <Collapse in={open2}>
                                    <ul className="list-unstyled ps-3 " id="contents-collapse" to="#content">
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#typography">Typography</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#images">Images</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#tables">Tables</Nav.Link></li>
                                        <li><Nav.Link className="d-inline-flex align-items-center rounded" href="#figures">Figures</Nav.Link></li>
                                    </ul>
                                </Collapse>
                            </li>                    
                        </ul>
                    </Nav>
                </aside>
                <div className="bd-cheatsheet container-fluid bg-trasprent mt-n5" >
                    <section id="components" >
                        <div className="iq-side-content sticky-xl-top">
                            <Card className="">
                                <Card.Body className="">
                                    <h4 className="fw-bold">
                                        Components
                                    </h4>
                                </Card.Body>
                            </Card>
                        </div>
                        <Accordions />
                        <Alerts />
                        <Badges />
                        <Breadcrumbs />
                        <Buttons />
                        <ButtonGroups />
                        <Calenders />
                        <Cards />
                        <Carousels />
                        <DropDowns />
                        <ListGroups />
                        <Modals />
                        <Navs />
                        <Navbars />
                        <OffCanvass />
                        <Paginations />
                        <Popovers />
                        <Progresss />
                        <Scrollspys />
                        <Spinnerss />
                        <Toasts />
                        <Tooltips />
                    </section>
                    <section id="forms" >
                        <div className="iq-side-content sticky-xl-top">
                            <Card className="">
                                <Card.Body className="">
                                    <h4 className="fw-bold">
                                        Forms
                                    </h4>
                                </Card.Body>
                            </Card>
                        </div>
                        <Overview />
                        <DisabledForms />
                        <Sizings />
                        <InputGroups />
                        <AFormControls />
                        <FloatingLables />
                        <AFloatingLables />
                        <ToggleBtns />
                        <Validations />
                    </section>
                    <section id="content">
                        <div className="iq-side-content sticky-xl-top">
                            <Card className="">
                                <Card.Body className="">
                                    <h4 className="fw-bold">
                                        Contents
                                    </h4>
                                </Card.Body>
                            </Card>
                        </div>
                        <Typographys />
                        <Images />
                        <Tables />
                        <Figures />
                    </section>
                </div>
            </div>
            <div id="back-to-top" style={{display: "none"}}>
                <Button size="xs" variant="primary  p-0 position-fixed top"  href="#top">
                    <svg width="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 15.5L12 8.5L19 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </Button>
            </div>
            <div className="middle" style={{display: "none"}}>
                {/* <button data-trigger="left-side-bar" className="d-xl-none btn btn-xs mid-menu" type="button">
                    <i className="icon">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.75 11.7256L4.75 11.7256" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </i>
                </button> */}
                <SidebarOffcanvas />
            </div>
            <div className="btn-download">
                <Button variant=" " href="https://iqonic.design/product/admin-templates/hope-ui-free-open-source-react-admin-template/" target="_blank" >
                    <svg width="22" className="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                    </svg>
                    <span>Download</span>
                </Button>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
