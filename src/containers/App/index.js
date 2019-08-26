import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from '../../components/Header';
import Secret from '../Secret';
import Group from '../Group';
import { secret, group } from '../../constants/pathname';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path={secret} component={Secret} />
            <Route exact path={group} component={Group} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
