import React, {useEffect} from 'react'
import {bindActionCreators} from "redux"

//SimpleRouter 
import SimpleRouter from '../../router/simple-router'

// store
import {NavbarstyleAction, getDirMode, SchemeDirAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, SidebarTypeAction, getSidebarTypeMode} from '../../store/setting/setting'
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
        },
        dispatch
    )
})


    
const Simple = (props) => {
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
})

    return (
        <>
          <div id="loading">
          </div>
          <div className="wrapper">
            <SimpleRouter />
          </div>          
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Simple)
