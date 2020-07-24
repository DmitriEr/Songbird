import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Question from './Components/Question';
import Answer from './Components/Answer';
import Description from './Components/Description';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Question />
      <Answer />
      <Description />
    </div>
  );
}

export default App;

{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}