import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

import SignIn from './components/Signin.js';
import SignUp from './components/Signup.js'


const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({ history, onSignIn}) => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/signin">
                        <SignIn onSignIn={ onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    )
}
