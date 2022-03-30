import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';

const Text = styled.p`
  color: red;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>
          Edit <code>src/App.js</code> and save to reload.
        </Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
