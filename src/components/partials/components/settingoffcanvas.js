import React, {useState, useEffect} from 'react'
import { Offcanvas, Row, Col, Button} from 'react-bootstrap'
import {bindActionCreators} from "redux"

// images
import image1 from '../../../assets/images/settings/dark/01.png'
import image2 from '../../../assets/images/settings/light/01.png'
import image3 from '../../../assets/images/settings/dark/02.png'
import image4 from '../../../assets/images/settings/light/02.png'
import image5 from '../../../assets/images/settings/dark/03.png'
import image6 from '../../../assets/images/settings/light/03.png'
import image7 from '../../../assets/images/settings/dark/04.png'
import image8 from '../../../assets/images/settings/light/04.png'
import image9 from '../../../assets/images/settings/dark/05.png'
import image10 from '../../../assets/images/settings/light/05.png'
import image11 from '../../../assets/images/settings/dark/06.png'
import image12 from '../../../assets/images/settings/light/06.png'
import image13 from '../../../assets/images/settings/dark/07.png'
import image14 from '../../../assets/images/settings/light/07.png'
import image15 from '../../../assets/images/settings/dark/08.png'
import image16 from '../../../assets/images/settings/light/08.png'
import image17 from '../../../assets/images/settings/dark/09.png'
import image18 from '../../../assets/images/settings/light/09.png'
import image19 from '../../../assets/images/settings/dark/10.png'
import image20 from '../../../assets/images/settings/light/10.png'
import image21 from '../../../assets/images/settings/dark/11.png'
import image22 from '../../../assets/images/settings/light/11.png'
import image23 from '../../../assets/images/settings/dark/12.png'
import image24 from '../../../assets/images/settings/light/12.png'

// store
import {NavbarstyleAction, getDirMode, SchemeDirAction, SidebarminiTypeAction, SidebarboxedTypeAction, SidebarhoverTypeAction, getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, SidebarTypeAction, getSidebarTypeMode} from '../../../store/setting/setting'
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        darkMode: getDarkMode(state),
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
            SidebarTypeAction,
            SidebarActiveStyleAction,
            NavbarstyleAction,
            SidebarminiTypeAction,
            SidebarhoverTypeAction,
            SidebarboxedTypeAction,
        },
        dispatch
    )
})



const SettingOffcanvas = (props ) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);
 
 const sidebartypeActives = (type) => {
    if (type === 'sidebar-mini') {
      if (props.sidebarTypeMode.mini === null || props.sidebarTypeMode.mini === '') {
        var miniclass = 'sidebar-mini'
        props.SidebarminiTypeAction(miniclass)
      } else {
        var emptyminiclass = ''
        props.SidebarminiTypeAction(emptyminiclass)
      }
    }
    if (type === 'sidebar-hover') {
        if (props.sidebarTypeMode.hover === null || props.sidebarTypeMode.hover === '') {
            var hoverclass = 'sidebar-hover'
            var miniclass1 ='sidebar-mini'
            props.SidebarhoverTypeAction(hoverclass)
            props.SidebarminiTypeAction(miniclass1)
          } else {
            const emptyhoverclass = ''
           props.SidebarhoverTypeAction(emptyhoverclass)
           props.SidebarminiTypeAction(emptyhoverclass)
          }
    }
    if (type === 'sidebar-boxed') {
      if (props.sidebarTypeMode.boxed === null || props.sidebarTypeMode.boxed === '') {
        var boxedclass  = 'sidebar-boxed'
        props.SidebarboxedTypeAction(boxedclass )
      } else {
        var emptyboxedclass  = ''
        props.SidebarboxedTypeAction(emptyboxedclass )
      }
    }
  }


  useEffect(() => {
    //   darkmode
    const colorMode = sessionStorage.getItem('color-mode');
    if(colorMode===null){
        props.ModeAction(props.darkMode);
    }
    else{
        props.ModeAction(colorMode);
    }
    

    // rtlmode
    const rtlMode = sessionStorage.getItem('rtl-mode');
    if(rtlMode===null){
        props.SchemeDirAction(props.schemeDirMode)
    }
    else{
        props.SchemeDirAction(rtlMode);
    }    

    // sidebarcolormode
    const sidebarcolorMode1 = sessionStorage.getItem('sidebarcolor-mode');
    if(sidebarcolorMode1===null){
        props.SidebarColorAction(props.sidebarcolorMode);
    }
    else{
        props.SidebarColorAction(sidebarcolorMode1);
    }
    var sidebartypeMode = sessionStorage.getItem("sidebarminitype-mode");
    props.sidebarTypeMode.mini = sidebartypeMode
    console.log("mini",props.sidebarTypeMode.mini )
    if(sidebartypeMode === 'sidebar-mini'){
        document.querySelector('.sidebar-default').classList.add("sidebar-mini")
        var elems3 = document.querySelectorAll('[data-value="sidebar-mini"]');
        [].forEach.call(elems3, function(el) {
            el.classList.add("active");
        });
        console.log(sidebartypeMode)
        
    }
    else{
        document.querySelector('.sidebar-default').classList.remove("sidebar-mini")
        var elems4 = document.querySelectorAll('[data-value="sidebar-mini"]');
        [].forEach.call(elems4, function(el) {
            el.classList.remove("active");
        });
        console.log(sidebartypeMode)
    }
    // boxed
    var sidebarboxtypeMode = sessionStorage.getItem("sidebarboxedtype-mode");
    props.sidebarTypeMode.boxed = sidebarboxtypeMode
    console.log("boxed",props.sidebarTypeMode.boxed )
    if(sidebarboxtypeMode === 'sidebar-boxed'){
        document.querySelector('.sidebar-default').classList.add("sidebar-boxed")
        var elems1 = document.querySelectorAll('[data-value="sidebar-boxed"]');
        [].forEach.call(elems1, function(el) {
            el.classList.add("active");
        });
        console.log(sidebarboxtypeMode)
    }
    else{
        document.querySelector('.sidebar-default').classList.remove("sidebar-boxed")
        var elems2 = document.querySelectorAll('[data-value="sidebar-boxed"]');
        [].forEach.call(elems2, function(el) {
            el.classList.remove("active");
        });
        console.log(sidebarboxtypeMode)
    }
    // hover
    var sidebarhovertypeMode = sessionStorage.getItem("sidebarhovertype-mode");
    props.sidebarTypeMode.hover = sidebarhovertypeMode
    if(sidebarhovertypeMode === 'sidebar-hover'){
        var elems5 = document.querySelectorAll('[data-value="sidebar-hover"]');
        [].forEach.call(elems5, function(el) {
            el.classList.add("active");
        });
       if(!document.querySelector('.sidebar-default').classList.contains("sidebar-mini")){
        document.querySelector('.sidebar-default').classList.add("sidebar-hover")
        
        console.log(sidebarhovertypeMode)
       }
     else{
        document.querySelector('.sidebar-default').classList.add("sidebar-hover")
        
       }
    }
    else{
        document.querySelector('.sidebar-default').classList.remove("sidebar-hover")
        var elems6 = document.querySelectorAll('[data-value="sidebar-hover"]');
        [].forEach.call(elems6, function(el) {
            el.classList.remove("active");
        });
        console.log(sidebarhovertypeMode)
    }
    
    // sidebarstylemode
    const sidebarstyleMode = sessionStorage.getItem('sidebarstyle-mode');
    if(sidebarstyleMode===null){
        props.SidebarActiveStyleAction(props.sidebaractivestyleMode);
    }
    else{
        props.SidebarActiveStyleAction(sidebarstyleMode);
    }
    // navbarstylemode
    const navbarstyleMode1 = sessionStorage.getItem('Navbarstyle-mode');
    if(navbarstyleMode1===null){
        props.NavbarstyleAction(props.navbarstylemode);
    }
    else{
        props.NavbarstyleAction(navbarstyleMode1);
    }
  })
    return (
        <>
            <Button className="btn btn-fixed-end btn-warning btn-icon btn-setting" onClick={handleShow} >
                <svg width="24" viewBox="0 0 24 24" className="animated-rotate" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.8064 7.62361L20.184 6.54352C19.6574 5.6296 18.4905 5.31432 17.5753 5.83872V5.83872C17.1397 6.09534 16.6198 6.16815 16.1305 6.04109C15.6411 5.91402 15.2224 5.59752 14.9666 5.16137C14.8021 4.88415 14.7137 4.56839 14.7103 4.24604V4.24604C14.7251 3.72922 14.5302 3.2284 14.1698 2.85767C13.8094 2.48694 13.3143 2.27786 12.7973 2.27808H11.5433C11.0367 2.27807 10.5511 2.47991 10.1938 2.83895C9.83644 3.19798 9.63693 3.68459 9.63937 4.19112V4.19112C9.62435 5.23693 8.77224 6.07681 7.72632 6.0767C7.40397 6.07336 7.08821 5.98494 6.81099 5.82041V5.82041C5.89582 5.29601 4.72887 5.61129 4.20229 6.52522L3.5341 7.62361C3.00817 8.53639 3.31916 9.70261 4.22975 10.2323V10.2323C4.82166 10.574 5.18629 11.2056 5.18629 11.8891C5.18629 12.5725 4.82166 13.2041 4.22975 13.5458V13.5458C3.32031 14.0719 3.00898 15.2353 3.5341 16.1454V16.1454L4.16568 17.2346C4.4124 17.6798 4.82636 18.0083 5.31595 18.1474C5.80554 18.2866 6.3304 18.2249 6.77438 17.976V17.976C7.21084 17.7213 7.73094 17.6516 8.2191 17.7822C8.70725 17.9128 9.12299 18.233 9.37392 18.6717C9.53845 18.9489 9.62686 19.2646 9.63021 19.587V19.587C9.63021 20.6435 10.4867 21.5 11.5433 21.5H12.7973C13.8502 21.5001 14.7053 20.6491 14.7103 19.5962V19.5962C14.7079 19.088 14.9086 18.6 15.2679 18.2407C15.6272 17.8814 16.1152 17.6807 16.6233 17.6831C16.9449 17.6917 17.2594 17.7798 17.5387 17.9394V17.9394C18.4515 18.4653 19.6177 18.1544 20.1474 17.2438V17.2438L20.8064 16.1454C21.0615 15.7075 21.1315 15.186 21.001 14.6964C20.8704 14.2067 20.55 13.7894 20.1108 13.5367V13.5367C19.6715 13.284 19.3511 12.8666 19.2206 12.3769C19.09 11.8873 19.16 11.3658 19.4151 10.928C19.581 10.6383 19.8211 10.3982 20.1108 10.2323V10.2323C21.0159 9.70289 21.3262 8.54349 20.8064 7.63277V7.63277V7.62361Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <circle cx="12.1747" cy="11.8891" r="2.63616" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                </svg>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement={`${props.schemeDirMode==="rtl" ? 'start': 'end'}`}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Settings</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                        <Col lg={12}>
                            <h5 className="mb-3">Scheme</h5>
                            <div className="grid-cols-3 mb-4 d-grid gap-x-3">
                                <div className={`${props.darkMode === 'auto'? 'active' : ''}  btn-border`} onClick={() => {props.ModeAction('auto')}} data-setting="color-mode" data-name="color" data-value="auto">
                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M7,2V13H10V22L17,10H13L17,2H7Z" />
                                    </svg>
                                    <span className="ms-2 "> Auto </span>
                                </div>
                                <div className={`${props.darkMode === 'dark'? 'active' : ''}  btn-border`} onClick={() => {props.ModeAction('dark')}}  data-setting="color-mode" data-name="color" data-value="dark">
                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z" />
                                    </svg>
                                    <span className="ms-2 "> Dark  </span>
                                </div>
                                <div className={`${props.darkMode === 'light'? 'active' : ''}  btn-border`} onClick={() => {props.ModeAction('light')}} data-setting="color-mode" data-name="color" data-value="light">
                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
                                    </svg>
                                    <span className="ms-2 "> Light</span>
                                </div>
                            </div>
                            <hr className="hr-horizontal"/>
                            <h5 className="mt-4 mb-3">Scheme Direction</h5>
                            <div className="grid-cols-2 mb-4 d-grid gap-x-3">
                                <div className="text-center">
                                    <img src={image1} alt="ltr" className={`${props.schemeDirMode === 'ltr'? 'active' : ''} mode dark-img img-fluid btn-border p-0 flex-column `} onClick={() => {props.SchemeDirAction('ltr')}} data-setting="dir-mode" data-name="dir" data-value="ltr"/>
                                    <img src={image2} alt="ltr" className={`${props.schemeDirMode === 'ltr'? 'active' : ''} mode light-img img-fluid btn-border p-0 flex-column `} onClick={() => {props.SchemeDirAction('ltr')}}  data-setting="dir-mode" data-name="dir" data-value="ltr"/>
                                    <span className="mt-2 "> LTR </span>
                                </div>
                                <div className="text-center">
                                    <img src={image3} alt="" className={`${props.schemeDirMode === 'rtl'? 'active' : ''} mode dark-img img-fluid btn-border p-0 flex-column`} onClick={() => {props.SchemeDirAction('rtl')}}  data-setting="dir-mode" data-name="dir" data-value="rtl"/>
                                    <img src={image4} alt="" className={`${props.schemeDirMode === 'rtl'? 'active' : ''} mode light-img img-fluid btn-border p-0 flex-column`} onClick={() => {props.SchemeDirAction('rtl')}}  data-setting="dir-mode" data-name="dir" data-value="rtl"/>
                                    <span className="mt-2 "> RTL  </span>
                                </div>
                            </div>
                            <hr className="hr-horizontal"/>
                            <h5 className="mt-4 mb-3">Sidebar Color</h5>
                            <div className="grid-cols-2 mb-4 d-grid gap-x-3">
                                <div className={`${props.sidebarcolorMode === 'dark'? 'active' : ''} btn btn-border mb-4 `} onClick={() => {props.SidebarColorAction('dark')}} checked={props.sidebarcolorMode} data-active={props.sidebarcolorMode? 'true' : 'false'}  data-setting="sidebar" data-name="sidebar-color" data-value="sidebar-dark">
                                    <i className="text-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                        </svg>
                                    </i>
                                    <span className="ms-2 "> Dark </span>
                                </div>
                                <div className={`${props.sidebarcolorMode === 'color'? 'active' : ''} btn btn-border mb-4 `}  onClick={() => {props.SidebarColorAction('color')}} checked={props.sidebarcolorMode} data-active={props.sidebarcolorMode? 'true' : 'false'} data-setting="sidebar" data-name="sidebar-color" data-value="sidebar-color">
                                    <i className="text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                        </svg>
                                    </i>
                                    <span className="ms-2 "> Color </span>
                                </div>
                                <div className={`${props.sidebarcolorMode === 'white'? 'active' : ''} btn btn-border mb-4 `}  onClick={() => {props.SidebarColorAction('white')}} data-setting="sidebar" data-name="sidebar-color" data-value="sidebar-white">
                                    <i className="text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="12" r="8" fill="currentColor" stroke="black" strokeWidth="3"></circle>
                                        </svg>
                                    </i>
                                    <span className="ms-2 "> White </span>
                                </div>
                                <div className={`${props.sidebarcolorMode === 'transparent'? 'active' : ''} btn btn-border mb-4 `}  onClick={() => {props.SidebarColorAction('transparent')}} data-setting="sidebar" data-name="sidebar-color" data-value="sidebar-transparent">
                                    <i className="text-body">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="12" r="8" fill="#F5F6FA" stroke="black" strokeWidth="3"></circle>
                                        </svg>
                                    </i>
                                    <span className="ms-2 "> Transparent </span>
                                </div>
                            </div>
                            <hr className="hr-horizontal"/>
                            <h5 className="mt-4 mb-3">Sidebar Types</h5>
                            <div className="grid-cols-3 mb-4 d-grid gap-x-3">
                                <div className="text-center">
                                    <img src={image5} alt="mini" onClick={() => {sidebartypeActives('sidebar-mini')}} className="p-0 mode dark-img img-fluid btn-border flex-column" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-mini"/>
                                    <img src={image6} alt="mini" onClick={() => {sidebartypeActives('sidebar-mini')}} className="p-0 mode light-img img-fluid btn-border flex-column" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-mini"/>
                                    <span className="mt-2">Mini</span>
                                </div>
                                <div className="text-center">
                                    <img src={image7} alt="hover"  onClick={() => {sidebartypeActives('sidebar-hover')}} className="p-0 mode dark-img img-fluid btn-border flex-column" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-hover" data-extra-value="sidebar-mini"/>
                                    <img src={image8} alt="hover" onClick={() => {sidebartypeActives('sidebar-hover')}} className="p-0 mode light-img img-fluid btn-border flex-column" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-hover" data-extra-value="sidebar-mini"/>
                                    <span className="mt-2">Hover</span>
                                </div>
                                <div className="text-center">
                                    <img src={image9} alt="boxed" onClick={() => {sidebartypeActives('sidebar-boxed')}} className="p-0 mode dark-img img-fluid btn-border flex-column" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-boxed"/>
                                    <img src={image10} alt="boxed" onClick={() => {sidebartypeActives('sidebar-boxed')}} className="p-0 mode light-img img-fluid btn-border flex-column" data-setting="sidebar" data-name="sidebar-type" data-value="sidebar-boxed"/>
                                    <span className="mt-2">Boxed</span>
                                </div>
                            </div>
                            
                            <hr className="hr-horizontal"/>
                            <h5 className="mt-4 mb-3">Sidebar Active Style</h5>
                            <div className="grid-cols-2 mb-4 d-grid gap-x-3">
                                <div className="mb-4 text-center">
                                    <img src={image11} alt="rounded-one-side" onClick={() => {props.SidebarActiveStyleAction('roundedOneSide')}} className={`${props.sidebaractivestyleMode === 'roundedOneSide'? 'active' : ''} mode dark-img img-fluid btn-border p-0 flex-column`} data-setting="sidebar" data-name="sidebar-item" data-value="navs-rounded"/>
                                    <img src={image12} alt="rounded-one-side" onClick={() => {props.SidebarActiveStyleAction('roundedOneSide')}} className={`${props.sidebaractivestyleMode === 'roundedOneSide'? 'active' : ''} mode light-img img-fluid btn-border p-0 flex-column`} data-setting="sidebar" data-name="sidebar-item" data-value="navs-rounded"/>
                                    <span className="mt-2">Rounded One Side</span>
                                </div>
                                <div className="mb-4 text-center">
                                    <img src={image13} alt="rounded-all" onClick={() => {props.SidebarActiveStyleAction('roundedAllSide')}} className={`${props.sidebaractivestyleMode === 'roundedAllSide'? 'active' : ''} mode dark-img img-fluid btn-border p-0 flex-column `} data-setting="sidebar" data-name="sidebar-item" data-value="navs-rounded-all"/>
                                    <img src={image14} alt="rounded-all"  onClick={() => {props.SidebarActiveStyleAction('roundedAllSide')}} className={`${props.sidebaractivestyleMode === 'roundedAllSide'? 'active' : ''} mode light-img img-fluid btn-border p-0 flex-column `} data-setting="sidebar" data-name="sidebar-item" data-value="navs-rounded-all"/>
                                    <span className="mt-2">Rounded All</span>
                                </div>
                                <div className="mb-4 text-center">
                                    <img src={image15} alt="pill-one-side" onClick={() => {props.SidebarActiveStyleAction('pill')}} className={`${props.sidebaractivestyleMode === 'pill'? 'active' : ''} mode dark-img img-fluid btn-border p-0 flex-column`} data-setting="sidebar" data-name="sidebar-item" data-value="navs-pill"/>
                                    <img src={image16} alt="pill-one-side" onClick={() => {props.SidebarActiveStyleAction('pill')}} className={`${props.sidebaractivestyleMode === 'pill'? 'active' : ''} mode light-img img-fluid btn-border p-0 flex-column`} data-setting="sidebar" data-name="sidebar-item" data-value="navs-pill"/>
                                    <span className="mt-2">Pill One Side</span>
                                </div>
                                <div className="mb-4 text-center">
                                    <img src={image17} alt="pill-all" onClick={() => {props.SidebarActiveStyleAction('pillAll')}} className={`${props.sidebaractivestyleMode === 'pillAll'? 'active' : ''} mode dark-img img-fluid btn-border p-0 flex-column`} data-setting="sidebar" data-name="sidebar-item" data-value="navs-pill-all"/>
                                    <img src={image18} alt="pill-all" onClick={() => {props.SidebarActiveStyleAction('pillAll')}} className={`${props.sidebaractivestyleMode === 'pillAll'? 'active' : ''} mode light-img img-fluid btn-border p-0 flex-column`} data-setting="sidebar" data-name="sidebar-item" data-value="navs-pill-all"/>
                                    <span className="mt-2">Pill All</span>
                                </div>
                            </div>
                            <hr className="hr-horizontal"/>
                            <h5 className="mt-4 mb-3">Navbar Style</h5>
                            <div className="grid-cols-2 d-grid gap-x-3">
                                <div className="mb-4 text-center">
                                    <img src={image19} alt="image1" onClick={() => {props.NavbarstyleAction('glass')}} className={`${props.navbarstylemode === 'glass'? 'active' : ''} mode dark-img img-fluid btn-border p-0 flex-column`} data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="nav-glass"/>
                                    <img src={image20} alt="image2" onClick={() => {props.NavbarstyleAction('glass')}} className={`${props.navbarstylemode === 'glass'? 'active' : ''} mode light-img img-fluid btn-border p-0 flex-column`} data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="nav-glass"/>
                                    <span className="mt-2">Glass</span>
                                </div>
                                <div className="mb-4 text-center">
                                    <img src={image21} alt="color" onClick={() => {props.NavbarstyleAction('color')}} className={`${props.navbarstylemode === 'color'? 'active' : ''} mode dark-img img-fluid btn-border p-0 flex-column`} data-setting="navbar" data-target=".iq-navbar-header" data-name="navbar-type" data-value="navs-bg-color"/>
                                    <img src={image22} alt="color" onClick={() => {props.NavbarstyleAction('color')}} className={`${props.navbarstylemode === 'color'? 'active' : ''} mode light-img img-fluid btn-border p-0 flex-column`} data-setting="navbar" data-target=".iq-navbar-header" data-name="navbar-type" data-value="navs-bg-color"/>
                                    <span className="mt-2">Color</span>
                                </div>
                                <div className="mb-4 text-center">
                                    <img src={image23} alt="sticky" onClick={() => {props.NavbarstyleAction('sticky')}} className={`${props.navbarstylemode === 'sticky'? 'active' : ''} mode dark-img img-fluid btn-border p-0 flex-column`} data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="navs-sticky"/>
                                    <img src={image24} alt="sticky" onClick={() => {props.NavbarstyleAction('sticky')}} className={`${props.navbarstylemode === 'sticky'? 'active' : ''} mode light-img img-fluid btn-border p-0 flex-column`} data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="navs-sticky"/>
                                    <span className="mt-2">Sticky</span>
                                </div>
                                <div className="mb-4 text-center">
                                    <img src={image23} alt="transparent" onClick={() => {props.NavbarstyleAction('transparent')}} className={`${props.navbarstylemode === 'transparent'? 'active' : ''} mode dark-img img-fluid btn-border p-0 flex-column`} data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="navs-transparent"/>
                                    <img src={image24} alt="transparent" onClick={() => {props.NavbarstyleAction('transparent')}} className={`${props.navbarstylemode === 'transparent'? 'active' : ''} mode light-img img-fluid btn-border p-0 flex-column`} data-setting="navbar" data-target=".iq-navbar" data-name="navbar-type" data-value="navs-transparent"/>
                                    <span className="mt-2">Transparent</span>
                                </div>
                                <div className="btn btn-border active col-span-full" data-setting="navbar" data-name="navbar-default" data-value="default">
                                    <i className="text-body">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="12" r="8" fill="#F5F6FA" stroke="black" strokeWidth="3"></circle>
                                        </svg>
                                    </i>
                                    <span className="ms-2 "> Default </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
                   
        
        </>
        )
    }
    
    export default  connect(mapStateToProps, mapDispatchToProps)(SettingOffcanvas)