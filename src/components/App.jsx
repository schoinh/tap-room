import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from "./Splash";
import Menu from "./Menu";
import EmployeeView from "./EmployeeView";
import Form from "./Form";
import Error404 from "./Error404";
import { v4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: "Pineapple Turmeric",
          brand: "Humm Kombucha",
          flavor: "fruity",
          price: 5,
          description: "Exceptional juiciness and a vibrant tropical flavor that balances the tastes of sweet and tart mixed with the mildly aromatic turmeric.",
          pintsLeft: 124,
          id: "dummyKey"
        }
      ],
      selectedKeg: null
    };
    this.handleNewKegCreation = this.handleNewKegCreation.bind(this);
  }

  handleNewKegCreation(newKeg) {
    const newKegId = v4();
    const newMasterKegList = this.state.masterKegList.slice();
    newKeg.id = newKegId;
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/menu" render={() => <Menu kombuchaList={this.state.masterKegList} />} />
          <Route path="/employees" component={EmployeeView} />
          <Route path="/add-keg" render={() => <Form onNewKegCreation={this.handleNewKegCreation} />} />
          <Route path="/edit-keg" component={Form} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;