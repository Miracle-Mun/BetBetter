import React, { Component } from 'react';

import Sport1 from './sport/sport1.js';

class HalfOne extends Component {
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
                                            <ul>
                                                <Sport1 />
                                                <Sport1 />
                                                <Sport1 />
                                                <Sport1 />
                                                <Sport1 />
                                                <Sport1 />
                                                <Sport1 />
                                                <Sport1 />
                                                <Sport1 />
                                                <Sport1 />
                                            </ul>
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

export default HalfOne;
