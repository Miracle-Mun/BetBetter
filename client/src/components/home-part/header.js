import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogoutRequest } from '../../store/actions/usersActions';

class Header extends Component {
  render() {
    return (
      <header className="header" style={{display:"block"}}>
        <div className="container">
          <div className="header_inner" style={{border_bottom: "1px solid #777b80",}}>
            <a alt="Arbitrage betting service №1" className="logo" href="/" title="BetBurger">
              <img alt="BETBURGER" src="../../assets/img/logo.svg" />
            </a>
            <a alt="Arbitrage betting service №1" className="logo-mobile" href="/" title="BetBurger">
              <img alt="BETBURGER" src="../../assets/img/logo.svg" />
            </a>

            <div className="navbar-header">
              <button className="navbar-toggle" data-target=".bs-navbar-collapse" data-toggle="collapse" type="button">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                <div className="text-center visible-sm visible-xs">
                  <span className="bs-navbar-collapse__toggle glyphicon glyphicon-remove" data-target=".bs-navbar-collapse" data-toggle="collapse" type="button"></span>
                </div>

                <ul className="nav-list-white">
                  <li>
                    <div className="dropdown profile-dropdown">
                      <a aria-expanded="false" aria-haspopup="true" className="account dropdown-toggle logo_white" data-hover="dropdown" data-toggle="dropdown" id="arbs_dropdown" type="button"> Surebets
                      </a>
                      <ul aria-labelledby="arbs_dropdown" className="dropdown-menu dropdown-profile dropdownhover-bottom">
                        <ul className="user-menu">
                          <li className="dropdown-item">
                            <a className="dropdown-item" href="/pricing">Surebets pricing</a>
                          </li>
                          <li className="dropdown-item">
                            <a className="dropdown-item" href="/bet">Surebets Prematch</a>
                          </li>
                          <li className="dropdown-item">
                            <a className="dropdown-item" href="/bet">Surebets Live</a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown profile-dropdown">
                      <a aria-expanded="false" aria-haspopup="true"
                          className="account dropdown-toggle logo_white" data-hover="dropdown"
                          data-toggle="dropdown" id="valuebets_dropdown" type="button">
                          Valuebets
                      </a>
                      <ul aria-labelledby="valuebets_dropdown" className="dropdown-menu dropdown-profile">
                        <ul className="user-menu">
                          <li className="dropdown-item">
                              <a className="dropdown-item"
                                  href="https://www.betburger.com/prices-valuebets">Valuebets
                                  pricing</a>
                          </li>
                          <li className="dropdown-item">
                              <a className="dropdown-item" href="https://www.betburger.com/valuebets">Valuebets
                                  Prematch</a>
                          </li>
                          <li className="dropdown-item">
                              <a className="dropdown-item"
                                  href="https://www.betburger.com/valuebets/live">Valuebets Live</a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown profile-dropdown">
                      <a aria-expanded="false" aria-haspopup="true"
                          className="account dropdown-toggle logo_white" data-hover="dropdown"
                          data-toggle="dropdown" id="api_dropdown" type="button">
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
                      <a className="signup logo_white " href="/public">My Account</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="actions">
              <div className="dropdown language-select drop-lang lang-dropdown">
                <span aria-expanded="false" aria-haspopup="true" className="lang-btn dropdown-toggle drop-language-button" data-toggle="dropdown" id="drop-language" type="button" style={{width: "24px"}}>
                  <span className="lang-btn__flag">
                    <img alt="English" src="../../assets/img/en.png" />
                  </span>
                </span>
                        
                <ul aria-labelledby="drop-language" className="dropdown-menu dropdown-language">
                  <li>
                    <a className="actual" href="https://www.betburger.com/">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="English" src="../../assets/img/en.png" />English
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/gb">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="Great Britain" src="../../assets/img/gb.png"/>Great Britain
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/es">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="España" src="../../assets/img/es.png"/>España
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/co">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="Colombia" src="../../assets/img/co.png"/>Colombia
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/de">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="Deutschland" src="../../assets/img/de.png"/>Deutschland
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/at">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="Österreich" src="../../assets/img/at.png"/>Österreich
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/gr">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="Ελλάδα" src="../../assets/img/gr.png"/>Ελλάδα
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/it">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="Italy" src="../../assets/img/it.png"/>Italy
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/fr">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="France" src="../../assets/img/fr.png"/>France
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/pt">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="Portugal" src="../../assets/img/pt.png"/>Portugal
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/cn">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="China" src="../../assets/img/cn.png"/>China
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="notactual" href="https://www.betburger.com/ro">
                      <span className="lang-btn__flag lang-btn_long">
                        <img alt="Romania" src="../../assets/img/ro.png"/>Romania
                      </span>
                    </a>
                  </li>                             
                </ul>
              </div>
              <div className="signin">
                <div className="btn green-btn" onClick={()=>this.props.userLogoutRequest()}>Sign out</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = {
  userLogoutRequest
}

export default connect(null, mapDispatchToProps)(Header)
