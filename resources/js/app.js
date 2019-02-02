import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Example from "./components/Example";
import LoginView from "../views/LoginView";


const LoginHeader = () => {
    const location = window.location.pathname;
    if (location != "/login") {
        return <Header />;
    }
    return null;
};


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <LoginHeader/>
                    <Switch>
                        <Route exact path='/login' component={LoginView}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));