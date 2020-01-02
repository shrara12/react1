

import React, { Component } from 'react';
 
import { BrowserRouter, Route, Switch,LinkProps,Link } from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/fontawesome.min.css';
import './css/styles.css';
import Accounts from './Component/Accounts';
import AdProduct from './Component/AdProduct';
import EdProduct from './Component/EdProduct';
import Login from './Component/Login';
import Products from './Component/Products';
class Navbar extends Component {

 
    render() {
    return (
        <div className="" id="home">
 
<nav className="navbar navbar-expand-xl">
    <div className="container h-100">
        <a className="navbar-brand" href="/">
            <h1 className="tm-site-title mb-0">Product Admin</h1>
        </a>
        <button className="navbar-toggler ml-auto mr-0" 
        type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars tm-nav-icon"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto h-100">
                <li className="nav-item">
                    <a className="nav-link active"  href="#">
                        <i className="fas fa-tachometer-alt"></i>
                        Dashboard
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item dropdown">

                    <a className="nav-link dropdown-toggle"
                     href="#" id="navbarDropdown"
                      role="button" 
                      data-toggle="dropdown"
                        aria-haspopup="true" 
                        aria-expanded="false">
                        <i className="far fa-file-alt"></i>
                        <span>
                            Reports <i className="fas fa-angle-down"></i>
                        </span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Daily Report</a>
                        <a className="dropdown-item" href="#">Weekly Report</a>
                        <a className="dropdown-item" href="#">Yearly Report</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Products">
                        <i className="fas fa-shopping-cart">{Products}</i>
                        Products
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Products">
                        <i className="fas fa-shopping-cart">{Products}</i>
                        Products
                    </a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="Accounts ">               
                <i className="far fa-user">{ }</i>  
                         Accounts     
                 </a>                     
                </li>
                <li className="nav-item">
                <a className="nav-link" href="Login ">               
                <i className="far fa-login">{Login}</i>  
                         Login     
                 </a>                     
                </li>
               
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" 
                    href="#" 
                    id="navbarDropdown" 
                    role="button" 
                    data-toggle="dropdown"
                        aria-haspopup="true"
                         aria-expanded="false">
                        <i className="fas fa-cog"></i>
                        <span>
                            Settings <i className="fas fa-angle-down"></i>
                        </span>
                    </a>
                    <div className="dropdown-menu" 
                    aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Billing</a>
                        <a className="dropdown-item" href="#">Customize</a>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link d-block" 
                    href="#.">
                        Admin, <b>Logout</b>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
   
    );
};
};
export default Navbar ;