import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from "./Splash";
import Menu from "./Menu";
import EmployeeView from "./EmployeeView";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
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
          flavor: "Fruity",
          price: 5,
          description: "Exceptional juiciness and a vibrant tropical flavor that balances the tastes of sweet and tart mixed with the mildly aromatic turmeric.",
          pintsLeft: 124,
          id: "dummyKey"
        }
      ],
      selectedKeg: null
    };
    this.styles = {
      marginTop: "30px"
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
      <div style={this.styles} className="container">
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/menu" render={() => <Menu kombuchaList={this.state.masterKegList} />} />
          <Route path="/employees" render={() => <EmployeeView kegList={this.state.masterKegList} />} />
          <Route path="/add-keg" render={() => <CreateForm onNewKegCreation={this.handleNewKegCreation} />} />
          <Route path="/edit-keg" component={EditForm} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;