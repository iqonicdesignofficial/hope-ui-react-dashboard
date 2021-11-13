import React, {useEffect} from 'react'
import {bindActionCreators} from "redux"
//headerstyle1
import HeaderStyle1  from '../../components/partials/dashboard/HeaderStyle/header-style-1'

//footer
import Footer from '../../components/partials/dashboard/FooterStyle/footer'

//default 
import HorizontalRouter from '../../router/horizontal-router'

// store
import {NavbarstyleAction, getDirMode, getcustomizerMode, getcustomizerprimaryMode, getcustomizerinfoMode,  SchemeDirAction, ColorCustomizerAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode,  getSidebarTypeMode} from '../../store/setting/setting'
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


const Horizontal = (props) => {
    useEffect(() => {
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
      })
    return (
        <>
            <main className="main-content">
                <HeaderStyle1 />
                <div className="conatiner-fluid content-inner">
                   <HorizontalRouter />
                </div>
                <Footer />
            </main>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Horizontal)
