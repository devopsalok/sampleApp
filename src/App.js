import React from 'react';
import logo from './logo.svg';
import Header from './component/Header';
import SideBar from './component/Sidebar';
import Content from './component/Content';
import './App.css';

function App() {
  return (
    <div className="App">
    <div>
       <Header />
       <SideBar />
       <Content />
     </div>
    </div>
  );
}

export default App;
