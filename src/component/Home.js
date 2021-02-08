import React, {Component} from 'react';
import Header from "./Header";
import Advantages from "./Advantages";
import Services from "./Services";
import Stories from "./Stories";
import Partners from "./Partners";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import MobileDevelopPage from "./MobileDevelopPage";
import UiDesignPage from "./UiDesignPage";
import AutomationPage from "./AutomationPage";
import DeploymentPage from "./DeploymentPage";
import OnlineStorePage from "./OnlineStorePage";
import Team from "./Team";
import Ourachive from "./Ourachive";



class Home extends Component {
    render() {
        return (
            <div>

                <Header/>
                <Advantages/>
                <Services/>
                <Ourachive/>
                <Stories/>
                <Partners/>
                <Team/>
                <Fedback/>
                <ContactUs/>
                <Footer/>
                {/*<MobileDevelopPage/>*/}
                {/*<UiDesignPage/>*/}
                {/*<AutomationPage/>*/}
                {/*<DeploymentPage/>*/}
                {/*<OnlineStorePage/>*/}


            </div>
        );
    }
}

export default Home;
