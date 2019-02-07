import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginView from "../views/LoginView";
import Footer from "./components/Footer";
import ReceitaViewC from "../views/ReceitaView";
import ColecsViewC from "../views/ColecsView";
import ColecViewC from "../views/ColecView";

import Provider from "react-redux/es/components/Provider";
import {connect} from 'react-redux';
import HomeList from './components/HomeList';
import store from "./store/store";
import CartView from "../views/CartView";
import axios from "axios";
import Redirect from "react-router-dom/es/Redirect";


const LoginFooter = () => {
    const location = window.location.pathname;
    if (location !== "/") {
        return <Footer/>;
    }
    return null;
};


class App extends Component {

    loginCheck() {
        let returndata = null;
        axios.get("api/user/getauth").then(response => {
            if (response.data.data === false) {
                returndata = false;
            } else {
                returndata = window.location.pathname === "/";
            }
        }).catch(error => {
            console.log(error);
        });
        return returndata;
    };


    render() {

        if (this.loginCheck && window.location.pathname !== "/") {
            return (
                <BrowserRouter>
                    <Switch>
                        <Redirect from={window.location.pathname} to="/"/>
                        {this.forceUpdate()}
                    </Switch>
                </BrowserRouter>
            )
        }

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path='/home' component={HomeList}/>
                            <Route exact={true} path='/' component={LoginView}/>
                            <Route path='/cart' component={CartView}/>
                            <Route path='/receita/:id' component={ReceitaViewC}/>
                            <Route path="/coleccao/:id" component={ColecViewC}/>
                            <Route path="/coleccao" component={ColecsViewC}/>
                        </Switch>

                        <LoginFooter store={store}/>

                    </div>

                </BrowserRouter>

            </Provider>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));

