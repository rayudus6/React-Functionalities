import Count from './Count';
import Home from './Home';
import Users from './Users';
import {Link,Route,Routes} from 'react-router-dom';
import Contact from './Countries';
import Validation from './Validation';
import List from './List';
import Practice from './Practice';



function App() {
  let name="rayudu";
  return (
    <div>
      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/count">Count</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/contact">Country</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/practice">Practice</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/count" element={<Count name={name}/>} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Validation />} />
        <Route path="/list" element={<List />} />
        <Route path="/practice" element={<Practice name={name}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
