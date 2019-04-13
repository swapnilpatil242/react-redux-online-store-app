import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import OnlineStore from './components/onlineStore/OnlineStore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OnlineStore />
        <Footer />
      </div>
    );
  }
}

export default App;
