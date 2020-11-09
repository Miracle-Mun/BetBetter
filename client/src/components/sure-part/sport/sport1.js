import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { getAllBookmarks, getAllSports } from '../../../store/actions/betActions';

class Sport1 extends Component {

    constructor() {
        super();
        // this.state = {
        //     bookmarks: '',
        //     sports: ''
        // }
    }

    cleanDate (d) {
              
        var print_Date = '';
        print_Date=new Intl.DateTimeFormat('en-US', {month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(d)
        return print_Date;

    }

    componentDidMount() {
        this.props.getAllBookmarks();
        this.props.getAllSports();
    }

    render() {
        var betList = <div>Loading...</div>

        const betdata = this.props.betdata;
        const arbsdata = this.props.arbsdata;

        const bookmarks = this.props.bookmarks;
        const sports = this.props.sports;

        console.log(bookmarks);

        if(arbsdata.length > 0){
            betList = arbsdata.map(arbs => {
                return (
                    <li className="arb_f697fb91e3e507ca83f2150d91a6ebba event_214433770">
                        <div className="col-xs-12 arb-item-body-js">
                            <div className="arbHead row relative">
                                <div className="row-sm-height">
                                    <div className="absoluteLeft padding5px percent col-sm-height col-middle betPercent">
                                        <div className="inside">
                                            <div className="content">
                                                <span>{arbs.percent}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 blueBg  col-sm-height col-middle selected">
                                        <div className="inside">
                                            <div className="content">
                                                <div className="row height100">
                                                    <div className="row-sm-height displayTable">
                                                        <div className="tableCell middle text-center col-sm-height col-middle">
                                                            <div className="inside">
                                                                <div className="content">
                                                                    <span title="0.00">
                                                                        0.00
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tableCell padding5px col-sm-height col-middle sportPeriod">
                                                            <span className="sport" title="Soccer">
                                                                {
                                                                    sports.map(sport => {
                                                                        return (
                                                                            sport.id == arbs.sport_id && sport.name
                                                                        )  
                                                                    })
                                                                }
                                                            </span>
                                                                                                           </div>
                                                        <div className="tableCell col-sm-height relative col-middle text-left wrongItemsCell">
                                                        </div>
                                                        <div className="tableCell col-sm-height col-middle excludedContainer text-right">
                                                            <div className="inside">
                                                                <div className="content">
                                                                    <a href="https://www.betburger.com/arbs#"
                                                                    className="ageTime">
                                                                        <span className="icomoon-clock"><i className="material-icons" style={{fontSize: "13px", marginRight: "3px",}}>&#xe192;</i></span>
                                                                        1 h
                                                                    </a>
                                                                    <a href="https://www.betburger.com/arbs#"
                                                                    className="dropdown-toggle"
                                                                    title="Hide menu">
                                                                        <span className="icomoon-remove2"><span className="icomoon-clock"><i className="glyphicon" style={{fontSize: "13px"}}>&#xe020;</i></span></span>
                                                                    </a>
                                                                    <a href="https://www.betburger.com/calculator?is_live=0#%7B%22arb%22:%7B%22id%22:%22f697fb91e3e507ca83f2150d91a6ebba%22,%22event_id%22:214433770,%22arb_formula_id%22:1,%22percent%22:1,%22started_at%22:1604606400,%22event_name%22:%22Zorya%20Lugansk%20-%20AEK%20Athens%22,%22league%22:%22Europe.%20UEFA%20Europa%20League%22,%22league_id%22:9428,%22sport_id%22:7,%22country_id%22:11,%22home_id%22:10248,%22away_id%22:4627,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_id%22:5%7D,%22live%22:false,%22bets%22:%5B%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84466837,%22bookmaker_id%22:1,%22period_id%22:5,%22bc_id%22:103,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:103,%22title%22:%22F-F1(0.0)%22,%22mv_id%22:17,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:5,%22value%22:0,%22reverse_id%22:330,%22reverse_value%22:null,%22etalon_id%22:103,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:17,%22title%22:%22F-F1%22,%22market_id%22:3,%22bet_variation_id%22:5,%22swap_id%22:18%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:1%7D,%7B%22home%22:%22FC%20Zorya%20Luhansk%22,%22away%22:%22AEK%20Athens%22,%22id%22:%22ODQ0NzcxMDZ8MTgsMC4wLDUsMCwwLDA%22,%22koef%22:2.02,%22commission%22:0,%22bookmaker_event_id%22:84477106,%22bookmaker_id%22:105,%22period_id%22:5,%22bc_id%22:330,%22direct_link%22:%22%22,%22koef_lay%22:0,%22is_lay%22:0,%22koef_commissed%22:2.02,%22period%22:%7B%22id%22:5,%22title%22:%221st%22,%22identifier%22:%221%22%7D,%22bet_combination%22:%7B%22id%22:330,%22title%22:%22F-F2(0.0)%22,%22mv_id%22:18,%22value_id%22:105,%22synonym_id%22:null,%22m_id%22:3,%22bv_id%22:6,%22value%22:0,%22reverse_id%22:103,%22reverse_value%22:null,%22etalon_id%22:330,%22created_at%22:1389619769,%22updated_at%22:1510297571,%22is_valid%22:true,%22pl1_id%22:null,%22pl2_id%22:null%7D,%22bet_value%22:%7B%22id%22:105,%22value%22:0%7D,%22market_variation%22:%7B%22id%22:18,%22title%22:%22F-F2%22,%22market_id%22:3,%22bet_variation_id%22:6,%22swap_id%22:17%7D,%22sport%22:%7B%22id%22:7,%22name%22:%22Soccer%22%7D,%22period_name_by_sport_t%22:%221st%20half%22,%22bet_path%22:%22/prices%22,%22bet_number%22:2%7D%5D%7D"
                                                                    className="standalone-calculator"
                                                                    title="Open in new view">
                                                                        <span className="brankic-pop-out"><i className="glyphicon" style={{fontSize: "19px", paddingLeft: '5px'}}>&#xe066;</i></span>
                                                                    </a>
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
                            {
                                betdata.map(bets => {
                                    if(bets.id==arbs.bet1_id || bets.id==arbs.bet2_id || bets.id==arbs.bet3_id){
                                        return (
                                            <div className="bet_1 row relative">
                                                <div className="row-sm-height betHeight displayTable">
                                                    <div className="tableCell padding5px col-sm-height col-middle betBookmaker  ">
                                                        <div className="row height100">
                                                            <div className="row-sm-height">
                                                                <div className="col-xs-12 col-sm-height col-middle betBookmaker">
                                                                    <div className="inside">
                                                                        <div className="content bookmakerLinkContainer">
                                                                            {
                                                                                bookmarks.map(bookmark => {
                                                                                    return (
                                                                                        bookmark.id == bets.bookmaker_id && bookmark.name
                                                                                    )  
                                                                                })
                                                                            }
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tableCell padding5px col-sm-height col-middle betTimeSection">
                                                        <div className="row">
                                                            <div className="row-sm-height">
                                                                <div className="col-xs-12 col-sm-height col-middle betTime">
                                                                    <div className="inside">
                                                                        <div className="content timeContainer">
                                                                            {
                                                                                this.cleanDate(arbs.started_at*1000)   
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tableCell padding5px col-sm-height col-middle height100 betMainSection">
                                                        <div className="inside height100">
                                                            <div className="content eventLegueName height100">
                                                                <div className="row height100">
                                                                    <div className="row-sm-height">
                                                                        <div className="col-xs-9 col-sm-height col-middle betLeague">
                                                                            <a className="copy-team-name copy-team-name-js"
                                                                                title="Copy"
                                                                                data-to-copy="FC Zorya Luhansk">
                                                                                <span className="icomoon-copy3"><span class="glyphicon" style={{fontSize: "10px"}}>&#xe224;</span></span>
                                                                            </a>
                                                                            <div>
                                                                                <a href="https://www.betburger.com/compare#sports/7/countries/11/leagues/9428/events/214433770?period=1&amp;market_id=3"
                                                                                    target="_blank"
                                                                                    rel="nofollow"
                                                                                    title="Arb in FC Zorya Luhansk - AEK Athens"
                                                                                    arb_type_id="2">
                                                                                    {bets.bookmaker_event_name}
                                                                                </a>
                                                                            </div>
                                                                            <small className="text-muted"
                                                                                    title="UEFA - Europa League">
                                                                                {bets.bookmaker_league_name}</small>
                                                                        </div>
                                                                        <div className="col-xs-3 col-sm-height col-middle col-sm-height col-middle">
                                                                            <div className="inside">
                                                                                <div className="content text-center compareLinkContainer">
                                                                                    <a href="https://www.betburger.com/arbs#"
                                                                                        className="check_for_russia is_disabled-hbs"
                                                                                        rel="nofollow"
                                                                                        title="Asian Handicap1(0)">
                                                                                        {bets.market_and_bet_type}({bets.market_and_bet_type_param})
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tableCell padding5px col-sm-height col-middle betMarketDeep">
                                                        <div className="inside">
                                                            <div className="content text-right relative outcomeKoef">
                                                                {bets.diff==2 &&
                                                                    <span className="icomoon-arrow-down gray ">
                                                                        <i style={{fontSize:"12px", marginRight: "3px", color: "red"}} class='fas'>&#xf309;</i>
                                                                    </span>
                                                                }
                                                                {
                                                                    bets.diff==1 &&
                                                                    <span className="icomoon-arrow-up gray ">
                                                                        <i style={{fontSize:"12px", marginRight: "3px", color: "green"}} class='fas'>&#xf30c;</i>
                                                                    </span>
                                                                }                                                            
                                                                                                                                                  
                                                                <a href="https://www.betburger.com/arbs#" className="koef check_for_russia is_disabled-hbs" rel="nofollow" koef_eu="2.02" title="Odd 2.02 on the outcome AH1(0) of event FC Zorya Luhansk - AEK Athens">
                                                                    {bets.koef.toFixed(2)}
                                                                </a>

                                                                <div>
                                                                    <small className="currency"
                                                                            title=""></small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tableCell padding5px col-sm-height col-middle betExclude">
                                                        <a href="https://www.betburger.com/arbs#"
                                                            className="removeOutcome"
                                                            data-id="ODQ0NjY4Mzd8MTcsMC4wLDUsMCwwLDA"
                                                            title="Hide Bet">
                                                            <span className="brankic-cancel3"><i style={{fontSize:"12px"}} className="fa">&#xf00d;</i></span></a>
                                                    </div>
                                                </div>
                                            </div>   
                                        )
                                    }
                                })
                            }
                        </div>
                    </li>
                )
            });
        } 
        return (
            <ul>
                { betList }
            </ul>
        );
    }
}

Sport1.propTypes = {
    getAllBookmarks: PropTypes.func.isRequired,
    getAllSports: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        bookmarks: state.bets.bookmarks,
        sports: state.bets.sports
    }
}

export default connect(mapStateToProps, {getAllBookmarks, getAllSports})(Sport1)
