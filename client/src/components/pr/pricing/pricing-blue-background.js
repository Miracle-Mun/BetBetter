import React, { Component } from 'react';

class PricingBlueBackground extends Component {
  render() {
    return (
        <div className="blue-background">
            <div className="container" id="price-container">
                <div className="price-block">
                    <h2 className="secondary-title text-center">Ilimitado Surebets</h2>
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
                                        <span className="price-column__priceday">3.33/dia</span>
                                    </div>
                                    <div className="price-column__select">
                                        <select className="tariff-select" id="prematch-tariff">
                                            <option value="18" data-duration="1">1 dias</option>
                                            <option value="19" data-duration="7">7 dias</option>
                                            <option value="20" data-duration="30">30 dias</option>
                                            <option value="31" data-duration="180">180 dias</option>
                                            <option value="32" data-duration="360">360 dias</option>
                                        </select>
                                    </div>
                                    <span className="price-column__item">Ilimitado Surebets</span>
                                    <div className="price-column__details">
                                        <span className="price-column__item">Funcionalidade melhorada:</span>
                                        <ul className="green-list">
                                            <li>Surebets</li>
                                            <li>Serviço de comparação Prematch</li>
                                            <li>Middles</li>
                                            <li>Negativas surebets</li>
                                            <li>Contabilidade</li>
                                            <li>Filtrar por ROI</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn green-btn pay-form pay-form-prematch">
                                        Selecionar
                                        <img src="../../assets/img/arrow_red-faf29b1a7ceae4afeb3d57abb105adb10e65f8bb154f76dbccc76e55b0740bc8.png" />
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
                                        <span className="price-column__priceday">6.33/dias</span>
                                    </div>
                                    <div className="price-column__select">
                                        <select className="tariff-select" id="live-tariff">
                                            <option value="23" data-duration="1">1 dias</option>
                                            <option value="24" data-duration="7">7 dias</option>
                                            <option value="25" data-duration="30">30 dias</option>
                                            <option value="33" data-duration="180">180 dias</option>
                                            <option value="34" data-duration="360">360 dias</option>
                                        </select>
                                    </div>
                                    <span className="price-column__item">Ilimitado Surebets</span>
                                    <div className="price-column__details">
                                        <span className="price-column__item">Funcionalidade melhorada:</span>
                                        <ul className="green-list">
                                            <li>Surebets</li>
                                            <li>Serviço de comparação Live</li>
                                            <li>Middles</li>
                                            <li>Contabilidade</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn green-btn pay-form pay-form-live">
                                        Selecionar
                                        <img src="../../assets/img/arrow_red-faf29b1a7ceae4afeb3d57abb105adb10e65f8bb154f76dbccc76e55b0740bc8.png" />
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
                                        <span className="price-column__priceday">8/dias</span>
                                    </div>
                                    <div className="price-column__select">
                                        <select className="tariff-select" id="prematch-live-tariff">
                                            <option value="18" data-live-id="23" data-duration="1">1 dias</option>
                                            <option value="19" data-live-id="24" data-duration="7">7 dias</option>
                                            <option value="20" data-live-id="25" data-duration="30">30 dias</option>
                                            <option value="31" data-live-id="33" data-duration="180">180 dias</option>
                                            <option value="32" data-live-id="34" data-duration="360">360 dias</option>
                                        </select>
                                    </div>
                                    <span className="price-column__item">Ilimitado Surebets</span>
                                    <div className="price-column__details">
                                        <span className="price-column__item">Tudo de Prematch</span>
                                    </div>
                                    <div className="price-column__details">
                                        <span className="price-column__item">Tudo de Live</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="price-column__sale">
                                        <span className="red">Poupe 50%</span>
                                        <span className="blue">On prematch</span>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn green-btn pay-form pay-form-prematch-live">
                                            Selecionar
                                            <img src="../../assets/img/arrow_red-faf29b1a7ceae4afeb3d57abb105adb10e65f8bb154f76dbccc76e55b0740bc8.png" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="secondary-title text-center">Incluído em todos os planos</h2>
                <div className="row">
                    <div className="col-md-3 col-md-offset-1">
                        <h5 className="small-title">Todos os mercados:</h5>
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
                        <h5 className="small-title">Todos os desportos:</h5>
                        <ul className="green-list columns-list">
                            <li>
                                Basebol
                            </li>
                            <li>
                                Basquetebol
                            </li>
                            <li>
                                Futsal
                            </li>
                            <li>
                                Andebol
                            </li>
                            <li>
                                Hóquei
                            </li>
                            <li>
                                Futebol
                            </li>
                            <li>
                                Ténis
                            </li>
                            <li>
                                Voleibol
                            </li>
                            <li>
                                Futebol americano
                            </li>
                            <li>
                                Bilhar
                            </li>
                            <li>
                                Dados
                            </li>
                            <li>
                                Ténis de mesa
                            </li>
                            <li>
                                Badminton
                            </li>
                            <li>
                                Râguebi
                            </li>
                            <li>
                                Polo aquático
                            </li>
                            <li>
                                Bandy
                            </li>
                            <li>
                                Artes marciais
                            </li>
                            <li>
                                Hóquei de campo
                            </li>
                            <li>
                                AFL
                            </li>
                            <li>
                                E-Sports
                            </li>
                            <li>
                                Xadrez
                            </li>
                            <li>
                                Futebol gaélico
                            </li>
                            <li>
                                Criquete
                            </li>
                            <li>
                                Fórmula 1
                            </li>
                            <li>
                                Voleibol de praia
                            </li>
                            <li>
                                Corrida de cavalos
                            </li>
                            <li>
                                Biatlo
                            </li>
                            <li>
                                Ondulação
                            </li>
                            <li>
                                Abóbora
                            </li>
                            <li>
                                Netball
                            </li>
                            <li>
                                Futebol de areia
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
