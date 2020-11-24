import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Topwirter from "./topwirter";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/topwriter" component={Topwirter}></Route>
      </Switch>
    </div>
  );
}

export default App;
