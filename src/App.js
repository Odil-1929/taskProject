import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./component/Header";
import Web from "./component/Web";
import Home from "./component/Home";
import Services from "./component/Services";
import {Link} from "react-router-dom";
import TestingPage from "./component/TestingPage";
import WebDevelopment from "./component/WebDevelopment";
import MobileDevelopPage from "./component/MobileDevelopPage";
import UiDesignPage from "./component/UiDesignPage";
import AutomationPage from "./component/AutomationPage";
import DeploymentPage from "./component/DeploymentPage";
import OnlineStorePage from "./component/OnlineStorePage";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";


function App() {
    return (
        <div>






            <BrowserRouter>


                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/webDevelop' component={WebDevelopment}/>
                    <Route exact path='/testing' component={TestingPage}/>
                    <Route exact path='/mobileDev' component={MobileDevelopPage}/>
                    <Route exact path='/uiDesign' component={UiDesignPage}/>
                    <Route exact path='/automation' component={AutomationPage}/>
                    <Route exact path='/deployment' component={DeploymentPage}/>
                    <Route exact path='/onlineStore' component={OnlineStorePage}/>
                    <Route exact path='/contacts' component={ContactUs}/>
                    <Route exact path='/about' component={Footer}/>
                    <Route exact path='/services' component={Services}/>




                </Switch>

            </BrowserRouter>



        </div>
    );
}

export default App;