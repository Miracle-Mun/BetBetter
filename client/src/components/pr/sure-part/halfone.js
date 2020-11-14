import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import qs from 'querystring';


import Sport1 from './sport/sport1.js';

class HalfOne extends Component {
    constructor() {
        super()

        this.state = {
            arbsdata: '',
            betdata: ''
        }
    }

    getData(data) {
        
        axios.post('https://rest-api-pr.betburger.com/api/v1/arbs/bot_search', qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((result) => {
            // this.state.betdata = result.data.arbs;
            this.setState({
                arbsdata: result.data.arbs,
                betdata: result.data.bets
            });
        })
    }

    componentDidMount() {
        var search_filter = new Array;
        search_filter.push('412898');
        
        var data = {
            per_page: 30,
            search_filter: search_filter,
            access_token: 'eba00b6e28fd45f6b4eb9d180eb0f9ac'
        }

        this.getData(data);

        // setInterval(() => {
        //     this.getData(data);
        // }, 10000);
    }
  
    render() {
        return (
            <div className="col-xs-6 col-sm-height col-top leftSection height100">
                <div className="inside inside-full-height">
                    <div className="content sectionContentJs height100" data-padding="20">
                        <div className="arbsComponent height100">
                            <div className="arbListView height100">
                                <div className="row height100" id="leftArbList">
                                    <div className="col-xs-12 height100">
                                        <div id="arbsScroll" style={{touch_action: "none"}}>
                                            <div className="scroller" style={{transform: "translate(0px, 0px) translateZ(0px)"}}>
                                                <Sport1 betdata={this.state.betdata} arbsdata={this.state.arbsdata} />
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

const mapStateToProps = state => {
    return { 
        //betdata: state.betdata,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HalfOne)
