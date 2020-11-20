import React, { Component } from 'react';

class FilterSport extends Component {

    render(){

        return(
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="row">
                        <label className="control-label col-sm-2">
                            Sports
                        </label>
                        <div className="col-sm-10">
                            <div className="row">
                                <div className="col-xs-5 check_all_sports">
                                    <div className="checkbox">
                                        <input id="check_all_sports" name="check_all_sports" className="check_all_group" type="checkbox" value="1"/>
                                        <label for="check_all_sports">
                                            <span className="custom_checkbox"></span>
                                            Check all
                                            <span className="help-block hidden"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row sports-list">
                                <div className="col-xs-12">
                                    <div className="sorted-list">
                                        <div className="row order-list">
                                            <div className="col-xs-6 col-md-3 order-item" data-order="AFL">
                                                <div className="checkbox">
                                                    <input  name="sports[]" value="20" id="sport[20]" type="checkbox"/>
                                                    <label for="sport[20]">
                                                        <span className="custom_checkbox"></span>
                                                        <p>AFL</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Cricket">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="24" id="sport[24]" type="checkbox"/>
                                                        <label for="sport[24]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Cricket</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Formula 1">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="25" id="sport[25]" type="checkbox"/>
                                                        <label for="sport[25]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Formula 1</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Rugby">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="15" id="sport[15]" type="checkbox"/>
                                                        <label for="sport[15]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Rugby</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Am. Football">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="10" id="sport[10]" type="checkbox"/>
                                                        <label for="sport[10]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Am. Football</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Curling">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="32" id="sport[32]" type="checkbox"/>
                                                        <label for="sport[32]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Curling</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Futsal">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="4" id="sport[4]" type="checkbox"/>
                                                        <label for="sport[4]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Futsal</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Snooker">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="11" id="sport[11]" type="checkbox"/>
                                                        <label for="sport[11]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Snooker</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Badminton">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="14" id="sport[14]" type="checkbox"/>
                                                        <label for="sport[14]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Badminton</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Darts">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="12" id="sport[12]" type="checkbox"/>
                                                        <label for="sport[12]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Darts</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Gaelic Sport">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="23" id="sport[23]" type="checkbox"/>
                                                        <label for="sport[23]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Gaelic Sport</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Soccer">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="7" id="sport[7]" type="checkbox"/>
                                                        <label for="sport[7]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Soccer</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Bandy">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="17" id="sport[17]" type="checkbox"/>
                                                        <label for="sport[17]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Bandy</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="E-Basketball">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="41" id="sport[41]" type="checkbox"/>
                                                        <label for="sport[41]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>E-Basketball</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Handball">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="5" id="sport[5]" type="checkbox"/>
                                                        <label for="sport[5]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Handball</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Squash">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="33" id="sport[33]" type="checkbox"/>
                                                        <label for="sport[33]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Squash</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Baseball">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="1" id="sport[1]" type="checkbox"/>
                                                        <label for="sport[1]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Baseball</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="E-Hockey">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="40" id="sport[40]" type="checkbox"/>
                                                        <label for="sport[40]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>E-Hockey</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Hockey">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="6" id="sport[6]" type="checkbox"/>
                                                        <label for="sport[6]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Hockey</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Table Tennis">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="13" id="sport[13]" type="checkbox"/>
                                                        <label for="sport[13]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Table Tennis</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Basketball">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="2" id="sport[2]" type="checkbox"/>
                                                        <label for="sport[2]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Basketball</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="E-Soccer">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="39" id="sport[39]" type="checkbox"/>
                                                        <label for="sport[39]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>E-Soccer</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Horse Racing">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="30" id="sport[30]" type="checkbox"/>
                                                        <label for="sport[30]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Horse Racing</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Tennis">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="8" id="sport[8]" type="checkbox"/>
                                                        <label for="sport[8]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Tennis</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Beach Soccer">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="35" id="sport[35]" type="checkbox"/>
                                                        <label for="sport[35]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Beach Soccer</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="E-Sports">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="21" id="sport[21]" type="checkbox"/>
                                                        <label for="sport[21]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>E-Sports</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Hurling">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="37" id="sport[37]" type="checkbox"/>
                                                        <label for="sport[37]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Hurling</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Volleyball">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="9" id="sport[9]" type="checkbox"/>
                                                        <label for="sport[9]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Volleyball</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Beach Volley">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="29" id="sport[29]" type="checkbox"/>
                                                        <label for="sport[29]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Beach Volley</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="E-Tennis">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="42" id="sport[42]" type="checkbox"/>
                                                        <label for="sport[42]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>E-Tennis</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Kung Volleyball">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="38" id="sport[38]" type="checkbox"/>
                                                        <label for="sport[38]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Kung Volleyball</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Water Polo">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="16" id="sport[16]" type="checkbox"/>
                                                        <label for="sport[16]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Water Polo</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Biathlon">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="31" id="sport[31]" type="checkbox"/>
                                                        <label for="sport[31]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Biathlon</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Field Hockey">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="19" id="sport[19]" type="checkbox"/>
                                                        <label for="sport[19]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Field Hockey</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Martial arts">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="18" id="sport[18]" type="checkbox"/>
                                                        <label for="sport[18]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Martial arts</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3"><div className="checkbox"><label>&nbsp;</label></div></div><div className="col-xs-6 col-md-3 order-item" data-order="Chess">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="22" id="sport[22]" type="checkbox"/>
                                                        <label for="sport[22]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Chess</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Floorball">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="36" id="sport[36]" type="checkbox"/>
                                                        <label for="sport[36]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Floorball</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3 order-item" data-order="Netball">
                                                <div className="checkbox">
                                                        <input  name="sports[]" value="34" id="sport[34]" type="checkbox"/>
                                                        <label for="sport[34]">
                                                            <span className="custom_checkbox"></span>
                                                            <p>Netball</p>
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-md-3">
                                                <div className="checkbox">
                                                    <label>&nbsp;</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterSport;