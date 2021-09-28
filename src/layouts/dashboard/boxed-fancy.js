import {useEffect} from 'react'
import {bindActionCreators} from "redux"

//BoxedRouter
import BoxedFancyRouter from '../../router/boxed-fancy-router'

//header
import  HeaderStyle2 from  '../../components/partials/dashboard/HeaderStyle/header-style-2'

//footer
import Footer from '../../components/partials/dashboard/FooterStyle/footer'
import Loader from '../../components/Loader'

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


const BoxedFancy = (props) => {
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
       
      document.body.classList.add('boxed-fancy')
      return() =>{
        document.body.classList.remove('boxed-fancy')
      }
    }
  )
    return (
        <div className="boxed-inner">
          <div id="loading">
            <Loader/>
          </div>
          <span className="screen-darken"></span>
          <main className="main-content">
              <HeaderStyle2 />
            <div className="conatiner-fluid content-inner">
              <BoxedFancyRouter />
            </div>
              <Footer />
          </main>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxedFancy)
