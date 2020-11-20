import React, { Component } from 'react';


class MaxmumSidebar extends Component {
  render() {
    return (
        <div className="col-lg-2 col-md-3 col-sm-10 col-xs-12" id="sidebar1">
            <div className="bs-docs-sidebar sidebar-content hidden-xs hidden-sm">
                <ul className="nav nav-list sidebar bs-docs-sidenav affix-top">
                    <li className="active">
                        <a style={{marginRight:'0px'}} className="dashboard" data-toggle="pill" 
                        href="https://www.betburger.com/profile#user_tab">User</a>
                    </li>
                    <li className="multifilter">
                        <a style={{marginRight:'0px'}} className="multi" data-toggle="pill"
                           href="https://www.betburger.com/profile#apitoken_tab">
                            API
                        </a>
                    </li>
                    <li>
                        <a style={{marginRight:'0px'}} className="payments" data-toggle="pill"
                           href="https://www.betburger.com/profile#payment_tab">Payment</a>
                    </li>
                </ul>
                <div className="bitcoin-banners-cabinet">
                    <a href="https://www.betburger.com/prices-api"><img alt="" className="img-responsive"
                        src="./myaccount/api_banner_bb-fcae8f07cbc06941f551a6f93c1e87357611e89a7adcaeb57a7d8d93c8bb9483.png"/>
                    </a></div>
            </div>
        </div>
    );
  }
}

export default MaxmumSidebar;