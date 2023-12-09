import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">
          <NavLink to="/" className="nav-link">Quotes Central</NavLink>
        </span>
        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/pages/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/app" className="nav-link">App</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/contacts" className="nav-link">Contacts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/main" className="nav-link">Main</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/readme" className="nav-link">Readme</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/admin" className="nav-link">Admin</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;
