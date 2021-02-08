import React, {Component} from 'react';
import MobileDevelopNavbar from "./MobileDevelopNavbar";
import '../component/main.css'
import Footer from "./Footer";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import MobDevelopServices from "./MobDevelopServices";


class MobileDevelopPage extends Component {
    render() {
        return (
            <div>
                <MobileDevelopNavbar/>
                <Fedback/>
                <MobDevelopServices/>
                <ContactUs/>
                <Footer/>
            </div>
        );
    }
}

export default MobileDevelopPage;