import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home-page';
import Game from './pages/game-page';
import Header from './components/header-component';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/game/:id" component={Game} />
        </main>
      </div>
    </Router>
  );
}

export default App;
