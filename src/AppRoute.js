import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomeContainer from './features/home/container/HomeContainer'
import BurgerContainer from './features/burgers/containers/BurgerContainer'
import AboutContainer from './features/about/container/AboutContainer'
import ContactContainer from './features/contant/container/ContactContainer'
import * as route from './config/route.config'
import Navbar from './features/app/Navbar'
import BurgerInfo from './features/burgers/components/BurgerInfo'


// import BurgerImage from './Images/burgerBackground/bg1.jpg'

const AppRoute = props => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path={`/${route.burgerInfo}`} component={BurgerInfo} />
                <Route path={`/${route.contant}`} component={ContactContainer} />
                <Route path={`/${route.about}`} component={AboutContainer} />
                <Route path={`/${route.burger}`} component={BurgerContainer} />
                <Route path={`${route.home}`} component={HomeContainer} />

            </Switch>
            
        </Router>
    )
}

export default AppRoute

