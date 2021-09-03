import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/loader';
import './styles/_styles.scss'

const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Pools = lazy(() => import('./views/Pools'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/farms"><Farms /></Route>
          <Route path="/pools"><Pools /></Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
