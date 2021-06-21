import './App.css';
import  React from 'react'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Explore, ExploreSkin, ExploreHair, ExploreAyurveda } from './pages/Explore';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Explore' exact component={Explore} />
        <Route path='/Explore/Skin' exact component={ExploreSkin} />
        <Route path='/Explore/Hair' exact component={ExploreHair} />
        <Route path='/Explore/Ayurveda' exact component={ExploreAyurveda} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
