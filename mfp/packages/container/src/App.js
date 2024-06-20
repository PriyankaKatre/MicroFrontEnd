import React, { lazy, Suspense, useState , useEffect} from "react";
import Progress from "./components/Progress.js";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Header from './components/Header.js'

const MarketingLazy = lazy(() => import("./components/MarketingApp.js"));
const AuthLazy = lazy(() => import("./components/AuthApp.js"));
const DashboardLazy = lazy(() => import("./components/DashboardApp.js"))
import { createBrowserHistory } from 'history';

// This is for to avoid css namespace collesion when useing same framwork in MFE
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory();


export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard')
        }
    },[isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <Header onSignOut={() =>  setIsSignedIn(false)}  isSignedIn={ isSignedIn} />
                <Suspense fallback={ <Progress />}>
                    <Switch>
                        <Route path="/auth" >
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/dashboard" >
                            { !isSignedIn && <Redirect to='/' />}
                            <DashboardLazy />
                        </Route>

                        <Route path="/" component={MarketingLazy}></Route>
                    </Switch>
                </Suspense>
            </StylesProvider>
        </Router>
    )
}
