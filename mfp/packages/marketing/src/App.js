import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core'

import Landing from './components/Landing.js';
import Pricing from './components/Pricing.js'


export default () => {
    return (
        <>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing}></Route>
                        <Route path="/" component={Landing}></Route>
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </>
    )
}
