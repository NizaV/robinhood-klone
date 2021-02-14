import './css/App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="app_header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
          <Stats />
        </div>
      </div>
      <div className="app_footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
