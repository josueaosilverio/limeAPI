import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginView from "../views/LoginView";
import Footer from "./components/Footer";
import ReceitaView from "../views/ReceitaView";
import Provider from "react-redux/es/components/Provider";
import {connect} from 'react-redux';
import HomeList from './components/HomeList';
import ColecList from './components/ColecList';
import store from "./store/store";
import RecipeDetail from "./components/RecipeDetail";
import ColecDetail from "./components/ColecDetail";

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
            <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/login' component={LoginView}/>
                        <Route exact path='/lel' component={HomeList}/>
                        <Route exact path='/receita/:id' component={ReceitaView}/>
                        <Route path="/recipe/:id" component={RecipeDetail} />
                        <Route path="/coleccion/:id" component={ColecDetail} />
                    </Switch>

                    <LoginFooter store={store}/>
                </div>

            </BrowserRouter>

            </Provider>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));

