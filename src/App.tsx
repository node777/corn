import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/_styles.scss'

const Home = lazy(() => import('./views/Home'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...loading</div>}>
        <Switch>
          <Route path={['','/home']}>
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
