import {useEffect} from 'react'
import {bindActionCreators} from "redux"

//BoxedRouter
import BoxedRouter from '../../router/boxed-router'

//header
import  HeaderStyle2 from  '../../components/partials/dashboard/HeaderStyle/header-style-2'

//footer
import Footer from '../../components/partials/dashboard/FooterStyle/footer'

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

const Boxed = (props) => {
    useEffect( 
        () => {
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
                
                document.body.classList.add('boxed')
                return() =>{
                    document.body.classList.remove('boxed')
            }
            
        }
    )
    return (
        <div className="boxed-inner">
            <span className="screen-darken"></span>
            <main className="main-content">
                <HeaderStyle2 />
                <div className="conatiner-fluid content-inner">
                    <BoxedRouter />
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Boxed)
