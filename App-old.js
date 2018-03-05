import React, { Component } from 'react';
import { NavLink,Route,Switch } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";

import CustomScrollbar from './components/CustomScrollbar';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Chart from './components/Chart';
import Chat from './components/Chat';
import NotFound from './components/NotFound';

import throttle from "lodash/throttle";

import logo from "./img/logo.png"
import person1 from "./img/profile-1.png"
import person2 from "./img/profile-2.png"
import person3 from "./img/profile-3.png"
import person4 from "./img/profile-4.png"

import './css/bootstrap-reboot.min.css'
import './css/fontello.css'
import './css/App.css'
import './css/App-queries.css'

/* const reducer = function(state, action){
    
   if(action.type === "INC"){
       return state + action.payload;
   }
    if(action.type === "DEC"){
       return state - action.payload;
   }
    return state;
};

function userReducer(state = {},action){
   if(action.type === "CHANGE_NAME"){
       state = {...state, name:action.payload}
   }
    else if(action.type === "CHANGE_AGE"){
       state = {...state, age:action.payload}
   }
    return state;
}

function tweetsReducer(state = [],action){
    return state;
}

const reducers = combineReducers({
    user: userReducer,
    tweets:tweetsReducer
});

function rand(){
    return Math.round(Math.random() * 50);
}

const store = createStore(reducer, 1, middleware);



const middleware = applyMiddleware();

window.addEventListener("keypress",(e)=>{ 
    if(e.key === "m") store.dispatch({type:"CHANGE_AGE",payload:rand()}); 
    else if(e.key === "n") store.dispatch({type:"CHANGE_NAME",payload:"xD"});
    
    console.log(store.getState());
}); */

class App extends Component {
    constructor(props){
        super(props);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.toggleProfile = this.toggleProfile.bind(this);
        this.toggleNotifications = this.toggleNotifications.bind(this);
        this.unclickElements = this.unclickElements.bind(this);
    }
    componentDidMount(){   
   //     window.addEventListener("scroll", throttle(this.handleScroll, 200));
        
    }
    toggleSearch(){
        this.refs["search-bar"].classList.toggle("search-bar_active");
        this.refs["search-bar__input"].focus();
    }
    toggleNotifications(){
        this.refs["notifications"].classList.toggle("toolbar-card_active");
    }
    toggleProfile(){
         this.refs["account-options"].classList.toggle("toolbar-card_active");
    }
    unclickElements(e){
        if(e.target.parentElement.dataset.closeselements !== "false"){
           this.refs["account-options"].classList.remove("toolbar-card_active");
        this.refs["notifications"].classList.remove("toolbar-card_active");
        this.refs["search-bar"].classList.remove("search-bar_active");
           }
         
    }
  render() {
    return (
        <div className="App" onClickCapture={this.unclickElements}>

    <header className="main-header">
        <h1>
            <NavLink exact to="/virtus">
                <img className="logo" src={logo} alt="" />
            </NavLink>
        </h1>
        <ul className="toolbar">
            <li>
                <button className="btn btn-add">Dodaj</button>
            </li>
            <li>
                <div ref="search-bar" className="search-bar" data-closeselements="false">
                    <input ref="search-bar__input" type="search" placeholder="Szukaj" className="search-bar__input" />
                    <button onClick={this.toggleSearch} className="btn btn-search">
                        <i className="icon icon-search"></i>
                    </button>
                </div>
            </li>
            <li>
                <button onClick={this.toggleNotifications} className="btn btn-notifications">
                    <i className="icon icon-bell badge"></i>
                 </button>
                <div data-closeselements="false" ref="notifications" className="notifications toolbar-card">
                    <h4 className="toolbar-card__header">Powiadomienia</h4>
                    <ul className="toolbar-card__list">
                        <li>
                            <a href="https://google.com">
                                <div className="notifications__message-header">
                                    <img src={person2} alt="Anna Kowalska" />
                                    <h4>Anna Kowalska</h4>
                                    <time>19:43</time>
                                </div>
                                <p className="notifications__message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend est mauris, vel tincidunt dolor hendrerit eu. Sed est ante, ornare ut pellentesque cursus, tincidunt ac quam.</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com">
                                <div className="notifications__message-header">
                                    <img src={person3} alt="Jan Kowalski" />
                                    <h4>Jan Kowalski</h4>
                                    <time>14:58</time>
                                </div>
                                <p className="notifications__message">Duis a elementum elit. Curabitur consequat sem ac pellentesque aliquet. Donec venenatis efficitur nisi vel ullamcorper. Nulla ut est metus. Pellentesque malesuada, metus vel suscipit dictu...</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com">
                                <div className="notifications__message-header">
                                    <img src={person4} alt="Adam Kowalski" />
                                    <h4>Adam Kowalski</h4>
                                    <time>12:27</time>
                                </div>
                                <p className="notifications__message">Fusce scelerisque magna non fermentum consectetur. Nullam enim lorem, porttitor in ipsum at, molestie consectetur metus. Vivamus nec venenatis leo, varius vulputate nunc.</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <button onClick={this.toggleProfile} className="btn btn-profile">
                    <img src={person1} alt="Ty" />
                    <i className="icon icon-down"></i>
                </button>
                <div data-closeselements="false" ref="account-options" className="toolbar-card">
                    <h4 className="toolbar-card__header">jan-kowalski@interia.com</h4>
                    <ul className="toolbar-card__list">
                        <li><a href="https://google.com">Mój profil</a></li>
                        <li><a href="https://google.com">Język</a></li>
                        <li><a href="https://google.com">Ustawienia</a></li>
                        <li><a href="https://google.com">Wyloguj się</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </header>

    <div className="dashboard-container">
        <nav className="site-navigation">
            <ul>
                <li>
                   <NavLink exact activeClassName="site-navigation__item-active" to="/virtus" className="btn site-navigation__item">
                         <i className="icon icon-home"></i>
                    </NavLink>
                </li>
                <li>
                   <NavLink activeClassName="site-navigation__item-active" to="/virtus/projects" className="btn site-navigation__item">
                         <i className="icon icon-menu"></i>
                    </NavLink>
                </li>
                <li>
                   <NavLink activeClassName="site-navigation__item-active" to="/virtus/chart" className="btn site-navigation__item">
                         <i className="icon icon-chart"></i>
                    </NavLink>
                </li>
                <li>
                   <NavLink activeClassName="site-navigation__item-active" to="/virtus/chat" className="btn site-navigation__item">
                         <i className="icon icon-mail badge"></i>
                    </NavLink>
                </li>
                <li>
                   <a href="https://ol-web.github.io" className="btn site-navigation__item">
                         <i className="icon icon-users"></i>
                    </a>
                </li>
            </ul>
        </nav>
               <Switch>
                <Route exact path="/:path(index.html|virtus|)" component={Dashboard}/>
                <Route path="/virtus/projects" component={Projects}/>
                <Route path="/virtus/chart" component={Chart}/>
                <Route path="/virtus/chat" component={Chat}/>
                <Route component={NotFound}/></Switch>
    </div>
</div>
    );
  }
}



export default App;
