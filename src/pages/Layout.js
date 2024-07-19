import { Outlet, Link } from "react-router-dom";
import "./styles/App.css";

const Layout = () => {
    return (
        <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Divyadesangal">108 divya desangal</Link>
          </li>
          <li>
            <Link to="/Ahzvargal">Ahzvargal</Link>
          </li>
          <li>
            <Link to="/Bhagavatgita">Bhagavatgita</Link>
          </li>
          <li>
            <Link to="/Dasavatharam">Dasavatharam</Link>
          </li>
          <li>
            <Link to="/Songs">Songs</Link>
          </li>
        </ul>
      </nav>
      <div className="marginTop"></div>
      <Outlet />
    </>
    )
}; 

export default Layout;