import React from 'react';
import './style.css'

import Header from './components/Header';
import Body from './pages/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;