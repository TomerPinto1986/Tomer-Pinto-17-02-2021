import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./cmps/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
import HomePage from "./pages/HomePage/HomePage";
import "./assets/styles/global.scss";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route component={Favorites} path="/favorites" />
                    <Route component={HomePage} path="/" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
