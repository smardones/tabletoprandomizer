import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home-page';
import Game from './pages/game-page';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Home} />
          <Route exact path="/game/:id" component={Game} />
        </header>
      </div>
    </Router>
  );
}

export default App;
