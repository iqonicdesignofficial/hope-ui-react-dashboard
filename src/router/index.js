import React from 'react'


//router
import { Switch,Route } from 'react-router'
//layoutpages
import Index from '../views/index'
import Default from '../layouts/dashboard/default'
import Horizontal from '../layouts/dashboard/horizontal'
import Boxed from '../layouts/dashboard/boxed'
import DualHorizontal from '../layouts/dashboard/dual-horizontal'
import DualCompact from '../layouts/dashboard/dual-compact'
import BoxedFancy from "../layouts/dashboard/boxed-fancy"
import Simple from '../layouts/dashboard/simple'

const IndexRouters = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route  path="/dashboard" component={Default}></Route>
                <Route  path="/boxed" component={Boxed}></Route>
                <Route  path="/horizontal" component={Horizontal}></Route>
                <Route  path="/dual-horizontal" component={DualHorizontal}></Route>
                <Route  path="/dual-compact" component={DualCompact} ></Route>
                <Route  path="/boxedFancy" component={BoxedFancy} ></Route>
                <Route  path="/auth" component={Simple}></Route>
                <Route  path="/errors" component={Simple}></Route>
            </Switch>
        </>
    )
}

export default IndexRouters
