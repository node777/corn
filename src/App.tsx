import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/loader';
import './styles/_styles.scss'

const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/farms"><Farms /></Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
