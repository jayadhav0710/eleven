
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className='container'>
    <div className={`App ${theme}`}>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <h1>Overreacted</h1>

<h2>The wet Codebase</h2>
<p>Sunday4th 2020 11 min read</p>
<p>come waste your time with me</p>
</div>

<div>
  <h2>Goodby, Clean Code</h2>
  <p>Friday 22nd 2019 5min read</p>
  <p>Let clean code guide you</p>
</div>

<div>
  <h2>My Decade in Review</h2>
  <p>Saturday 11th, 2018 5min read</p>
  <p>A personal reflection</p>
</div>
<div>
  <h2>What are the React team Principles</h2>
  <p>Thursday 4th 5min read</p>
  </div>
  </div>
  );
}

export default App;
