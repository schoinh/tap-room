import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from "./Splash";
import Menu from "./Menu";
import EmployeeView from "./EmployeeView";
import Error404 from "./Error404";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/menu" component={Menu} />
        <Route path="/employees" component={EmployeeView} />
        {/* <Route path="/add-keg" component={Form} />
        <Route path="/edit-keg" component={Form} /> */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;