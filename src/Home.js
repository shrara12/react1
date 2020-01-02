

import React, { Component } from 'react';
import Categories from './Component/Categories';
import Latesthits from './Component/graphs/Latesthits';
import Perfomance from './Component/graphs/perfomance';
import StorageInformation from './Component/graphs/storageInformtion';
import Notification from  './Component/Notification/notification';
import Order from './Component/Order/order';
import './css/bootstrap.min.css';
import './css/fontawesome.min.css';
import './css/styles.css';


import F01 from './img/f-01.jpg';
import F02 from './img/f-02.jpg';
import F03 from './img/f-03.jpg';


class Home extends Component {
 
    render() {
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-white mt-5 mb-5">Welcome back, <b>Admin</b></p>
                </div>
            </div>
          
          
            <div className="row tm-content-row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block">
                        <h2 className="tm-block-title">Latest Hits</h2>
                        <Latesthits/>
                     </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block">
                        <h2 className="tm-block-title">Performance</h2>
                        <Perfomance/>
                       
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block tm-block-taller">
                        <h2 className="tm-block-title">Storage Information</h2>
                        <StorageInformation/>
                        <div id="pieChartContainer">
                            <canvas id="pieChart" className="chartjs-render-monitor" width="200" height="200"></canvas>
                        </div>                        
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
                        <h2 className="tm-block-title">Notification List</h2>
                       
                        <div className="tm-notification-items">                                      
                        <Notification/>

                        
                        </div>
                    </div>
                </div>
                <div className="col-12 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
                        <h2 className="tm-block-title">Orders List</h2>
                            <Order/>

                    </div>
                </div>
            </div>
        </div>

);
};
};
export default Home ;