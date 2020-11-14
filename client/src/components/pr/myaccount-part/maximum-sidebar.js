import React, { Component } from 'react';


class MaxmumSidebar extends Component {
  render() {
    return (
        <div className="col-lg-2 col-md-3 col-sm-10 col-xs-12" id="sidebar1">
            <div className="bs-docs-sidebar sidebar-content hidden-xs hidden-sm">
                <ul className="nav nav-list sidebar bs-docs-sidenav affix-top">
                    <li className="active">
                        <a className="dashboard" data-toggle="pill" 
                        href="https://www.betburger.com/profile#main">Painel</a>
                    </li>
                    <li>
                        <a className="bookmakers" data-toggle="pill"
                           href="https://www.betburger.com/profile#bookmakers">Casas de apostas</a>
                    </li>
                    <li>
                        <a className="exchanges" data-toggle="pill"
                           href="https://www.betburger.com/profile#exchanges">Bolsas</a>
                    </li>
                    <li>
                        <a className="currencies" data-toggle="pill"
                           href="https://www.betburger.com/profile#currencies">Moedas</a>
                    </li>
                    <li className="multifilter">
                        <a className="multi" data-toggle="pill"
                           href="https://www.betburger.com/profile#multi_filters">
                            Vários filtros
                        </a>
                    </li>
                    <li>
                        <a className="payments" data-toggle="pill"
                           href="https://www.betburger.com/profile#payments">Pagamentos</a>
                    </li>
                    <li>
                        <a className="accounting" data-toggle="pill"
                           href="https://www.betburger.com/profile#accounting">Contabilidade</a>
                    </li>
                    <li>
                        <a className="password" data-toggle="pill"
                           href="https://www.betburger.com/profile#settings_tab">Definições</a>
                    </li>
                    <li>
                        <a className="api" data-toggle="pill"
                           href="https://www.betburger.com/profile#api_tab">API</a>
                    </li>
                </ul>
                <div className="bitcoin-banners-cabinet">
                    <a href="#"><img alt="" className="img-responsive"
                                                                        src="../myaccount/api_banner_bb-fcae8f07cbc06941f551a6f93c1e87357611e89a7adcaeb57a7d8d93c8bb9483.png"/>
                    </a></div>
            </div>
        </div>
    );
  }
}

export default MaxmumSidebar;