import React from "react";
import MarketingApp from "./components/MarketingApp.js";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Header from './components/Header.js'

// This is for to avoid css namespace collesion when useing same framwork in MFE
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <BrowserRouter generateClassName={generateClassName}>
            <StylesProvider>
                <Header />
                <MarketingApp />
            </StylesProvider>
        </BrowserRouter>
    )
}
