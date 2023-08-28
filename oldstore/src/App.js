import './App.css';
import TopNav from './components/TopNav';
import CatNav from './components/CatNav';
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      {/* ------------------------------------------- HEADER ------------------------------------------- */}
      <TopNav/>
      <CatNav/>
      <MainComponent />
      {/* ------------------------------------------- HEADER END ------------------------------------------- */}
      
    </div>
  );
}

export default App;
