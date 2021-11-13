const initstate={
    scheme: 'light',
    colorcustomizer: 'default',
    colorinfo: '#4bc7d2',
    colorprimary:'#3a57e8',
    schemeDir: 'ltr',
    sidebarcolor: 'white',
    sidebarType: {mini:"", hover:"", boxed:""} ,
    sidebarActiveStyle: 'roundedAllSide',
    navbarstyle : 'sticky'

    
}

// Action/Dispatch
// Action for schememode
export const ModeAction = (value) => {
     sessionStorage.setItem('color-mode', value)
    if (value === 'dark') {
        document.body.classList.remove('auto')
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    }
    else if (value === 'light'){
        document.body.classList.remove('dark')
        document.body.classList.remove('auto')
        document.body.classList.add('light')
    }
     else {
        document.body.classList.remove('dark')
        document.body.classList.remove('light')
        document.body.classList.add('auto')
    }
    
    return {type: 'DARKMODE', value}
}

// Action for Colorcustomizer
export const ColorCustomizerAction = (value, info, primary) => {

    sessionStorage.setItem('color-customizer-mode', value)
    sessionStorage.setItem('colorcustominfo-mode', info)
    sessionStorage.setItem('colorcustomprimary-mode', primary)
    if( value === 'theme-color-blue')
    {
        document.body.classList.add('theme-color-blue')
        document.body.classList.remove('theme-color-gray')
        document.body.classList.remove('theme-color-red')
        document.body.classList.remove('theme-color-yellow')
        document.body.classList.remove('theme-color-pink')
    }
    else if(value === 'theme-color-gray')
    {
        document.body.classList.remove('theme-color-blue')
        document.body.classList.add('theme-color-gray')
        document.body.classList.remove('theme-color-red')
        document.body.classList.remove('theme-color-yellow')
        document.body.classList.remove('theme-color-pink')
    }
    else if(value === 'theme-color-red')
    {
        document.body.classList.add('theme-color-red')
        document.body.classList.remove('theme-color-gray')
        document.body.classList.remove('theme-color-blue')
        document.body.classList.remove('theme-color-yellow')
        document.body.classList.remove('theme-color-pink')
    }
    else if(value === 'theme-color-yellow')
    {
        document.body.classList.add('theme-color-yellow')
        document.body.classList.remove('theme-color-gray')
        document.body.classList.remove('theme-color-red')
        document.body.classList.remove('theme-color-blue')
        document.body.classList.remove('theme-color-pink')
    }
    else if(value === 'theme-color-pink')
    {
        document.body.classList.add('theme-color-pink')
        document.body.classList.remove('theme-color-gray')
        document.body.classList.remove('theme-color-red')
        document.body.classList.remove('theme-color-yellow')
        document.body.classList.remove('theme-color-blue')
    }
    else{
        document.body.classList.remove('theme-color-pink')
        document.body.classList.remove('theme-color-gray')
        document.body.classList.remove('theme-color-red')
        document.body.classList.remove('theme-color-yellow')
        document.body.classList.remove('theme-color-blue')
    }
    return {type: 'COLORCUSTOMIZER', value, info, primary }
}
//Action for SchemeDirection
export const SchemeDirAction = (value) => {
    sessionStorage.setItem('rtl-mode', value)
    if (value === 'rtl') {
        document.body.parentElement.setAttribute('dir','rtl')
    }
    
     else {
        document.body.parentElement.setAttribute('dir','ltr')
     }
    
    return {type: 'SCHEMEDIRMODE', value}
}

// action for sidebarcolor
export const SidebarColorAction = (value) => {
    sessionStorage.setItem('sidebarcolor-mode', value)
    if (value === 'dark') {
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-color')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-white')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-transparent')
        document.getElementsByTagName('ASIDE')[0].classList.add('sidebar-dark')
    }
    else if (value === 'color'){
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-dark')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-white')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-transparent')
        document.getElementsByTagName('ASIDE')[0].classList.add('sidebar-color')
    }
    else if (value === 'transparent'){
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-color')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-white')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-dark')
        document.getElementsByTagName('ASIDE')[0].classList.add('sidebar-transparent')
    }
    else{
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-dark')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-color')
        document.getElementsByTagName('ASIDE')[0].classList.remove('sidebar-transparent')
        document.getElementsByTagName('ASIDE')[0].classList.add('sidebar-white')
    }
    return {type: 'SIDEBARCOLORMODE', value}
    }

// Action for sidebartypeaction
export const SidebarminiTypeAction = (value) => {
    sessionStorage.setItem("sidebarminitype-mode", value)
    return {type: 'SIDEBARMINITYPEMODE', value}
}
export const SidebarhoverTypeAction = (value) => {
    sessionStorage.setItem("sidebarhovertype-mode", value)
    return {type: 'SIDEBARHOVERTYPEMODE', value}
}
export const SidebarboxedTypeAction = (value) => {
    sessionStorage.setItem("sidebarboxedtype-mode", value)
    return {type: 'SIDEBARBOXEDTYPEMODE', value}
}
// action for sidebaractivestyle

export const SidebarActiveStyleAction = (value) => {
    sessionStorage.setItem('sidebarstyle-mode', value)
    if (value === 'roundedOneSide') {
        document.getElementsByTagName('ASIDE')[0].classList.add('navs-rounded')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded-all')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill-all')
            
    }
    else if (value === 'roundedAllSide'){
        document.getElementsByTagName('ASIDE')[0].classList.add('navs-rounded-all')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill-all')
    }
    else if (value === 'pill'){
        document.getElementsByTagName('ASIDE')[0].classList.add('navs-pill')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded-all')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill-all')
    }
    else{
        document.getElementsByTagName('ASIDE')[0].classList.add('navs-pill-all')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-pill')
        document.getElementsByTagName('ASIDE')[0].classList.remove('navs-rounded-all')

    }
    return {type: 'SIDEBARACTIVESTYLEMODE', value}

    }

   
// action for navbarstyleaction 

export const NavbarstyleAction = (value) => {
    sessionStorage.setItem('Navbarstyle-mode', value)
    if (value === 'glass') {
        document.getElementsByTagName('NAV')[0].classList.add('nav-glass')
        document.getElementsByClassName('iq-navbar-header')[0].classList.remove('navs-bg-color')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-transparent')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-sticky')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-bg-color')
    }
    else if (value === 'color') {
        document.getElementsByTagName('NAV')[0].classList.add('navs-bg-color')
        document.getElementsByClassName('iq-navbar-header')[0].classList.add('navs-bg-color')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-transparent')
        document.getElementsByTagName('NAV')[0].classList.remove('nav-glass')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-sticky')
    }
    else if (value === 'transparent') {
        document.getElementsByTagName('NAV')[0].classList.add('navs-transparent')
        document.getElementsByClassName('iq-navbar-header')[0].classList.remove('navs-bg-color')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-bg-color')
        document.getElementsByTagName('NAV')[0].classList.remove('nav-glass')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-sticky')
    }
    else{
        document.getElementsByTagName('NAV')[0].classList.add('navs-sticky')
        document.getElementsByClassName('iq-navbar-header')[0].classList.remove('navs-bg-color')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-transparent')
        document.getElementsByTagName('NAV')[0].classList.remove('nav-glass')
        document.getElementsByTagName('NAV')[0].classList.remove('navs-bg-color')
    }

    return {type: 'NAVBARSTYLEMODE', value}
}

// Mutations/Reducer
const Mode = (state = initstate,action) =>{
    switch (action.type) {
        case 'DARKMODE':
            return Object.assign({}, state, {
                scheme: action.value
            })
        case 'COLORCUSTOMIZER':
            return Object.assign({}, state, {
                colorcustomizer: action.value,
                colorinfo: action.info,
                colorprimary: action.primary,
            })
        case 'SCHEMEDIRMODE':
            return Object.assign({}, state, {
                schemeDir: action.value
            })
        case 'SIDEBARCOLORMODE':
            return Object.assign({}, state, {
                sidebarcolor: action.value
            })
        case 'SIDEBARMINITYPEMODE':
            return Object.assign({}, state, {
                sidebarType: {mini:action.value}
               
            })
        case 'SIDEBARHOVERTYPEMODE':
            return Object.assign({}, state, {
                sidebarType: {hover:action.value}
                
            })
        case 'SIDEBARBOXEDTYPEMODE':
            return Object.assign({}, state, {
                sidebarType: {boxed:action.value}
                
            })
        case 'SIDEBARACTIVESTYLEMODE':
            return Object.assign({}, state, {
                sidebarActiveStyle: action.value
                
            })
        case 'NAVBARSTYLEMODE':
            return Object.assign({}, state, {
                navbarstyle: action.value
                
            })
        default:
            return state
    }
}
// Selectores
export const getDarkMode = (state) => state.mode.scheme;
export const getcustomizerMode = (state) => state.mode.colorcustomizer;
export const getcustomizerinfoMode = (state) => state.mode.colorinfo;
export const getcustomizerprimaryMode = (state) => state.mode.colorprimary;
export const getDirMode = (state) => state.mode.schemeDir;
export const getSidebarColorMode = (state) => state.mode.sidebarcolor;
export const getSidebarTypeMode = (state) => state.mode.sidebarType;
export const getSidebarActiveMode = (state) => state.mode.sidebarActiveStyle;
export const getNavbarStyleMode = (state) => state.mode.navbarstyle;

export default Mode