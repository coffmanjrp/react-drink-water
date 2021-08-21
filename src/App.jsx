import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>
      <div className="cup">
        <div className="remained">
          <span>2L</span>
          <small>Remained</small>
        </div>
        <div id="percentage" className="percentage"></div>
      </div>
      <p className="text">
        Select how many glasses of water that you have drank
      </p>
      <div className="cups">
        <div className="cup cup-small">
          250
          <br />
          ml
        </div>
        <div className="cup cup-small">
          250
          <br />
          ml
        </div>
        <div className="cup cup-small">
          250
          <br />
          ml
        </div>
        <div className="cup cup-small">
          250
          <br />
          ml
        </div>
        <div className="cup cup-small">
          250
          <br />
          ml
        </div>
        <div className="cup cup-small">
          250
          <br />
          ml
        </div>
        <div className="cup cup-small">
          250
          <br />
          ml
        </div>
        <div className="cup cup-small">
          250
          <br />
          ml
        </div>
      </div>
    </div>
  );
}

export default App;
