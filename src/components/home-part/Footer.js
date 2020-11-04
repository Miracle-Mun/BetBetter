import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
        <footer className="">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12">
                        <ul className="footer-menu">
                            <li>
                                <a href="https://www.betburger.com/sport-arbitrage-betting">
                                    What is Arbitrage Betting?
                                </a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/surebets">
                                    What are Surebets?
                                </a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/valuebet">
                                    What are Valuebets?
                                </a>
                            </li>
                            <li>
                                <a href="https://forum.betburger.com/">
                                    Forum
                                </a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/arbs/live">Live arbs</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/arbs">Prematch arbs</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/valuebets">Valuebets</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/compare">Odds Comparison</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/contact">Contact us</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/surebet-calculator" title="Calculator">
                                    Calculator
                                </a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/bookmakers">Bookmakers</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/faq">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/news">Service News</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/affiliates">Affiliate Program</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <ul className="social-list">
                            <li>
                                <a href="https://www.youtube.com/channel/UCHH5BBx74t45cTnn8VcJ8fw" target="_blank">
                                    <img alt="YouTube"
                                        src="../assets/img/icon-yt.png" />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/betburger" target="_blank">
                                    <img alt="Telegram"
                                        src="../assets/img/icon-telegram.png" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@betburger.com">
                                    <img alt="Mail" src="../assets/img/icon-email.png" />
                                </a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <a alt="Arbitrage betting service №1" className="logo" href="https://www.betburger.com/" title="BetBurger">
                        <img alt="BETBURGER"
                            src="../assets/img/logo-ce.svg" />
                    </a>
                    <div className="bottom__center">
                        <ul>
                            <li>
                                <a href="https://www.betburger.com/privacy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://www.betburger.com/terms">Terms of use</a>
                            </li>
                        </ul>
                        <span>2013-2020 (с) BetBurger All rights reserved</span>
                        <span>www.betburger.com is owned and operated by Aspira Limited</span>
                    </div>
                    <div className="bottom__left">
                        <a title="Online Gambling Support" href="https://www.betburger.com/online-gambling-support">
                            <img
                                alt="Online Gambling Support"
                                src="../assets/img/gambling.png" />
                        </a>
                        <img src="../assets/img/plus18.png" />
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
