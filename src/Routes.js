import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import Vehicle from "./views/Vehicle";
import CreateAccount from "./views/CreateAccount";
import Reservation from "./views/Reservation";

// import Welcome from "./views/Welcome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="/vehicle/" element={<Home />} />
        <Route path="/vehicle/:id" element={<Vehicle />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/reservation" element={<Reservation />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
