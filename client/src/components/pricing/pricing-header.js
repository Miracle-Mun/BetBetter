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
                    <a alt="Arbitrage betting service №1" className="logo-mobile" href="/"
                       title="BetBurger">
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
                                                    <a className="dropdown-item" href="https://www.betburger.com/prices-valuebets">Valuebets
                                                        pricing</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="https://www.betburger.com/valuebets">Valuebets
                                                        Prematch</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="https://www.betburger.com/valuebets/live">Valuebets
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
                                                    <a className="dropdown-item" href="https://www.betburger.com/prices-api">API
                                                        pricing</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="https://www.betburger.com/api">API
                                                        Prematch</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-item" href="https://www.betburger.com/api/live">API
                                                        Live</a>
                                                </li>
                                            </ul>
                                        </ul>
                                    </div>
                                </li>
                                <li className="">
                                    <a href="https://www.betburger.com/help">Help Center</a>
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
                                             src="../assets/img/en-e9ca840a7fc16c0ce06d06c817a3460df10b970e31cd4697d3f1ecc163fba92b.png" />
                                        </span>
                                        </span>
                                    <ul aria-labelledby="drop-language" className="dropdown-menu dropdown-language">
                                        <li>
                                            <a className="actual" href="https://www.betburger.com/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="English"
                                             src="../assets/img/en-e9ca840a7fc16c0ce06d06c817a3460df10b970e31cd4697d3f1ecc163fba92b.png" />
                                        English
                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="notactual" href="https://www.betburger.com/gb/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="Great Britain"
                                             src="../assets/img/gb-e9ca840a7fc16c0ce06d06c817a3460df10b970e31cd4697d3f1ecc163fba92b.png" />
                                        Great Britain
                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="notactual" href="https://www.betburger.com/es/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="España"
                                             src="../assets/img/es-3368be81f289225c6ca5a6d335f8c055d05b3f2b59a19103f5077af330ae4d55.png" />
                                        España
                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="notactual" href="https://www.betburger.com/co/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="Colombia"
                                             src="../assets/img/co-dcf94d097e684aa60acc5068600748d50bfdbf63a896750adeb5997e04e22db7.png" />
                                        Colombia
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/de/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="Deutschland"
                                             src="../assets/img/de-f7e8aeb27601678f9e8192d62035d82209426ff62740f9702253b49772ac6901.png" />
                                        Deutschland
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/at/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="Österreich"
                                             src="../assets/img/at-14402110ba1c4368bd35f6561dc8c4aa37ec59ab752e088f528b539dd7874f69.png" />
                                        Österreich
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/gr/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="Ελλάδα"
                                             src="../assets/img/gr-5997a84b33801a2d09679a78e48aac070ae9d4ccd682f8d44d021d6bc135557b.png" />
                                        Ελλάδα
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/it/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="Italy"
                                             src="../assets/img/it-58389b130f3ce74d5ffeca1502c644e7294c61a4b5c775158545ebcf3b84a03a.png" />
                                        Italy
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/fr/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="France"
                                             src="../assets/img/fr-2b1eb480699f5c7fc6e7a1180fe91ef9aeaced7520cb73386ece9e6a76717ccc.png" />
                                        France
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/pt/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="Portugal"
                                             src="../assets/img/pt-b5ca5c7a62ca3b505407218ba69459819c9895cea47d674ef1d3d59777d86a48.png" />
                                        Portugal
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/cn/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="China"
                                             src="../assets/img/cn-eb3e887790c183b2823dbe6c10deca9fb813e5f58649cb3ac3d179179fdd912c.png" />
                                        China
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/ro/prices">
                                        <span className="lang-btn__flag lang-btn_long">
                                        <img alt="Romania"
                                             src="../assets/img/ro-a3006c31b24994321cf426eb6a1ce4b842bfc67664df344e936824d56ac440d2.png" />
                                        Romania
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
