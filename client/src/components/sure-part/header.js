import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <header className="navbar navbar-inverse normal" role="banner" style={{display: "none"}}>
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
                                <a className="actual" href="https://www.betburger.com/arbs">
                                    <span className="en flags-lang"></span>
                                    English
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/gb/arbs">
                                    <span className="en flags-lang"></span>
                                    Great Britain
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/es/arbs">
                                    <span className="es flags-lang"></span>
                                    España
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/co/arbs">
                                    <span className="co flags-lang"></span>
                                    Colombia
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/de/arbs">
                                    <span className="de flags-lang"></span>
                                    Deutschland
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/at/arbs">
                                    <span className="at flags-lang"></span>
                                    Österreich
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/gr/arbs">
                                    <span className="gr flags-lang"></span>
                                    Ελλάδα
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/it/arbs">
                                    <span className="it flags-lang"></span>
                                    Italy
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/fr/arbs">
                                    <span className="fr flags-lang"></span>
                                    France
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/pt/arbs">
                                    <span className="pt flags-lang"></span>
                                    Portugal
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/cn/arbs">
                                    <span className="cn flags-lang"></span>
                                    China
                                </a>
                            </li>
                            <li>
                                <a className="notactual" href="https://www.betburger.com/ro/arbs">
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
                        <li className="">
                            <a href="/bet">Surebets</a>
                        </li>
                        <li className="">
                            <a href="https://www.betburger.com/prices-valuebets">Valuebets</a>
                        </li>
                        <li className="">
                            <a href="https://www.betburger.com/prices-api">API</a>
                        </li>
                        <li className="">
                            <a href="https://www.betburger.com/help">Help Center</a>
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
                                    <a className="actual" href="https://www.betburger.com/arbs">
                                        <span className="en flags-lang"></span>
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/gb/arbs">
                                        <span className="en flags-lang"></span>
                                        Great Britain
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/es/arbs">
                                        <span className="es flags-lang"></span>
                                        España
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/co/arbs">
                                        <span className="co flags-lang"></span>
                                        Colombia
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/de/arbs">
                                        <span className="de flags-lang"></span>
                                        Deutschland
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/at/arbs">
                                        <span className="at flags-lang"></span>
                                        Österreich
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/gr/arbs">
                                        <span className="gr flags-lang"></span>
                                        Ελλάδα
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/it/arbs">
                                        <span className="it flags-lang"></span>
                                        Italy
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/fr/arbs">
                                        <span className="fr flags-lang"></span>
                                        France
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/pt/arbs">
                                        <span className="pt flags-lang"></span>
                                        Portugal
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/cn/arbs">
                                        <span className="cn flags-lang"></span>
                                        China
                                    </a>
                                </li>
                                <li>
                                    <a className="notactual" href="https://www.betburger.com/ro/arbs">
                                        <span className="ro flags-lang"></span>
                                        Romania
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="signup" href="https://www.betburger.com/users/sign_in">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  }
}

export default Header;
