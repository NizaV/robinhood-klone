import './css/App.css';
import Header from './Header';
import Body from './Body'
function App() {
  return (
    <div className="App">
      <div className="app_header">
        <Header />

      </div>
      <div className="app_body">
        <div className="app__container">
        <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
