import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact'

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'projects i have created since starting to learn to code',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;