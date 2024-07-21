import d from "./Data/Dasavatharam_data.js";
import FlexboxPage from "./components/FlexboxPages.js";
import ReactGA from "react-ga4";
const Dasavatharam = () => {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
    });
    const title = "தசாவதாரம்";
    const page = FlexboxPage(d, title);
    return page;
};

export default Dasavatharam;
