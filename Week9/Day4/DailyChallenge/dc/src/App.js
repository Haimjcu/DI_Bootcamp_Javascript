import './App.css';
import Component from './components/Component';

function App() {
  return (
    <div style={{backgroundColor: 'lightblue', padding: "50px"}}>
      <Component icon="icons8-backhand.png" title="Points" number="3,000" />
      <Component icon="icons8-lightning-bolt-16.png" title="Lightnings" number="6,540" />
      <Component icon="icons8-promise-30.png" title="Shakas" number="337,010" />
      <Component icon="icons8-diamond-16.png" title="Diamonds" number="98,661" />
    </div>
  );
}

export default App;
