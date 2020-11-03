import React from 'react';
import Router from './Router';
import {Header} from  './components/Header';
import "./assets/reset.css"
import "./assets/style.css"


function App() {
  return (
    <>
      <Header />
      <main className="c-main">
          <Router />
      </main>
    </>
  );
}

export default App;
