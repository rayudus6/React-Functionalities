import Count from "./Count";
import Home from "./Home";
import Users from "./Users";
import { Link, Route, Routes } from "react-router-dom";
import Validation from "./Validation";
import Practice from "./Practice";
import CountryNames from "./CountryNames";
import Contact from "./Contact";
import List from "./List";
import DropDown from "./DropDown";
import Products from "./Products";
import ListTask from "./ListTask";
import Accordian from "./Accordian";
import ExcelTableViewer from "./DataXl";
import TcsUser from "./TcsUser";
import TcsUsers from "./TcsUsers";
import PopUpParent from "./PopUpParent";

function App() {
  let name = "Rayudu";
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/count">Count</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Country</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/practice">Practice</Link>
        </li>
        <li>
          <Link to="/names">Country Names</Link>
        </li>
        <li>
          <Link to="/dropdown">Holidays</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/task">Task</Link>
        </li>
        <li>
          <Link to="/accordian">Accordian</Link>
        </li>
        <li>
          <Link to="/excel">Excel</Link>
        </li>
        <li>
          <Link to="/userDetails">TCS</Link>
        </li>
        <li>
          <Link to="/popup">PopUp</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count name={name} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Validation />} />
        <Route path="/list" element={<List />} />
        <Route path="/names" element={<CountryNames />} />
        <Route path="/practice" element={<Practice name={name} age={23} />} />
        <Route path="/dropdown" element={<DropDown />} />
        <Route path="/products" element={<Products />} />
        <Route path="/task" element={<ListTask />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/excel" element={<ExcelTableViewer />} />
        <Route path="/userDetails" element={<TcsUsers />} />
        <Route path="/popup" element={<PopUpParent />} />
        <Route path="/userDetails/:id" element={<TcsUser />} />
      </Routes>
    </div>
  );
}

export default App;
