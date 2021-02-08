import React, {Component} from 'react';
import DeploymentNavbar from "./DeploymentNavbar";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import DeploymentServices from "./DeploymentServices";

class DeploymentPage extends Component {
    render() {
        return (
            <div>
                <DeploymentNavbar/>
                <Fedback/>
                <DeploymentServices/>
                <ContactUs/>
                <Footer/>
            </div>
        );
    }
}

export default DeploymentPage;