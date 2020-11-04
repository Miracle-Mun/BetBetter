import React, { Component } from 'react';

class Table1 extends Component {
  render() {
    return (
        <div className="tableRowStyle calcRow">
            <div className="row calculatorSection" style={{marginLeft:"-20px"}}>
                <div className="message-container hide">
                    <span>
                        Saved
                    </span>
                </div>
                <div className="background-theme hide"></div>
                <div className="arbsCalculatorComponent col-xs-12 withArb">
                    <div className="calculatorView smallCalcView">
                        <input type="hidden" name="formula" id="formula" value="[object Object]"/>
                        <input type="hidden" name="percent" id="percent" value="/" />
                        <input type="hidden" id="matchbook" value="0"/>
                        <div className="row">
                            <div className="row-sm-height calcHeader displayTable">
                                <div className="tableCell left_calcHeader">
                                    <div className="left_calcHeader_top text-center">
                                        <div className="left_calcHeader_percent inline_middle text-left padding5px"
                                            title="1.00%">1.00%
                                        </div>
                                        <div className="left_calcHeader_sport inline_middle text-left padding5px" title="Soccer">Soccer</div>
                                    </div>
                                    <div className="left_calcHeader_bottom">
                                        <div className="left_calcHeader_time text-center">
                                            05 Nov 15:00
                                        </div>
                                    </div>
                                </div>
                                <div className="tableCell padding5px center_calcHeader text-left">
                                    <div className="center_calcHeader_top">
                                        <div className="center_calcHeader_event_name inline_middle"
                                            title="Zorya Lugansk - AEK Athens">
                                            <a title="Compare odds: Zorya Lugansk - AEK Athens"
                                            target="_blank"
                                            href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770">
                                                Zorya Lugansk - AEK Athens
                                                <small><strong title="Game period: ">
                                                    [1st half]</strong>
                                                </small>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="center_calcHeader_bottom">
                                        <div className="center_calcHeader_league inline_middle"
                                            title="Europe. UEFA Europa League">
                                            Europe. UEFA Europa League
                                        </div>
                                    </div>
                                </div>
                                <div className="tableCell right_calcHeader">
                                    <div className="right_calcHeader_lines">
                                        <a href="https://www.betburger.com/arbs#"
                                        className="smallWindow inline_middle text-center halfWindow"
                                        title="Change calculator view">
                                            <i className="fas fa-expand-arrows-alt" style={{color:"white"}}></i></a>
                                        <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22f697fb91e3e507ca83f2150d91a6ebba%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:1,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:5%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84466837,%22bookmaker_id%22:1,%22period_id%22:5,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84477106,%22bookmaker_id%22:105,%22period_id%22:5,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                        className="newWindow inline_middle text-center"
                                        title="Open in new view">
                                            <i className="fas fa-share-square" style={{color:"white"}}></i></a>
                                    </div>
                                    <div className="right_calcHeader_lines">
                                        <a href="https://www.betburger.com/arbs#"
                                        className="reportWrongArb inline_middle text-center"
                                        title="Report about wrong arb">
                                            <i className="fas fa-bullhorn" style={{color:"white"}}></i>
                                        </a>
                                        <a id="drop_calc"
                                        href="https://www.betburger.com/arbs#"
                                        className="dropdown-toggle closeTrash inline_middle text-center"
                                        data-toggle="dropdown" title="Hide menu"
                                        role="button" aria-haspopup="true"
                                        aria-expanded="true">
                                            <i className="glyphicon glyphicon-trash" style={{color:"white"}}></i>
                                        
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-right"
                                            aria-labelledby="drop_calc">
                                            <li>
                                                <a href="https://www.betburger.com/arbs#"
                                                title="Hide arb"
                                                data-id="f697fb91e3e507ca83f2150d91a6ebba"
                                                className="hideArb">
                                                    Hide arb
                                                </a></li>
                                            <li>
                                                <a href="https://www.betburger.com/arbs#"
                                                title="Hide event"
                                                data-id="214433770"
                                                className="hideEvent">
                                                    Hide event
                                                </a></li>
                                            <li role="separator" className="divider"></li>
                                            <li>
                                                <a href="https://www.betburger.com/arbs#"
                                                title="Hide event in Pinnacle"
                                                data-id="84466837"
                                                className="hideBkEvent">
                                                    Hide event in Pinnacle
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.betburger.com/arbs#"
                                                title="Hide event in Sportmarket"
                                                data-id="84477106"
                                                className="hideBkEvent">
                                                    Hide event in Sportmarket
                                                </a>
                                            </li>
                                            <li role="separator" className="divider"></li>
                                            <li>
                                                <a href="https://www.betburger.com/arbs#"
                                                title="Hide event in " data-id="84466837/84477106" className="hideAllBkEvent">
                                                    Hide event in
                                                    Pinnacle/Sportmarket
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row lightGray topPanel relative">
                            <div className="absoluteRight topContent">
                                <div className="row-sm-height inputContainer relative">
                                    <div className="col-sm-height padding_left_5 text-center col-middle outcomeKoefBooks height10 pull-left">
                                        <div className="input4spaces"></div>
                                    </div>
                                    <div className="col-sm-height padding_left_5 text-center col-middle outcomeKoefCommission height10 pull-left">
                                        <div className="input2spaces"></div>
                                    </div>
                                    <div className="col-sm-height padding_left_5 text-center col-middle outcomeKoefStatic height10 pull-left"></div>
                                    <div className="col-sm-height padding_left_5 text-center col-middle bottomTotalStake stakeColTitle pull-left">
                                        <div className="row-sm-height">
                                            <div className="col-sm-height col-middle">
                                                <div className="inside">
                                                    <div className="content">
                                                        Stake
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-height padding_left_5 text-center col-middle withSelect currencyColTitle pull-left">
                                        <div className="row-sm-height">
                                            <div className="col-sm-height col-middle">
                                                <div className="inside">
                                                    <div className="content">
                                                        Currency
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-height col-middle withCheckboxes height10 pull-left">
                                        <div className="row-sm-height">
                                            <div className="col-sm-height col-middle">
                                                <div className="inside">
                                                    <div className="content">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absoluteRight text-center col-sm-height col-middle revColTitle">
                                <div className="row-sm-height">
                                    <div className="col-sm-height col-middle">
                                        <div className="inside">
                                            <div className="content">
                                                Revenue
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row outcomeCalc outcome_1 displayTable">
                            <div className="tableCell col-middle outcomeCalcTitle">
                                <div className="row margin0">
                                    <div className="row-sm-height">
                                        <div className="col-xs-12 padding2_5 text-center col-sm-height col-middle">
                                            <div className="inside">
                                                <div className="content outcomeLinkContainer">
                                                    <span className="copy-team-name copy-event-name-js" title="Copy"
                                                        data-to-copy="FC Zorya Luhansk">
                                                        <span className="glyphicon glyphicon-duplicate"></span>
                                                    </span>
                                                    <a href="https://www.betburger.com/prices"
                                                    className="check_for_russia is_disabled-hbs"
                                                    rel="nofollow"
                                                    title="Arb in FC Zorya Luhansk - AEK Athens">AH1(0)</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tableCell col-middle bookmakersSelect relative">
                                <div className="text-center col-sm-height col-middle withBookmakerList">
                                    <div className="inside bookmakersCol">
                                        <div id="bookmakers_1_scroll">
                                            <div className="content bookmakersSection scroller">
                                                <ul multiple="" className="bookmakersSelect multipleRows">
                                                    <li data-bet_id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA" data-bookmaker_id="1" data-bet_number="1" className=" sameOutcome   bg-color-">
                                                        <div className="row margin0 height100">
                                                            <div className="row-sm-height">
                                                                <div className="text-center col-sm-height col-middle">
                                                                    <div className="inside">
                                                                        <div className="content">
                                                                            <div className="bookmakerListRow text-left padding2_5">
                                                                                <a className="excludeBookmakerEvent"
                                                                                data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA"
                                                                                data-bet_number="1"
                                                                                href="https://www.betburger.com/arbs#"
                                                                                title="[missing &quot;en.arbs_page.delete_bet&quot; translation]"><span></span></a>
                                                                                <span className="bookmaker">Pinnacle()</span>
                                                                            </div>
                                                                            <div className="directLinkListRow text-left padding2_5">
                                                                                <a className="directLink"
                                                                                target="_blank"
                                                                                href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                title="Asian Handicap1(0)">
                                                                                    <span className="icomoon-redo2"></span></a>
                                                                            </div>
                                                                            <div className="koefLinkListRow text-left padding2_5">
                                                                                <a hreh="#"
                                                                                className="refreshOutcomeCalc koefRefresh bold"
                                                                                title="Refresh koef"
                                                                                data-bet_number="1">
                                                                                    <span title="Refresh outcome odds">2.02</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="content bookmakersSectionSingle">
                                                <div multiple="" className="bookmakersSelect singleRow">
                                                    <a className="excludeBookmakerEvent" data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA" data-bet_number="1" href="https://www.betburger.com/arbs#" title="Hide Bet"><span className="fa fa-close"></span></a>
                                                    <select className="input-xs singleSelect1 bg-color-" data-number="1" data-active="false">
                                                        <option className="bg-color-"
                                                                selected=""
                                                                value="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA">
                                                            Pinnacle: 2.02 ()
                                                        </option>
                                                    </select>
                                                    <a href="https://www.betburger.com/arbs#" className="refreshOutcomeCalc" title="Refresh koef" data-bet_number="1">
                                                        <span title="Refresh outcome odds" className="fa fa-refresh"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="tableCell col-middle withLay inputContainer">
                                <div className="row margin0">
                                    <div className="row-sm-height">
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle outcomeKoefBooks">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="form-group">
                                                        <input className="koef form-control input-xs input4spaces"
                                                                data-outcome_number="1"
                                                                type="text"
                                                                id="outcome1_koef"
                                                                value="2.02"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle outcomeKoefCommission">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="form-group">
                                                        <input className="form-control input-xs commission input2spaces"
                                                                type="text"
                                                                data-outcome_number="1"
                                                                id="outcome1_commission"
                                                                value="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left floatLeft col-sm-height padding_left_5 col-middle outcomeKoefStatic">
                                            <div className="inside">
                                                <div className="content">
                                                    <span className="bold" title="2.02"
                                                            id="outcome1_koef_static">2.02</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="form-group">
                                                        <input className="form-control input-xs stake input5spaces"
                                                                type="text" value="0"
                                                                data-outcome_number="1"
                                                                id="outcome1_stake"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle withSelect ">
                                            <div className="inside">
                                                <div className="content selectCurrency">
                                                    <select className="select input-xs rate sel"
                                                            data-outcome_number="1"
                                                            name="currency"
                                                            id="outcome1_currency">
                                                        <option value="1"
                                                                selected="selected">
                                                            USD
                                                        </option>
                                                        <option value="2">
                                                            EUR
                                                        </option>
                                                        <option value="3">
                                                            RUB
                                                        </option>
                                                        <option value="4">
                                                            UAH
                                                        </option>
                                                        <option value="5">
                                                            KZT
                                                        </option>
                                                        <option value="6">
                                                            BYR
                                                        </option>
                                                        <option value="7">
                                                            GBP
                                                        </option>
                                                        <option value="8">
                                                            WMZ
                                                        </option>
                                                        <option value="9">
                                                            WME
                                                        </option>
                                                        <option value="10">
                                                            WMR
                                                        </option>
                                                        <option value="11">
                                                            WMU
                                                        </option>
                                                        <option value="12">
                                                            WMB
                                                        </option>
                                                        <option value="13">
                                                            PLN
                                                        </option>
                                                        <option value="14">
                                                            CAD
                                                        </option>
                                                        <option value="15">
                                                            TRY
                                                        </option>
                                                        <option value="16">
                                                            MDL
                                                        </option>
                                                        <option value="17">
                                                            SEK
                                                        </option>
                                                        <option value="18">
                                                            SGD
                                                        </option>
                                                        <option value="21">
                                                            MYR
                                                        </option>
                                                        <option value="30">
                                                            AUD
                                                        </option>
                                                        <option value="31">
                                                            RON
                                                        </option>
                                                        <option value="35">
                                                            BTC
                                                        </option>
                                                        <option value="38">
                                                            DKK
                                                        </option>
                                                        <option value="41">
                                                            BRL
                                                        </option>
                                                        <option value="47">
                                                            BYN
                                                        </option>
                                                        <option value="50">
                                                            mBT
                                                        </option>
                                                        <option value="56">
                                                            NOK
                                                        </option>
                                                        <option value="60">
                                                            GEL
                                                        </option>
                                                        <option value="66">
                                                            CNY
                                                        </option>
                                                        <option value="67">
                                                            MXN
                                                        </option>
                                                        <option value="68">
                                                            JPY
                                                        </option>
                                                        <option value="69">
                                                            PEN
                                                        </option>
                                                        <option value="70">
                                                            COP
                                                        </option>
                                                        <option value="71">
                                                            INR
                                                        </option>
                                                        <option value="72">
                                                            HUF
                                                        </option>
                                                        <option value="73">
                                                            CHF
                                                        </option>
                                                    </select>
                                                    <input type="hidden"
                                                            name="outcome1_rate"
                                                            id="outcome1_rate" value="1"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle withCheckboxes">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="radioCalc">
                                                        <input type="radio" value="1"
                                                                name="stake_fix"
                                                                data-outcome_number="1"
                                                                id="outcome1_stake_fix"/>
                                                        <label htmlFor="outcome1_stake_fix"><i
                                                                className="fa fa-circle-thin"></i></label>
                                                    </div>
                                                    <div className="checkboxCalc">
                                                        <input type="checkbox"
                                                                value="true"
                                                                id="outcome1_stake_distr"
                                                                data-bet_number="1"
                                                                className="distr"
                                                                data-outcome_number="1"
                                                                name="outcome1_stake_distr"
                                                                checked=""/>
                                                        <label htmlFor="outcome1_stake_distr"><span
                                                                className="far fa-check-square"></span></label>
                                                    </div>
                                                    <input type="hidden"
                                                            name="outcome1_stake_percent"
                                                            id="outcome1_stake_percent"
                                                            value="0.5"/>
                                                    <input type="hidden"
                                                            name="outcome1_updated"
                                                            id="outcome1_updated"
                                                            value="false"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row lay col-middle  margin0">
                                    <div className="row-sm-height displayTable">
                                        <div className="tableCell lay_koef_cell padding_left_5 text-right col-sm-height col-middle">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="form-group">
                                                        <input className="koef_lay form-control input4spaces input-xs"
                                                                data-outcome_number="1"
                                                                type="text"
                                                                id="outcome1_koef_lay"
                                                                value="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tableCell text-right lay_title_cellcol-sm-height col-middle">
                                            <div className="inside">
                                                <div className="content">
                                                    <span className="layTitle">
                                                        Lay
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tableCell stakeCurrency lay_stake_cellcol-sm-height col-middle">
                                            <div className="row margin0">
                                                <div className="row-sm-height">
                                                    <div className="padding_left_5 text-center col-sm-height col-middle">
                                                        <div className="inside">
                                                            <div className="content">
                                                                <div className="form-group">
                                                                    <input className="form-control input5spaces input-xs stake_lay"
                                                                            type="text"
                                                                            value="0"
                                                                            data-outcome_number="1"
                                                                            id="outcome1lay_stake"/>
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
                            <div className="tableCell col-middle text-center calcKoef calcKoefBg">
                                <div className="row-sm-height">
                                    <div className="inside">
                                        <div className="content">
                                            <div className="calcKoef" title="1.00"
                                                    id="outcome1_revenue">1.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row outcomeCalc outcome_2 displayTable">
                            <div className="tableCell col-middle outcomeCalcTitle">
                                <div className="row margin0">
                                    <div className="row-sm-height">
                                        <div className="col-xs-12 padding2_5 text-center col-sm-height col-middle">
                                            <div className="inside">
                                                <div className="content outcomeLinkContainer">
                                                    <span className="copy-team-name copy-event-name-js" title="Copy"
                                                        data-to-copy="FC Zorya Luhansk">
                                                        <span className="glyphicon glyphicon-duplicate"></span>
                                                    </span>
                                                    <a href="https://www.betburger.com/prices"
                                                    className="check_for_russia is_disabled-hbs"
                                                    rel="nofollow"
                                                    title="Arb in FC Zorya Luhansk - AEK Athens">AH1(0)</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tableCell col-middle bookmakersSelect relative">
                                <div className="text-center col-sm-height col-middle withBookmakerList">
                                    <div className="inside bookmakersCol">
                                        <div id="bookmakers_1_scroll">
                                            <div className="content bookmakersSection scroller">
                                                <ul multiple="" className="bookmakersSelect multipleRows">
                                                    <li data-bet_id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA" data-bookmaker_id="1" data-bet_number="1" className=" sameOutcome   bg-color-">
                                                        <div className="row margin0 height100">
                                                            <div className="row-sm-height">
                                                                <div className="text-center col-sm-height col-middle">
                                                                    <div className="inside">
                                                                        <div className="content">
                                                                            <div className="bookmakerListRow text-left padding2_5">
                                                                                <a className="excludeBookmakerEvent"
                                                                                data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA"
                                                                                data-bet_number="1"
                                                                                href="https://www.betburger.com/arbs#"
                                                                                title="[missing &quot;en.arbs_page.delete_bet&quot; translation]"><span></span></a>
                                                                                <span className="bookmaker">Pinnacle()</span>
                                                                            </div>
                                                                            <div className="directLinkListRow text-left padding2_5">
                                                                                <a className="directLink"
                                                                                target="_blank"
                                                                                href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                title="Asian Handicap1(0)">
                                                                                    <span className="icomoon-redo2"></span></a>
                                                                            </div>
                                                                            <div className="koefLinkListRow text-left padding2_5">
                                                                                <a hreh="#"
                                                                                className="refreshOutcomeCalc koefRefresh bold"
                                                                                title="Refresh koef"
                                                                                data-bet_number="1">
                                                                                    <span title="Refresh outcome odds">2.02</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="content bookmakersSectionSingle">
                                                <div multiple="" className="bookmakersSelect singleRow">
                                                    <a className="excludeBookmakerEvent" data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA" data-bet_number="1" href="https://www.betburger.com/arbs#" title="Hide Bet"><span className="fa fa-close"></span></a>
                                                    <select className="input-xs singleSelect1 bg-color-" data-number="1" data-active="false">
                                                        <option className="bg-color-"
                                                                selected=""
                                                                value="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA">
                                                            Pinnacle: 2.02 ()
                                                        </option>
                                                    </select>
                                                    <a href="https://www.betburger.com/arbs#" className="refreshOutcomeCalc" title="Refresh koef" data-bet_number="1">
                                                        <span title="Refresh outcome odds" className="fa fa-refresh"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="tableCell col-middle withLay inputContainer">
                                <div className="row margin0">
                                    <div className="row-sm-height">
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle outcomeKoefBooks">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="form-group">
                                                        <input className="koef form-control input-xs input4spaces"
                                                                data-outcome_number="1"
                                                                type="text"
                                                                id="outcome1_koef"
                                                                value="2.02"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle outcomeKoefCommission">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="form-group">
                                                        <input className="form-control input-xs commission input2spaces"
                                                                type="text"
                                                                data-outcome_number="1"
                                                                id="outcome1_commission"
                                                                value="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left floatLeft col-sm-height padding_left_5 col-middle outcomeKoefStatic">
                                            <div className="inside">
                                                <div className="content">
                                                    <span className="bold" title="2.02"
                                                            id="outcome1_koef_static">2.02</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="form-group">
                                                        <input className="form-control input-xs stake input5spaces"
                                                                type="text" value="0"
                                                                data-outcome_number="1"
                                                                id="outcome1_stake"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle withSelect ">
                                            <div className="inside">
                                                <div className="content selectCurrency">
                                                    <select className="select input-xs rate sel"
                                                            data-outcome_number="1"
                                                            name="currency"
                                                            id="outcome1_currency">
                                                        <option value="1"
                                                                selected="selected">
                                                            USD
                                                        </option>
                                                        <option value="2">
                                                            EUR
                                                        </option>
                                                        <option value="3">
                                                            RUB
                                                        </option>
                                                        <option value="4">
                                                            UAH
                                                        </option>
                                                        <option value="5">
                                                            KZT
                                                        </option>
                                                        <option value="6">
                                                            BYR
                                                        </option>
                                                        <option value="7">
                                                            GBP
                                                        </option>
                                                        <option value="8">
                                                            WMZ
                                                        </option>
                                                        <option value="9">
                                                            WME
                                                        </option>
                                                        <option value="10">
                                                            WMR
                                                        </option>
                                                        <option value="11">
                                                            WMU
                                                        </option>
                                                        <option value="12">
                                                            WMB
                                                        </option>
                                                        <option value="13">
                                                            PLN
                                                        </option>
                                                        <option value="14">
                                                            CAD
                                                        </option>
                                                        <option value="15">
                                                            TRY
                                                        </option>
                                                        <option value="16">
                                                            MDL
                                                        </option>
                                                        <option value="17">
                                                            SEK
                                                        </option>
                                                        <option value="18">
                                                            SGD
                                                        </option>
                                                        <option value="21">
                                                            MYR
                                                        </option>
                                                        <option value="30">
                                                            AUD
                                                        </option>
                                                        <option value="31">
                                                            RON
                                                        </option>
                                                        <option value="35">
                                                            BTC
                                                        </option>
                                                        <option value="38">
                                                            DKK
                                                        </option>
                                                        <option value="41">
                                                            BRL
                                                        </option>
                                                        <option value="47">
                                                            BYN
                                                        </option>
                                                        <option value="50">
                                                            mBT
                                                        </option>
                                                        <option value="56">
                                                            NOK
                                                        </option>
                                                        <option value="60">
                                                            GEL
                                                        </option>
                                                        <option value="66">
                                                            CNY
                                                        </option>
                                                        <option value="67">
                                                            MXN
                                                        </option>
                                                        <option value="68">
                                                            JPY
                                                        </option>
                                                        <option value="69">
                                                            PEN
                                                        </option>
                                                        <option value="70">
                                                            COP
                                                        </option>
                                                        <option value="71">
                                                            INR
                                                        </option>
                                                        <option value="72">
                                                            HUF
                                                        </option>
                                                        <option value="73">
                                                            CHF
                                                        </option>
                                                    </select>
                                                    <input type="hidden"
                                                            name="outcome1_rate"
                                                            id="outcome1_rate" value="1"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center floatLeft col-sm-height padding_left_5 col-middle withCheckboxes">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="radioCalc">
                                                        <input type="radio" value="1"
                                                                name="stake_fix"
                                                                data-outcome_number="1"
                                                                id="outcome1_stake_fix"/>
                                                        <label htmlFor="outcome1_stake_fix"><span
                                                                className="fa fa-circle-thin"></span></label>
                                                    </div>
                                                    <div className="checkboxCalc">
                                                        <input type="checkbox"
                                                                value="true"
                                                                id="outcome1_stake_distr"
                                                                data-bet_number="1"
                                                                className="distr"
                                                                data-outcome_number="1"
                                                                name="outcome1_stake_distr"
                                                                checked=""/>
                                                        <label htmlFor="outcome1_stake_distr"><span
                                                                className="far fa-check-square"></span></label>
                                                    </div>
                                                    <input type="hidden"
                                                            name="outcome1_stake_percent"
                                                            id="outcome1_stake_percent"
                                                            value="0.5"/>
                                                    <input type="hidden"
                                                            name="outcome1_updated"
                                                            id="outcome1_updated"
                                                            value="false"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row lay col-middle  margin0">
                                    <div className="row-sm-height displayTable">
                                        <div className="tableCell lay_koef_cell padding_left_5 text-right col-sm-height col-middle">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="form-group">
                                                        <input className="koef_lay form-control input4spaces input-xs"
                                                                data-outcome_number="1"
                                                                type="text"
                                                                id="outcome1_koef_lay"
                                                                value="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tableCell text-right lay_title_cellcol-sm-height col-middle">
                                            <div className="inside">
                                                <div className="content">
                                                    <span className="layTitle">
                                                        Lay
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tableCell stakeCurrency lay_stake_cellcol-sm-height col-middle">
                                            <div className="row margin0">
                                                <div className="row-sm-height">
                                                    <div className="padding_left_5 text-center col-sm-height col-middle">
                                                        <div className="inside">
                                                            <div className="content">
                                                                <div className="form-group">
                                                                    <input className="form-control input5spaces input-xs stake_lay"
                                                                            type="text"
                                                                            value="0"
                                                                            data-outcome_number="1"
                                                                            id="outcome1lay_stake"/>
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
                            <div className="tableCell col-middle text-center calcKoef calcKoefBg">
                                <div className="row-sm-height">
                                    <div className="inside">
                                        <div className="content">
                                            <div className="calcKoef" title="1.00"
                                                    id="outcome1_revenue">1.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div className="row lightGray bottomPanel">
                            <div className="row-sm-height relative">
                                <div className="absoluteLeft text-right col-sm-height col-middle leftIconsContainer">
                                    <div className="row-sm-height">
                                        <div className="col-xs-3 text-center col-sm-height col-middle refreshCalcContainer">
                                            <div className="inside">
                                                <div className="content">
                                                    <div className="refresh"></div>
                                                    <div className="checkboxCalcNewView showSection">
                                                        <a id="changeArbView"
                                                            href="https://www.betburger.com/arbs#"
                                                            data-show="hide"
                                                            title="Arbs grouped by event">
                                                            <span className="icomoon-menu changeArbViewIco"
                                                                    aria-hidden="true"></span>
                                                            <span className="checkbox-state"></span>
                                                        </a>
                                                    </div>
                                                    <div className="copyToClickSection">
                                                        <a href="https://www.betburger.com/arbs#"
                                                            className="copyToClick"
                                                            title="Copy" id="copy_button"
                                                            data-clipboard-text="05-11-2020 15:00 Soccer.Zorya Lugansk - AEK Athens (Europe. UEFA Europa League) [1st half] 1.00%Pinnacle	AH1(0)	2.02	50.00	USD	1.00 Sportmarket	AH2(0)	2.02	50.00	USD	1.00">
                                                            <span className="icomoon-copy3"></span>
                                                        </a>
                                                    </div>
                                                    <div className="saveToAccountingSection">
                                                        <a href="https://www.betburger.com/arbs#"
                                                            className="saveToAccounting"
                                                            title="Save to accounting">
                                                            
                                                            <span style={{fontSize:"20px"}} className="glyphicon glyphicon-duplicate"></span>
                                                        </a>
                                                    </div>
                                                    <div className="saveToAccountingSection">
                                                        <a href="https://www.betburger.com/arbs#"
                                                            className="saveToAccounting"
                                                            title="Save to accounting">
                                                            
                                                            <span style={{fontSize:"20px"}} className="fas fa-medkit"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absoluteRight col-sm-height col-middle roundInputTitle">
                                    <div className="row-sm-height">
                                        <div className="text-right col-sm-height col-middle">
                                            <div className="inside">
                                                <div className="content">
                                                    <span className="round-stake">
                                                        Round to:
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                                <div className="absoluteRight bottomInputContainer col-sm-height">
                                    <div className="row-sm-height inputContainer">
                                        <div className="col-sm-height text-center floatLeft padding_left_5 col-middle outcomeKoefBooks roundInput">
                                            <div className="row-sm-height">
                                                <div className="text-center col-sm-height col-middle">
                                                    <div className="inside">
                                                        <div className="content">
                                                            <div className="form-group">
                                                                <input type="text"
                                                                        className="input-xs input4spaces form-control"
                                                                        id="round_stake"
                                                                        data-outcome_number="total"
                                                                        value="0.01"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="outcomeKoefCommission text-center floatLeft padding_left_5 col-sm-height">
                                            <div className="input2spaces"></div>
                                        </div>
                                        <div className="outcomeKoefStatic text-center floatLeft padding_left_5 col-sm-height"></div>
                                        <div className="col-sm-height col-middle text-center floatLeft padding_left_5 bottomTotalStake">
                                            <div className="row-sm-height">
                                                <div className="text-center col-sm-height col-middle">
                                                    <div className="inside">
                                                        <div className="content">
                                                            <div className="form-group">
                                                                <input type="text"
                                                                        className="input-xs form-control stake input5spaces"
                                                                        id="total_stake"
                                                                        data-outcome_number="total"
                                                                        value="100"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-height col-middle withSelect text-center floatLeft padding_left_5">
                                            <div className="row-sm-height">
                                                <div className="text-center col-sm-height col-middle">
                                                    <div className="inside">
                                                        <div className="content selectCurrency">
                                                            <select className="select input-xs sel rate"
                                                                    name="currency"
                                                                    id="total_currency"
                                                                    data-bookmaker_id="0">
                                                                <option value="1"
                                                                        selected="selected">
                                                                    USD
                                                                </option>
                                                                <option value="2">
                                                                    EUR
                                                                </option>
                                                                <option value="3">
                                                                    RUB
                                                                </option>
                                                                <option value="4">
                                                                    UAH
                                                                </option>
                                                                <option value="5">
                                                                    KZT
                                                                </option>
                                                                <option value="6">
                                                                    BYR
                                                                </option>
                                                                <option value="7">
                                                                    GBP
                                                                </option>
                                                                <option value="8">
                                                                    WMZ
                                                                </option>
                                                                <option value="9">
                                                                    WME
                                                                </option>
                                                                <option value="10">
                                                                    WMR
                                                                </option>
                                                                <option value="11">
                                                                    WMU
                                                                </option>
                                                                <option value="12">
                                                                    WMB
                                                                </option>
                                                                <option value="13">
                                                                    PLN
                                                                </option>
                                                                <option value="14">
                                                                    CAD
                                                                </option>
                                                                <option value="15">
                                                                    TRY
                                                                </option>
                                                                <option value="16">
                                                                    MDL
                                                                </option>
                                                                <option value="17">
                                                                    SEK
                                                                </option>
                                                                <option value="18">
                                                                    SGD
                                                                </option>
                                                                <option value="21">
                                                                    MYR
                                                                </option>
                                                                <option value="30">
                                                                    AUD
                                                                </option>
                                                                <option value="31">
                                                                    RON
                                                                </option>
                                                                <option value="35">
                                                                    BTC
                                                                </option>
                                                                <option value="38">
                                                                    DKK
                                                                </option>
                                                                <option value="41">
                                                                    BRL
                                                                </option>
                                                                <option value="47">
                                                                    BYN
                                                                </option>
                                                                <option value="50">
                                                                    mBT
                                                                </option>
                                                                <option value="56">
                                                                    NOK
                                                                </option>
                                                                <option value="60">
                                                                    GEL
                                                                </option>
                                                                <option value="66">
                                                                    CNY
                                                                </option>
                                                                <option value="67">
                                                                    MXN
                                                                </option>
                                                                <option value="68">
                                                                    JPY
                                                                </option>
                                                                <option value="69">
                                                                    PEN
                                                                </option>
                                                                <option value="70">
                                                                    COP
                                                                </option>
                                                                <option value="71">
                                                                    INR
                                                                </option>
                                                                <option value="72">
                                                                    HUF
                                                                </option>
                                                                <option value="73">
                                                                    CHF
                                                                </option>
                                                            </select>
                                                            <input type="hidden"
                                                                    name="total_rate"
                                                                    id="total_rate"
                                                                    value="1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-height col-middle withCheckboxes text-center floatLeft padding_left_5">
                                            <div className="row-sm-height">
                                                <div className="text-left col-sm-height col-middle">
                                                    <div className="inside">
                                                        <div className="content">
                                                            <div className="radioCalc">
                                                                <input type="radio"
                                                                        value="total"
                                                                        name="stake_fix"
                                                                        className="radio"
                                                                        id="total_stake_fix"
                                                                        checked="checked"/>
                                                                <label htmlFor="total_stake_fix"><span
                                                                        className="radio_button_checked"></span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-height col-middle text-right calcKoef">
                                    <div className="row-sm-height">
                                        <div className="col-sm-height col-middle">
                                            <div className="inside">
                                                <div className="content">
                                                    <a href="https://www.betburger.com/arbs#"
                                                        className="placeBets"
                                                        title="Put stake">
                                                        <span className="fas fa-crosshairs"></span>
                                                    </a>
                                                    <a href="https://www.betburger.com/arbs#"
                                                        className="calculateTotal"
                                                        title="Calculate">
                                                        <span className="fas fa-calculator"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="calcModalReportWindow"></div>
                        <div className="noAuthorize"></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Table1;
