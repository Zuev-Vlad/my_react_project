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
import { PageCanvas } from './Pages/PageCanvas/PageCanvas';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import Popap from './Components/Popap/Popap';



const Store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


const App = () => {
    return (
        <Provider store={Store}>
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
                <Route history={history} path='/canvas'> 
                    <PageCanvas/>
                </Route>
            </Switch>
        
        </SiteBody>
        <Footer>
            <div className="container">
                footer
            </div>
        </Footer>
        </BrowserRouter> 
        <Popap/>
        </Provider>
    )
}

export default App;