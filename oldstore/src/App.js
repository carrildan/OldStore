import './App.css';
import TopNav from './components/TopNav/TopNav';
import CatNav from './components/CatNav/CatNav';

function App() {
  return (
    <div className="App">
      {/* ------------------------------------------- HEADER ------------------------------------------- */}
      <TopNav/>
      <CatNav/>
      {/* ------------------------------------------- HEADER END ------------------------------------------- */}
      
    </div>
  );
}

export default App;
