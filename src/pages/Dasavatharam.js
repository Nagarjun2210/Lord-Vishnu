import d from "./Data/Dasavatharam_data.js";
import FlexboxPage from "./components/FlexboxPages.js";
const Dasavatharam = () => {
    const title = "தசாவதாரம்";
    const page = FlexboxPage(d, title);
    return page;
};

export default Dasavatharam;
