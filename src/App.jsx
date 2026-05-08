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

import Header from './Header';
import { CORE_CONCEPTS } from './data';
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default App;
