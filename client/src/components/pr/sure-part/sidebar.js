import React, { Component } from 'react';

class PageContainer extends Component {
  render() {
    return (
        <div id="sidebar-wrapper" className=" fullHeight " style={{min_height: "650px"}}>
            <div className="subContainer height100">
                <div className="top-header"></div>
                <div className="col-xs-12 padding10">
                    <div className="filterPanel">
                        <span className="filterHeader arbsTypeSettings">Arbs type:</span>
                        <div className="list arbsType">
                            <ul>
                                <li>
                                    <div className="radio">
                                        <label htmlFor="isLiveArb">
                                            <input type="radio" id="isLiveArb" name="is_live" value="true" />
                                            Live
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="radio">
                                        <label htmlFor="isPrematchArb">
                                            <input type="radio" id="isPrematchArb" name="is_live" value="false"
                                                    checked=""/>
                                            Prematch
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <span className="filterHeader zoomSettings">Zoom:</span>
                        <div className="list zoomSettingsList">
                            <ul className="zooming">
                                <div className="selectContainer">
                                    <select name="per_page" className="zoomOption">
                                        <option value="100" selected="selected">100%</option>
                                        <option value="110">110%</option>
                                        <option value="120">120%</option>
                                    </select>
                                </div>
                            </ul>
                        </div>
                        <span className="filterHeader sortedFilter">Definições:</span>

                        <div className="list sortSettingsList">
                            <ul className="sorting">
                                <div className="selectContainer">
                                    <select name="per_page" className="sortOption">
                                        <option value="percent" selected="selected">Percentagem</option>
                                        <option value="age">Idade</option>
                                        <option value="beginningTime">Hora de início</option>
                                        <option value="middles">Middles</option>
                                        <option value="roi">ROI</option>
                                    </select>
                                </div>
                            </ul>
                        </div>
                        <span className="filterHeader">Settings:</span>
                        <div className="settingsList list">
                            <ul>
                                <li><input type="checkbox" value="" id="auto_update" name="auto_update" checked=""/>
                                    <label htmlFor="auto_update"><span className="checkbox"></span>
                                        <p>Atual. autom.</p></label>

                                </li>
                                <li className="notification_sound_js"><input type="checkbox" value=""
                                                                            id="notification_sound"
                                                                            name="notification_sound"/>
                                    <label htmlFor="notification_sound"><span className="checkbox"></span>
                                        <p>Alertas de som</p></label>

                                </li>
                                <li><input type="checkbox" value="" id="notification_popup"
                                            name="notification_popup"/>
                                    <label htmlFor="notification_popup"><span className="checkbox"></span>
                                        <p>Mostrar pop-ups</p></label>

                                </li>
                                <li><input type="checkbox" value="" id="grouped" name="grouped" checked=""/>
                                    <label htmlFor="grouped"><span className="checkbox"></span>
                                        <p>Surebet de grupo</p></label>

                                </li>
                                <li className="hiddenLi"><input type="hidden" value="" id="event_id" name="event_id"/>
                                </li>
                                <li className="hiddenLi"><input type="hidden" value="percent" id="sort_by"
                                                            name="sort_by"/>
                                </li>
                            </ul>
                            <span className="bookiesInArb">Surebets na página:</span>
                            <div className="selectContainer">
                                <select name="per_page" className="per_page">
                                    <option value="10" selected="selected">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                        </div>
                        <span className="filterHeader">Tipo de cotas:</span>
                        <div className="filtersList list">
                            <a href="/pt_bet" className="filter-error-popup" data-toggle="popover" data-trigger="focus" data-content="Maximum %s active filters"></a>
                            <ul>
                                <li><input type="checkbox" value="28783" id="sidebar_filter28783" name="demo"
                                            checked=""/>
                                    <label title="demo" data-id="sidebar_filter28783" className="editLinkLabel">
                                        <span className="checkbox"></span>
                                        <p>demo</p>
                                    </label>
                                    <a href="#" data-id="28783"
                                        target="_blank">
                                        <span className="editLink"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PageContainer;
