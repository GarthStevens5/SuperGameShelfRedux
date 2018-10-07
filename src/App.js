import React, { Component } from 'react'
import Header from './components/Header'
import PlatformList from './components/PlatformList'
import GameShelf from './components/GameShelf'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PlatformList />
        <GameShelf /> 
        <Footer />
      </div>
    )
  }
}

export default App
