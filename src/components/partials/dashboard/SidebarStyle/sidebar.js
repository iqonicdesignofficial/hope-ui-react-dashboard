import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import VerticalNav from '../SidebarStyle/vertical-nav'
import Scrollbar from 'smooth-scrollbar'
import {bindActionCreators} from "redux"
// import SidebarDark from '../../components/settingoffcanvas'

// export const SidebarDark =() =>{

// }

// store
import {NavbarstyleAction, getDirMode, SchemeDirAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, getSidebarTypeMode} from '../../../../store/setting/setting'
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
            SidebarActiveStyleAction,
            NavbarstyleAction,
        },
        dispatch
    )
})


const Sidebar = (props) => {
    
    
    
    useEffect(
        () =>{
            // sidebarcolormode
            const sidebarcolorMode1 = sessionStorage.getItem('sidebarcolor-mode');
            if(sidebarcolorMode1===null){
                props.SidebarColorAction(props.sidebarcolorMode);
            }
            else{
                props.SidebarColorAction(sidebarcolorMode1);
            }

            // sidebarstylemode
            const sidebarstyleMode = sessionStorage.getItem('sidebarstyle-mode');
            if(sidebarstyleMode===null){
                props.SidebarActiveStyleAction(props.sidebaractivestyleMode);
            }
            else{
                props.SidebarActiveStyleAction(sidebarstyleMode);
            }
            Scrollbar.init(document.querySelector('#my-scrollbar'))
        }
        
         
    
    )
    const minisidebar =() =>{
        document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
    }
    
    

    return (
        <>
            <aside className="sidebar sidebar-default navs-rounded-all {{ sidebarVariants }}">
                <div className="sidebar-header d-flex align-items-center justify-content-start">
                    <Link to="/dashboard" className="navbar-brand">
                        <svg width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                        </svg>
                        <h4 className="logo-title">Hope UI</h4>
                    </Link>
                    <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar} >
                        <i className="icon">
                            <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </i>
                    </div>
                </div>
                <div className="pt-0 sidebar-body data-scrollbar" data-scroll="1" id="my-scrollbar">
                    {/* sidebar-list class to be added after replace css */}
                    <div className="sidebar-list navbar-collapse" id="sidebar">
                      <VerticalNav />
                    </div>
                </div>
                <div className="sidebar-footer"></div>
            </aside>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

