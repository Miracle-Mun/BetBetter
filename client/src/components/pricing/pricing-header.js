import React, { Component } from 'react';

import { connect } from 'react-redux';
import { is_session, userLogoutRequest } from '../../store/actions/usersActions';

class PricingHeader extends Component {
  render() {
    
    return (
        
        <header className="header" style={{display:"block"}}>
            <div className="container">
                <div className="header_inner">
                    <a alt="Arbitrage betting service №1" className="logo" href="/" title="BetBurger">
                        <img alt="BETBURGER"
                             src="../assets/img/logo-ce6adc712c4db3a61a1e47681e6996115423fdb19d67bd685091c4c0682dd385.svg" />
                    </a>
                    <a alt="Arbitrage betting service №1" className="logo-mobile" href="/"title="BetBurger">"
                        <img alt="BETBURGER"
                             src="../assets/img/bb-logo_without_background-7fb9aef50ec414c4da763d9789adcef46655dfc6aa31636824146d7de3d3b8c0.svg" />
                    </a>
                    <div className="navbar-header">
                        <button className="navbar-toggle" data-target=".bs-navbar-collapse" data-toggle="collapse" type="button">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                            <div className="text-center visible-sm visible-xs">
                                <span className="bs-navbar-collapse__toggle glyphicon glyphicon-remove"
                                      data-target=".bs-navbar-collapse" data-toggle="collapse" type="button"></span>
                            </div>
                            <ul className="nav-list-white">
                                <li>
                                    <div className="dropdown profile-dropdown">
                                        <a aria-expanded="false" aria-haspopup="true" className="account dropdown-toggle"
                                           data-hover="dropdown" data-toggle="dropdown" id="arbs_dropdown" type="button">
                                            Surebets
                                        </a>
                                        <ul aria-labelledby="arbs_dropdown" className="dropdown-menu dropdown-profile">
                                            <ul className="user-menu">
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="/pricing">Surebets
                                                        pricing</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="/bet">Surebets
                                                        Prematch</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="/bet">Surebets
                                                        Live</a>
                                                </li>
                                            </ul>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown profile-dropdown">
                                        <a aria-expanded="false" aria-haspopup="true" className="account dropdown-toggle"
                                           data-hover="dropdown" data-toggle="dropdown" id="valuebets_dropdown" type="button">
                                            Valuebets
                                        </a>
                                        <ul aria-labelledby="valuebets_dropdown" className="dropdown-menu dropdown-profile">
                                            <ul className="user-menu">
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="#">Valuebets
                                                        pricing</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="#">Valuebets
                                                        Prematch</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="#">Valuebets
                                                        Live</a>
                                                </li>
                                            </ul>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown profile-dropdown">
                                        <a aria-expanded="false" aria-haspopup="true" className="account dropdown-toggle"
                                           data-hover="dropdown" data-toggle="dropdown" id="api_dropdown" type="button">
                                            API
                                        </a>
                                        <ul aria-labelledby="api_dropdown" className="dropdown-menu dropdown-profile">
                                            <ul className="user-menu">
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="#">API
                                                        pricing</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="#">API
                                                        Prematch</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="#">API
                                                        Live</a>
                                                </li>
                                            </ul>
                                        </ul>
                                    </div>
                                </li>
                                <li className="">
                                    <a href="#">Help Center</a>
                                </li>
                                <li>
                                    <a className="signup  " href="/public">My Account</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="actions">
                        <div className="dropdown language-select drop-lang lang-dropdown">
                                        <span aria-expanded="false" aria-haspopup="true" className="lang-btn dropdown-toggle drop-language-button"
                                              data-toggle="dropdown" id="drop-language" type="button" style={{width:"24px"}}>
                                        <span className="lang-btn__flag">
                                        <img alt="English"
                                             src="../assets/img/en-e9ca840a7fc16c0ce06d06c817a3460df10b970e31cd4697d3f1ecc163fba92b.png" />"
                                        </span>
                                        </span>
                                    <ul aria-labelledby="drop-language" className="dropdown-menu dropdown-language">
                                        <li>
                                            <a className="actual" href="/pricing">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="English"
                                             src="../assets/img/en-e9ca840a7fc16c0ce06d06c817a3460df10b970e31cd4697d3f1ecc163fba92b.png" />
                                        English
                                        </span>
                                                                    </a>
                                                                </li>
                                                                
                                <li>
                                    <a className="notactual" href="/pt_pricing">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="Portugal"
                                             src="../assets/img/pt-b5ca5c7a62ca3b505407218ba69459819c9895cea47d674ef1d3d59777d86a48.png" />"
                                        Portugal
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
        
                        <div className="signin">
                            <a className="btn green-btn " rel="nofollow" data-method="delete"
                               href="javascriptp:void(0)" onClick={()=>this.props.userLogoutRequest()}>Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}
const mapDispatchToProps = {
    userLogoutRequest,
    is_session
}

export default connect(null, mapDispatchToProps)(PricingHeader)
