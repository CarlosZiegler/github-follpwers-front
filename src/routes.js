import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import './index.css'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/user/:username" exact component={Details} />
        </BrowserRouter>
    );
}