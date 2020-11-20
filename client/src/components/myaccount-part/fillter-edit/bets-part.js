import React, { Component } from 'react';

class FilterBet extends Component {

    render(){

        return(
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="row">

                    </div>
                    <div className="row">
                        <label className="col-sm-2 control-label col-xs-12 control-label pull-left labelBkTitle">
                            Bookmakers
                        </label>
                        <div className="col-sm-10">
                            <div className="check_all_bk">
                                <div className="sorted-list">
                                    <div className="checkbox checkAllInput">
                                        <input id="check_all_bookmakers_1" type="checkbox" name="check_all_bookmakers_1" value="1"/>
                                        <label for="check_all_bookmakers_1">
                                            <span className="custom_checkbox"></span>
                                            <p>Check all</p>
                                            <span className="help-block hidden"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="bookmakers1_list">
                                <div className="sorted-list">
                                    <div className="row order-list">
                                        <div className="col-xs-6 col-md-3 order-item" data-order="10bet">
                                            <div className="checkbox text-left">
                                                <input name="bookmakers1[]" value="24" id="bk_bookmakers1_24" type="checkbox" data-indeterminate="true"/>
                                                <label className="text-left" for="bk_bookmakers1_24">
                                                    <span className="custom_checkbox"></span>
                                                    <p>10bet</p>
                                                </label>
                                            </div>                                            
                                        </div>
                                        <div className="col-xs-6 col-md-3 order-item" data-order="188bet">
                                            <div className="checkbox text-left">
                                                <input name="bookmakers1[]" value="5" id="bk_bookmakers1_5" type="checkbox" data-indeterminate="false"/>
                                                <label className="text-left" for="bk_bookmakers1_5">
                                                    <span className="custom_checkbox"></span>
                                                    <p>188bet</p>
                                                </label>
                                            </div>                                            
                                        </div>
                                        <div className="col-xs-6 col-md-3 order-item" data-order="1xbet">
                                            <div className="checkbox text-left">
                                                <input name="bookmakers1[]" value="21" id="bk_bookmakers1_21" type="checkbox" data-indeterminate="false"/>
                                                <label className="text-left" for="bk_bookmakers1_21">
                                                    <span className="custom_checkbox"></span>
                                                    <p>1xbet</p>
                                                </label>
                                            </div>                                            
                                        </div>
                                        <div className="col-xs-6 col-md-3 order-item" data-order="bet365">
                                            <div className="checkbox text-left">
                                                <input name="bookmakers1[]" value="10" id="bk_bookmakers1_10" type="checkbox" data-indeterminate="false"/>
                                                <label className="text-left" for="bk_bookmakers1_10">
                                                    <span className="custom_checkbox"></span>
                                                    <p>bet365</p>
                                                </label>
                                            </div>                                            
                                        </div>

                                        <div className="col-xs-6 col-md-3 order-item" data-order="DafabetOW">
                                            <div className="checkbox text-left">
                                                <input name="bookmakers1[]" value="12" id="bk_bookmakers1_12" type="checkbox" data-indeterminate="false"/>
                                                <label className="text-left" for="bk_bookmakers1_12">
                                                    <span className="custom_checkbox"></span>
                                                    <p>DafabetOW</p>
                                                </label>
                                            </div>                                            
                                        </div>

                                        <div className="col-xs-6 col-md-3 order-item" data-order="betfair">
                                            <div className="checkbox text-left">
                                                <input name="bookmakers1[]" value="11" id="bk_bookmakers1_11" type="checkbox" data-indeterminate="false"/>
                                                <label className="text-left" for="bk_bookmakers1_11">
                                                    <span className="custom_checkbox"></span>
                                                    <p>betfair</p>
                                                </label>
                                            </div>                                            
                                        </div>

                                        <div className="col-xs-6 col-md-3 order-item" data-order="pinnacle">
                                            <div className="checkbox text-left">
                                                <input name="bookmakers1[]" value="1" id="bk_bookmakers1_1" type="checkbox" data-indeterminate="false"/>
                                                <label className="text-left" for="bk_bookmakers1_1">
                                                    <span className="custom_checkbox"></span>
                                                    <p>pinnacle</p>
                                                </label>
                                            </div>                                            
                                        </div>

                                        <div className="col-xs-6 col-md-3 order-item" data-order="betway">
                                            <div className="checkbox text-left">
                                                <input name="bookmakers1[]" value="78" id="bk_bookmakers1_78" type="checkbox" data-indeterminate="false"/>
                                                <label className="text-left" for="bk_bookmakers1_78">
                                                    <span className="custom_checkbox"></span>
                                                    <p>betway</p>
                                                </label>
                                            </div>                                            
                                        </div>

                                        <div className="col-xs-6 col-md-3 order-item" data-order="Rivalo">
                                            <div className="checkbox text-left">
                                                <input name="bookmakers1[]" value="41" id="bk_bookmakers1_41" type="checkbox" data-indeterminate="false"/>
                                                <label className="text-left" for="bk_bookmakers1_41">
                                                    <span className="custom_checkbox"></span>
                                                    <p>Rivalo</p>
                                                </label>
                                            </div>                                            
                                        </div>

                                        <div className="col-xs-6 col-md-3 order-item" data-order="sbobet">
                                            <div className="checkbox text-left">
                                                <input name="bookmakers1[]" value="3" id="bk_bookmakers1_3" type="checkbox" data-indeterminate="false"/>
                                                <label className="text-left" for="bk_bookmakers1_3">
                                                    <span className="custom_checkbox"></span>
                                                    <p>sbobet</p>
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
        );
    }
}

export default FilterBet;