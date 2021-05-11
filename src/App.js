import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'projects i have created since starting to learn to code',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Portfolio currentCategory={currentCategory}></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;