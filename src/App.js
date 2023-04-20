import './App.css';
import Swapi from "./services/Swapi";
import banner from "./banner.gif"


function App() {
  return (
    <div className="App">
      <div>
      <h1 className="header">STAR WARS STARSHIPS</h1>
        <img className='banner'src={banner}></img></div>
      <Swapi />
    </div>
  );
}

export default App;
