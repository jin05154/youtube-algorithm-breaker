import React from 'react';
import './style.css'

import Header from './components/Header';
import Body from './components/MainPage';
import Footer from './components/Footer';

function App() {
  console.log(`


  .∧,,∧
  (；ω；) 하얗게
  .∪　∪
  し‐Ｊ
  
  ∧ ,';,';,',.
  ( ; ω,';,',. 불태웠어..
  .∪　∪
  し‐Ｊ
  
  　　,';,',.
  　';',,'...
  .∪';',,'...
  し‐Ｊ
  
  　　';,';,',.
  　,';,',',..
  ';',,'...
  
  
  `);
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;