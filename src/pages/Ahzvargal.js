import d from "./Data/azhvargal_data.js";
import FlexboxPage from "./components/FlexboxPages.js";
import ReactGA from "react-ga4";
const Ahzvargal = () => {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
    });
    const title = "ஆழ்வார்கள்";
    const page = FlexboxPage(d, title);
    return page;
};

export default Ahzvargal;
