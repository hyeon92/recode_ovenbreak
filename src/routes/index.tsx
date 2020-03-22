import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard, Cookies } from 'Pages';

const Root: React.FC = () => (
  // TODO 루트 라우터를 반환한다
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/cookies" exact component={Cookies} />
    </Switch>
  </BrowserRouter>
)

export default Root;