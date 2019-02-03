import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginView from "../views/LoginView";
import Footer from "./components/Footer";
import ReceitaView from "../views/ReceitaView";


const LoginFooter = () => {
    const location = window.location.pathname;
    if (location !== "/login") {
        return <Footer/>;
    }
    return null;
};


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/login' component={LoginView}/>
                        <Route exact path='/receita/:id' component={ReceitaView}/>
                    </Switch>
                    <LoginFooter/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));