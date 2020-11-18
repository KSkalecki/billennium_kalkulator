import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CalculatorMain from './components/CalculatorMain';
import CalculatorSummary from './components/CalculatorSummary';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App ">
          <div className="main-container container">
            <h4 className="heading center" >Kalkulator</h4>
            <div className="all-components-container container">
              <Navbar />
              <form>
                <Redirect exact from="/" to="kalkulator" />
                <Route exact path='/kalkulator' component={CalculatorMain} />
              </form>
              <Route exact path='/podsumowanie' component={CalculatorSummary}  />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}   

export default App;
