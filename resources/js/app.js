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

const LoginCheck = () => {
    let returndata = null;
    axios.get("api/user/getauth").then(response => {
        if (response.data.data === false) {
            return <Redirect to="/coleccao"/>;
        } else {
            if (window.location.pathname === "/")
                return <Redirect to="/home"/>;
            else
                return null;
        }
    }).catch(error => {
        console.log(error);
    });
    console.log("returndata" + returndata);
    return returndata;
};


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <LoginCheck/>
                        <Switch>
                            <Route exact path='/home' component={HomeList}/>
                            <Route exact path='/' component={LoginView}/>
                            <Route exact path='/cart' component={CartView}/>
                            <Route exact path='/receita/:id' component={ReceitaViewC}/>
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

