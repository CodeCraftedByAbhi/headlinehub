import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


  const [navmode, setnavmode] = useState('light')

  const [mode, setMode]=useState('dark')

  const handleMode = () => {
    
      if(mode === 'dark'){
        setMode('light')
        setnavmode('dark')
        document.body.style.backgroundColor= "#495057";
        document.body.style.color= "white";
      }
      else{
        setMode('dark')
        setnavmode ('light')
        document.body.style.backgroundColor= "white";
        document.body.style.color= "black";
      }
  }

  return (
<nav className={`navbar navbar-expand-lg bg-${navmode}`} style={{color: mode === 'dark' ? 'black':'white'}}>
<div className="container-fluid">
  <a className="navbar-brand shadow-sm" href="/" style={{color: mode === 'dark' ? 'black':'white'}}>Headline Hub</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/" style={{color: mode === 'dark' ? 'black':'white'}}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-us" style={{color: mode === 'dark' ? 'black':'white'}}>About Us</Link>
      </li>
      <li className="nav-item dropdown" style={{color: mode === 'dark' ? 'black':'white'}}>
        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: mode === 'dark' ? 'black':'white'}}>
          Category
        </a>
        <ul className="dropdown-menu" style={{color: mode === 'dark' ? 'black':'white'}}>
                <li><Link className="dropdown-item" to="/category/sports" >Sports</Link></li>
                <li><Link className="dropdown-item" to="/category/business" >Business</Link></li>
                <li><Link className="dropdown-item" to="/category/entertainment" >Entertainment</Link></li>
                <li><Link className="dropdown-item" to="/category/general">General</Link></li>
                <li><Link className="dropdown-item" to="/category/health">Health</Link></li>
                <li><Link className="dropdown-item" to="/category/science">Science</Link></li>
                <li><Link className="dropdown-item" to="/category/technology" >Technology</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/" >All News</Link></li>
              </ul>
      </li>
    </ul>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleMode}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable {mode} mode</label>
</div>
  </div>
</div>
</nav>
  );
};

export default Navbar;
