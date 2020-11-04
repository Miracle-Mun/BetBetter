import React, { Component } from 'react';

import Sidebar from './sidebar';
import ContainerWrapper from './conwraper';

class PageContainer extends Component {
  render() {
    return (
        <div className="pageContainer" style={{height: "100%", min_height: "650px"}}>
            <div className="editFilterContainer" style={{display: "none"}}></div>
            <div className="arbs">
                <div className="arbContainer">
                    <div className="topRightGears">
                        <a className="topRightGearsLink" href="https://www.betburger.com/arbs#">
                            <span className="topMenu black" title=""></span>
                        </a>
                        <a className="scan_time" href="https://www.betburger.com/main/scans" title="Bookmaker&#39;s updates"
                        target="_blank">
                            <span className="icomoon-stopwatch"><i className="material-icons">&#xe192;</i></span>
                        </a>
                        <a className="load_plugin"
                        href="https://www.betburger.com/manual/arb-helper-plugin-for-direct-link-to-bookmakers"
                        title="Load Arb Helper" target="_blank">
                            <span className=""></span>
                        </a>
                    </div>
                    <Sidebar />
                    <ContainerWrapper />
                </div>
            </div>
        </div>
    );
  }
}

export default PageContainer;
