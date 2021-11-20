import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    function searchHandle() {
        document.write("Search was clicked According to the given code by developer");
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
       <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                {props.about_text}
                            </Link>
                
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search Here"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-danger me-1" type="submit" onClick={searchHandle}>
                            {props.search}
                        </button>
                    </form>
                </div>
           </div>
           <div className="d-flex">
               <div className="bg-primary rounded mx-2"style={{height:'30px',width:'35px',cursor:'pointer'}} onClick={()=>{props.radioMode('primary')}}></div>
               <div className="bg-danger rounded mx-2"style={{height:'30px',width:'35px',cursor:'pointer'}} onClick={()=>{props.radioMode('danger')}}></div>
               <div className="bg-warning rounded mx-2"style={{height:'30px',width:'35px',cursor:'pointer'}} onClick={()=>{props.radioMode('warning')}}></div>

           </div>
        <div  className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} me-2`}>
         <input className="form-check-input" type="checkbox" onChange={()=>{props.radioMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
         <label id="radioText" className="form-check-label" htmlFor="flexSwitchCheckDefault">EnableDarkMode</label>
        </div>
        </nav>
    );
}

Navbar.propTypes ={
    title:PropTypes.string.isRequired,
    about_text:PropTypes.string.isRequired,
    search:PropTypes.string.isRequired,
}

Navbar.defaultProps={
    title:'Default Title',
    about_text:'Default About',
    search:'Dummy Search'
}
