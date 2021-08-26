import { Switch, Route } from 'react-router-dom';

import { Navigation } from './components/layouts/Navigation';

import './assets/scss/style.scss';

function App() {
  return (
    <section className="app">
      <Switch>
        <Route exact path="/">
          <header className="app-header">
            <h1>hello world</h1>
          </header>

          <Navigation />
        </Route>

        <Route exact path="/ui-kit">
          <h1>ui kit</h1>
        </Route>
      </Switch>
    </section>
  );
}

export default App;
