import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <img src='https://www.netlify.com/img/press/logos/logomark.png' className="App-logo" alt="logo" />
        </div>
        <h1>Netlify and React</h1>
      </header>
    </div>
  );
}

export default App;
