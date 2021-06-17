
import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
//import { browserHistory } from "react-router";
import pokemons from './db.json';
import CaughtPokemonsContext from "./contexts/caught-pokemons";
import ChosenCardContext from "./contexts/chosen-card";
import ChosenTabContext from "./contexts/chosen-tab";
import ChosenPageContext from "./contexts/chosen-page";

import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Tabs from "./components/tabs";



import HomePage from "./pages/index";
import CaughtPage from "./pages/caught";
import CardPage from "./pages/card";



console.log('this is caught context on high level! ', CaughtPokemonsContext);
console.log('this is card-id context! ', ChosenCardContext);
console.log('this is tab context! ', ChosenTabContext);
console.log('this is page context on high level! ', ChosenPageContext);


const parsedPokemons = pokemons.pokemons;

//console.log('parsed on top level: ', parsedPokemons);

const customHistory = createBrowserHistory();

const poookemons = [
  {
    name: "bulbasaur",
    id: 1
  },
  {
    name: "ivysaur",
    id: 2
  },
  {
    name: "venusaur",
    id: 3
  }
];

const c = [
  {
    isCaught: "12.03.1999",
    id: 1
  },
  {
    isCaught: "12.03.1999",
    id: 2
  },
  {
    isCaught: "12.03.1999",
    id: 3
  }
];

const p = 2;

const t = 'all';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: parsedPokemons,
      //caught: c,
      //chosenPage: p,
      caught: CaughtPokemonsContext,
      chosenPage: ChosenPageContext,
      chosenTab: t,
    };
  }

  render() {
    return (
      <>
        <CaughtPokemonsContext.Provider value={this.state.caught}>
        <ChosenPageContext.Provider value={this.state.chosenPage}>

        <Header />
        <Main>
          
          <Router history={customHistory}>
          
          <Tabs>
            <NavLink to="/home" activeClassName="tab-active" className="tab">Все покемоны</NavLink>
            <NavLink to="/caught" activeClassName="tab-active" className="tab">Пойманные</NavLink>
          </Tabs>
          
          <Switch>
            <Route path="/caught">
              <CaughtPage data={this.state.data} caught={this.state.caught} chosenPage={this.state.chosenPage} chosenTab={"caught-only"} />
            </Route>
            <Route path="/home">
              <HomePage data={this.state.data} caught={this.state.caught} chosenPage={this.state.chosenPage} chosenTab="all" />
            </Route>
            <Route exact path="/">
              <HomePage data={this.state.data} caught={this.state.caught} chosenPage={this.state.chosenPage} chosenTab="all" />
            </Route>
            <Route path="/card">
              <CardPage data={this.state.data} caught={this.state.caught} chosenPage={this.state.chosenPage} chosenTab={this.state.chosenTab} chosenId="2" />
            </Route>
          </Switch>
    
          </Router>
        
        </Main> 

        </ChosenPageContext.Provider>
        </CaughtPokemonsContext.Provider>   
      </>
    );
  }
}

export default App;
