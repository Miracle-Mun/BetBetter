import React, { Component } from 'react';

class PricingBlueBackground extends Component {
  render() {
    return (
        <div className="blue-background">
            <div className="container" id="price-container">
                <div className="price-block">
                    <h2 className="secondary-title text-center">Unlimited Surebets</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="price-column" id="prematch">
                                <span className="price-column__label prematch-label">Prematch</span>
                                <div>
                                    <h4 className="price-column__title">prematch</h4>
                                    <div className="price-column__price">
                                        <div className="actual_price">
                                            <span className="currency">€</span>
                                            <span className="price">99.99</span>
                                        </div>
                                        <div className="old_price hidden"></div>
                                    </div>
                                    <div className="sale_details hidden"></div>
                                    <div className="price-column__day">
                                        Only
                                        <span className="currency">€</span>
                                        <span className="price-column__priceday">3.33/day</span>
                                    </div>
                                    <div className="price-column__select">
                                        <select className="tariff-select" id="prematch-tariff">
                                            <option value="18" data-duration="1">1 day</option>
                                            <option value="19" data-duration="7">7 days</option>
                                            <option value="20" data-duration="30">30 days</option>
                                            <option value="31" data-duration="180">180 days</option>
                                            <option value="32" data-duration="360">360 days</option>
                                        </select>
                                    </div>
                                    <span className="price-column__item">Unlimited Surebets</span>
                                    <div className="price-column__details">
                                        <span className="price-column__item">Enhanced functional:</span>
                                        <ul className="green-list">
                                            <li>Surebets</li>
                                            <li>Prematch comparison service</li>
                                            <li>Middles</li>
                                            <li>Negative surebets</li>
                                            <li>Accounting</li>
                                            <li>Sorting by ROI</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn green-btn pay-form pay-form-prematch">
                                        Get full access
                                        <img src="../assets/img/arrow_red-faf29b1a7ceae4afeb3d57abb105adb10e65f8bb154f76dbccc76e55b0740bc8.png" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="price-column" id="live">
                                <span className="price-column__label live-label">Live</span>
                                <div>
                                    <h4 className="price-column__title">live</h4>
                                    <div className="price-column__price">
                                        <div className="actual_price">
                                            <span className="currency">€</span>
                                            <span className="price">189.99</span>
                                        </div>
                                        <div className="old_price hidden"></div>
                                    </div>
                                    <div className="sale_details hidden"></div>
                                    <div className="price-column__day">
                                        Only
                                        <span className="currency">€</span>
                                        <span className="price-column__priceday">6.33/day</span>
                                    </div>
                                    <div className="price-column__select">
                                        <select className="tariff-select" id="live-tariff">
                                            <option value="23" data-duration="1">1 day</option>
                                            <option value="24" data-duration="7">7 days</option>
                                            <option value="25" data-duration="30">30 days</option>
                                            <option value="33" data-duration="180">180 days</option>
                                            <option value="34" data-duration="360">360 days</option>
                                        </select>
                                    </div>
                                    <span className="price-column__item">Unlimited Surebets</span>
                                    <div className="price-column__details">
                                        <span className="price-column__item">Enhanced functional:</span>
                                        <ul className="green-list">
                                            <li>Surebets</li>
                                            <li>Live comparison service</li>
                                            <li>Middles</li>
                                            <li>Accounting</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn green-btn pay-form pay-form-live">
                                        Get full access
                                        <img src="../assets/img/arrow_red-faf29b1a7ceae4afeb3d57abb105adb10e65f8bb154f76dbccc76e55b0740bc8.png" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="price-column" id="prematch-live">
                                <span className="price-column__label prematch-live-label">Prematch + Live</span>
                                <div>
                                    <h4 className="price-column__title">prematch &amp; live</h4>
                                    <div className="price-column__price">
                                        <div className="actual_price">
                                            <span className="currency">€</span>
                                            <span className="price">239.99</span>
                                        </div>
                                        <div className="old_price hidden"></div>
                                    </div>
                                    <div className="sale_details hidden"></div>
                                    <div className="price-column__day">
                                        Only
                                        <span className="currency">€</span>
                                        <span className="price-column__priceday">8/day</span>
                                    </div>
                                    <div className="price-column__select">
                                        <select className="tariff-select" id="prematch-live-tariff">
                                            <option value="18" data-live-id="23" data-duration="1">1 day</option>
                                            <option value="19" data-live-id="24" data-duration="7">7 days</option>
                                            <option value="20" data-live-id="25" data-duration="30">30 days</option>
                                            <option value="31" data-live-id="33" data-duration="180">180 days</option>
                                            <option value="32" data-live-id="34" data-duration="360">360 days</option>
                                        </select>
                                    </div>
                                    <span className="price-column__item">Unlimited Surebets</span>
                                    <div className="price-column__details">
                                        <span className="price-column__item">Everything from Prematch</span>
                                    </div>
                                    <div className="price-column__details">
                                        <span className="price-column__item">Everything from Live</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="price-column__sale">
                                        <span className="red">Save 50%</span>
                                        <span className="blue">On prematch</span>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn green-btn pay-form pay-form-prematch-live">
                                            Get full access
                                            <img src="../assets/img/arrow_red-faf29b1a7ceae4afeb3d57abb105adb10e65f8bb154f76dbccc76e55b0740bc8.png" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="secondary-title text-center">Included in all plans</h2>
                <div className="row">
                    <div className="col-md-3 col-md-offset-1">
                        <h5 className="small-title">All markets:</h5>
                        <ul className="green-list">
                            <li>
                                1X2
                            </li>
                            <li>
                                Handicaps
                            </li>
                            <li>
                                Totals
                            </li>
                            <li>
                                Individual totals
                            </li>
                            <li>
                                Statistics
                            </li>
                            <li>
                                Additionals
                            </li>
                            <li>
                                Game Winner
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <h5 className="small-title">All sports:</h5>
                        <ul className="green-list columns-list">
                            <li>
                                Baseball
                            </li>
                            <li>
                                Basketball
                            </li>
                            <li>
                                Futsal
                            </li>
                            <li>
                                Handball
                            </li>
                            <li>
                                Hockey
                            </li>
                            <li>
                                Soccer
                            </li>
                            <li>
                                Tennis
                            </li>
                            <li>
                                Volleyball
                            </li>
                            <li>
                                Am. Football
                            </li>
                            <li>
                                Snooker
                            </li>
                            <li>
                                Darts
                            </li>
                            <li>
                                Table Tennis
                            </li>
                            <li>
                                Badminton
                            </li>
                            <li>
                                Rugby
                            </li>
                            <li>
                                Water Polo
                            </li>
                            <li>
                                Bandy
                            </li>
                            <li>
                                Martial arts
                            </li>
                            <li>
                                Field Hockey
                            </li>
                            <li>
                                AFL
                            </li>
                            <li>
                                E-Sports
                            </li>
                            <li>
                                Chess
                            </li>
                            <li>
                                Gaelic Sport
                            </li>
                            <li>
                                Cricket
                            </li>
                            <li>
                                Formula 1
                            </li>
                            <li>
                                Beach Volley
                            </li>
                            <li>
                                Horse Racing
                            </li>
                            <li>
                                Biathlon
                            </li>
                            <li>
                                Curling
                            </li>
                            <li>
                                Squash
                            </li>
                            <li>
                                Netball
                            </li>
                            <li>
                                Beach Soccer
                            </li>
                            <li>
                                Floorball
                            </li>
                            <li>
                                Hurling
                            </li>
                            <li>
                                Kung Volleyball
                            </li>
                            <li>
                                E-Soccer
                            </li>
                            <li>
                                E-Hockey
                            </li>
                            <li>
                                E-Basketball
                            </li>
                            <li>
                                E-Tennis
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PricingBlueBackground;