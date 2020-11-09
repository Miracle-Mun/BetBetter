import React, { Component } from 'react';


class TopNav extends Component {
  render() {
    return (
        <nav className="navbar navbar-default topNavbar">
            <div className="container">
                <div className="navbar-header">
                    <button aria-controls="navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#navbar"
                            data-toggle="collapse" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="prematchNav active">
                            <a href="/bet">Surebets</a>
                        </li>
                        <li className="valuebetsNav">
                            <a href="https://www.betburger.com/valuebets">Valuebets</a>
                        </li>
                        <li className="apiNav">
                            <a href="https://www.betburger.com/api">API</a>
                        </li>
                        <li>
                            <a href="https://www.betburger.com/prices">Pricing</a>
                        </li>
                        <li>
                            <a href="https://www.betburger.com/help">Help Center</a>
                        </li>
                        <li>
                            <a href="https://www.betburger.com/users/sign_in">Login</a>
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
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default TopNav;
