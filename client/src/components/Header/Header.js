import React from 'react'

const Header = () => 
<div>
  <div className='container'>
    <nav className="navbar navbar-inverse navbar-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="collapsed navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" /> <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="/" className="navbar-brand">
             NYT React Edition
          </a>
          <ul className="nav navbar-nav">
            <li role="presentation" className="active"><a href="/api/search">Search</a></li>
            <li role="presentation"><a href="/api/saved">Saved Articles</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div className='container'>
    <div className="jumbotron">
       <h1 className='text-center'>
        New York Times React Edition
       </h1>
    </div>
  </div>
</div>;

export default Header;
