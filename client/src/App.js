import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home-page';
import DisneyVillainous from './pages/disneyvill-page';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Home} />
          <Route exact path="/disneyvillainous" component={DisneyVillainous} />
        </header>
      </div>
    </Router>
  );
}

export default App;
