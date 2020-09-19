import React from "react"
import {Switch,Route} from 'react-router-dom'

import Beranda from './beranda.js';
import Galery from './galery.js';
import Hari from './hari.js';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route  path="/galery" component={Galery} />
        <Route  path="/hari" component={Hari} />
    </Switch>
)

export default Main;