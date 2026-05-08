function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept 
              title = "Components"
              description = "The Core UI Building Block."
              image={componentsImg}
            />
            <CoreConcept 
              title = {CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

<ul>
	{
	CORE_CONCEPTS.map((concept)=><CoreConcept {...concept}/>)
	}
  </ul>
</section>
 <section id="examples">
    <h2>Examples</h2>
      <menu>
        <TabButton> Item 1</TabButton>
        <TabButton> Item 2</TabButton>
        <TabButton> Item 3</TabButton>
      </menu>
</section>

import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcept.jsx';

function App() {
  function handleSelect(){
    console.log("Selected Button", selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>   
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
  <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
  <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
  <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
  <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
</menu>
          Dynamic Content Here
        </section>
      </main>
    </div>
  );
}

function App() {
  useState();
  let tabContent = "Please click a button";
  function handleSelect(selectedButton){
    tabContent = selectedButton;
    console.log(tabContent);
  }
  
function App() {
  let tabContent = "Please click a button";
  function handleSelect(selectedButton){
  //No good calling it inside this sub function
  useState();
  tabContent = selectedButton;
  console.log(tabContent);
  }

export default App;

import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcept.jsx';
import { useState } from 'react';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default App;
