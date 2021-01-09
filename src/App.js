import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import OnlineStore from './components/onlineStore/OnlineStore';
import Products from './components/products/ProductsContainer';
import Home from './components/home/Home';
import QuizContainer from './components/quiz/QuizContainer';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/quiz" exact component={QuizContainer}></Route>
          {/* <Route path="/online-store" exact component={OnlineStore}></Route>
          <Route path="/products" exact component={Products}></Route> */}
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
