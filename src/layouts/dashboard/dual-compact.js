import{useEffect} from 'react'
import {bindActionCreators} from "redux"

//HorizontalMulti2Router
import HorizontalMulti2Router from '../../router/horizontal-multi-2-router'

//herder
import  HeaderStyle4 from  '../../components/partials/dashboard/HeaderStyle/header-style-4'


//footer
import Footer from '../../components/partials/dashboard/FooterStyle/footer'

// store
import {NavbarstyleAction, getDirMode, SchemeDirAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, getSidebarTypeMode} from '../../store/setting/setting'
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


const DualCompact = (props) => {
  useEffect(
    () =>{
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
      
      document.body.classList.add('dual-compact')
      return () =>{
        document.body.classList.remove('dual-compact')
      }
    }
  )
    return (
        <>
          <span className="screen-darken"></span>
          <div id="loading">
          </div>
          <main className="main-content">
            <HeaderStyle4 />
            <div className="conatiner-fluid content-inner">
              <HorizontalMulti2Router />
            </div>
              <Footer />
          </main>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DualCompact)
