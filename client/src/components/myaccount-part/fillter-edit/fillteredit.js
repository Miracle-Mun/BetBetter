import React, { Component } from 'react';
import Bet from './bets-part.js';
import Sport from './sport-part.js';
import Button from './button-part.js';

class FilterEdit extends Component {

    render(){

        return(
            <div className="filtersFormPage container">
                <div>
                    <div className="page-header">
                        <h1>
                            Editing Multi Filter
                        </h1>
                    </div>
                    <div className="filterForms">
                        <form acceptCharset="UTF-8" action="https://www.betburger.com/user_filters" className="form-horizontal" id="new_user_multi_filter" method="post">
                            <Bet/>
                            <Sport/>
                            <Button/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterEdit;