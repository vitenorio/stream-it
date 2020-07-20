import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { getToken } from '../utils/token'
import { unauthRoutes, allRoutes } from './routes'

export const Router = () => {

    const isLoggedIn = getToken()

    const routes = allRoutes // TODO: fix routes

    return (
    <BrowserRouter>
        <Switch>
            {routes.map(route => (
                <Route path={route.path} component={route.component} exact/>
            ))}
        </Switch>
    </BrowserRouter>
    )
}