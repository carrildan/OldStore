import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* ------------------------------------------- HEADER ------------------------------------------- */}
      <div className="header bg-dark">
        <div className="row">
          <div className="brand my-1">
            <h1>Old Store</h1>
          </div>

          <div className="inp-container p-0 my-4 w-50 h-25 bg-white">
            <div className="dropdown m-0 p-0">
              <select className="select-btn w-10 p-0 m-0">
                <option> Men </option>
                <option> Women </option>
                <option> Boys </option>
                <option> Girls </option>
              </select>
            </div>
            <input className="form-control" placeholder="Search" />
            <button> <i className="fa fa-search"/> </button>
          </div>
          
        </div>
      </div>
      {/* ------------------------------------------- HEADER END ------------------------------------------- */}
    </div>
  );
}

export default App;
