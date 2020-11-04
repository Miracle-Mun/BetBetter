import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <header className="navbar navbar-inverse normal" role="banner" style={{display: "block"}}>
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggle" data-target=".bs-navbar-collapse" data-toggle="collapse" type="button">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="drop-lang dropdown drop-lang-mobile">
                        <button aria-expanded="false" aria-haspopup="true" className="dropdown-toggle drop-language-button"
                                data-toggle="dropdown" id="drop-language-mobile" type="button">
                            <span className="en flags-lang">
                            drop
                            </span>
                        </button>
                        <ul aria-labelledby="drop-language-mobile" className="dropdown-menu dropdown-language">
                            <li>
                                <a className="actual" href="https://www.betburger.com/profile">
                                    <span className="en flags-lang"></span>
                                    English
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/gb/profile">
                                    <span className="en flags-lang"></span>
                                    Great Britain
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/es/profile">
                                    <span className="es flags-lang"></span>
                                    España
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/co/profile">
                                    <span className="co flags-lang"></span>
                                    Colombia
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/de/profile">
                                    <span className="de flags-lang"></span>
                                    Deutschland
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/at/profile">
                                    <span className="at flags-lang"></span>
                                    Österreich
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/gr/profile">
                                    <span className="gr flags-lang"></span>
                                    Ελλάδα
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/it/profile">
                                    <span className="it flags-lang"></span>
                                    Italy
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/fr/profile">
                                    <span className="fr flags-lang"></span>
                                    France
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/pt/profile">
                                    <span className="pt flags-lang"></span>
                                    Portugal
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/cn/profile">
                                    <span className="cn flags-lang"></span>
                                    China
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/ro/profile">
                                    <span className="ro flags-lang"></span>
                                    Romania
                                </a>
                            </li>
                        </ul>
        
                    </div>
                    <a alt="Arbitrage betting service №1" className="bb_brand2 logo navbar-brand" href="/"
                       title="BetBurger"></a>
                    <a alt="Arbitrage betting service №1" className="navbar-brand" href="/"
                       title="BetBurger">BetBurger</a>
                </div>
                <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <div className="dropdown">
                                <button aria-expanded="false" aria-haspopup="true"
                                        className="drop-pricing-button dropdown-toggle logo_white" data-hover="dropdown"
                                        data-toggle="dropdown" id="arbs_dropdown" type="button">
                                    Surebets
                                </button>
                                <ul aria-labelledby="arbs_dropdown" className="dropdown-menu dropdown-prising">
                                    <li>
                                        <a className="dropdown-item" href="/pricing">Surebets pricing</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/bet">Surebets Prematch</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/bet">Surebets Live</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button aria-expanded="false" aria-haspopup="true"
                                        className="drop-pricing-button dropdown-toggle logo_white" data-hover="dropdown"
                                        data-toggle="dropdown" id="valuebets_dropdown" type="button">
                                    Valuebets
                                </button>
                                <ul aria-labelledby="valuebets_dropdown" className="dropdown-menu dropdown-prising">
                                    <li>
                                        <a className="dropdown-item" href="https://www.betburger.com/prices-valuebets">Valuebets
                                            pricing</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://www.betburger.com/valuebets">Valuebets
                                            Prematch</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://www.betburger.com/valuebets/live">Valuebets
                                            Live</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button aria-expanded="false" aria-haspopup="true"
                                        className="drop-pricing-button dropdown-toggle logo_white" data-hover="dropdown"
                                        data-toggle="dropdown" id="api_dropdown" type="button">
                                    API
                                </button>
                                <ul aria-labelledby="api_dropdown" className="dropdown-menu dropdown-prising">
                                    <li>
                                        <a className="dropdown-item" href="https://www.betburger.com/prices-api">API pricing</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://www.betburger.com/api">API Prematch</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://www.betburger.com/api/live">API Live</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="">
                            <a href="https://www.betburger.com/help">Help Center</a>
                        </li>
                        <li className="active">
                            <a className="signup logo_white " href="/public">My Account</a>
                        </li>
                        <li className="dropdown language-select drop-lang">
                            <button aria-expanded="false" aria-haspopup="true" className="dropdown-toggle drop-language-button"
                                    data-toggle="dropdown" id="drop-language" type="button">
                                <span className="en flags-lang">
                                drop
                                </span>
                            </button>
                            <ul aria-labelledby="drop-language" className="dropdown-menu dropdown-language">
                                <li>
                                    <a className="actual" href="https://www.betburger.com/profile">
                                        <span className="en flags-lang"></span>
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/gb/profile">
                                        <span className="en flags-lang"></span>
                                        Great Britain
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/es/profile">
                                        <span className="es flags-lang"></span>
                                        España
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/co/profile">
                                        <span className="co flags-lang"></span>
                                        Colombia
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/de/profile">
                                        <span className="de flags-lang"></span>
                                        Deutschland
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/at/profile">
                                        <span className="at flags-lang"></span>
                                        Österreich
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/gr/profile">
                                        <span className="gr flags-lang"></span>
                                        Ελλάδα
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/it/profile">
                                        <span className="it flags-lang"></span>
                                        Italy
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/fr/profile">
                                        <span className="fr flags-lang"></span>
                                        France
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/pt/profile">
                                        <span className="pt flags-lang"></span>
                                        Portugal
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/cn/profile">
                                        <span className="cn flags-lang"></span>
                                        China
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/ro/profile">
                                        <span className="ro flags-lang"></span>
                                        Romania
                                    </a>
                                </li>
                            </ul>
        
                        </li>
                        <li>
                            <a className="signup" rel="nofollow" data-method="delete"
                               href="https://www.betburger.com/users/sign_out">Sign out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  }
}

export default Header;
