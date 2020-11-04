import React, { Component } from 'react';


class Sidebar extends Component {
  render() {
    return (
        <div className="navbar-wrapper visible-xs visible-sm">
            <div className="navbar navbar-default sub-navbar">
                <div className="navbar-header">
                    <button className="navbar-toggle" data-target="#sub-navbar" data-toggle="collapse" type="button">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <span className="title"
                          style={{font_size: "21px", font_weight: "bold", padding_top: "10px", display: "inline-block", padding_left: "14px",}}></span>
                </div>
                <div className="navbar-collapse collapse" id="sub-navbar">
                    <ul className="nav navbar-nav profile-nav">
                        <li className="active">
                            <a data-toggle="pill" href="https://www.betburger.com/profile#main">Dashboard</a>
                        </li>
                        <li>
                            <a data-toggle="pill" href="https://www.betburger.com/profile#bookmakers">Bookmakers</a>
                        </li>
                        <li>
                            <a data-toggle="pill" href="https://www.betburger.com/profile#exchanges">Exchanges</a>
                        </li>
                        <li>
                            <a data-toggle="pill" href="https://www.betburger.com/profile#currencies">Currencies</a>
                        </li>
                        <li className="multifilter">
                            <a data-toggle="pill" href="https://www.betburger.com/profile#multi_filters">
                                Multifilters
                            </a>
                        </li>
                        <li>
                            <a data-toggle="pill" href="https://www.betburger.com/profile#payments">Payments</a>
                        </li>
                        <li>
                            <a data-toggle="pill" href="https://www.betburger.com/profile#accounting">Accounting</a>
                        </li>
                        <li>
                            <a data-toggle="pill" href="https://www.betburger.com/profile#settings_tab">Settings</a>
                        </li>
                        <li>
                            <a data-toggle="pill" href="https://www.betburger.com/profile#api_tab">API</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Sidebar;
