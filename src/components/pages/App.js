import { Switch, Route } from 'react-router-dom';

import '../../assets/scss/style.scss';

import Home from './Home';
import UiKit from './UiKit';

function App() {
  return (
    <section className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/ui-kit">
          <UiKit />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
