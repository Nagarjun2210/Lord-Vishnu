import { Outlet, Link } from "react-router-dom";
import "./App.css";

const Layout = () => {
    console.log("layout start");
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
            <Link to="/Stories">Stories</Link>
          </li>
          <li>
            <Link to="/Songs">Songs</Link>
          </li>
        </ul>
      </nav>
      <div style={{marginTop: "46px"}}></div>
      <Outlet />
    </>
    )
}; 

export default Layout;