import React from "react";
import {Link} from 'react-router-dom';

const Header = () => 
<div className="container">
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
        <Link className="navbar-brand" to='#'>NYT-React</Link>
        <ul className="nav navbar-nav navbar-right">
          <li className={window.location.pathname=== '/search' ? 'active' : ''}>
            <Link to='/search'>Search</Link>
          </li>
          <li className={window.location.pathname === '/saved' ? 'active' : ''}>
            <Link to='/saved'>Saved Articles</Link>
          </li>
        </ul>
    </div>
  </nav>

  <div>
    <div className="jumbotron">
    <h1>NYT-React</h1> 
    <p>New York Times Articles</p> 
    </div>
  </div>

</div>;

export default Header;