import d from "./Data/Bhagavatgita_data.js";
import FlexboxPage from "./components/FlexboxPages.js";
import ReactGA from "react-ga4";
const Bhagavatgita = () => {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
    });
    const title = "பகவத் கீதை";
    const page = FlexboxPage(d, title);
    return page;
};

export default Bhagavatgita;
