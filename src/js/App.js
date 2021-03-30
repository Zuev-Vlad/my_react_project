console.log('Test success!')
import React from 'react';
import Footer from './HOC/Footer/Footer';
import Header from './HOC/Header/Header';
import SiteBody from './HOC/SiteBody/SiteBody';

import {
    Route,
    Switch,
    BrowserRouter
  } from "react-router-dom"
import SiteHeader from './Components/SiteHeader/SiteHeader';

const App = () => {
    return (
        <BrowserRouter>
        <Header >
            <div className="container">
                <SiteHeader/>
            </div>
        </Header>
        <SiteBody >
        
            <Switch>
                <Route history={history} exact path='/'> 
                    <div className="container">
                        Главная
                    </div>
                </Route>
                <Route history={history} path='/info'> 
                    info
                </Route>
            </Switch>
        
        </SiteBody>
        <Footer>
            <div className="container">
                footer
            </div>
        </Footer>
        </BrowserRouter> 
    )
}

export default App;