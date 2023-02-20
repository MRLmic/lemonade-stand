import Logo from './img/Logo.svg';
import './App.css';
import ListContainer from './components/ListContainer.js'
import TotalBox from './components/TotalBox.js'

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} className="App-logo" alt="logo" />
      </header>
      <ListContainer></ListContainer>
      <TotalBox></TotalBox>
    </div>
  );
}

export default App;
