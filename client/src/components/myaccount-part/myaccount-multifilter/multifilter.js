import React, { Component } from 'react';


class MultiFilter extends Component {
  render() {
    return (
        <div className="fade tab-pane" id="multi_filters">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert hidden staticTop" role="alert"></div>
                    <div className="alert hidden flashAlert" role="alert"></div>
                </div>
                <div className="col-lg-10 col-md-9">
                    <div className="page-header title font">
                        <h1>Multifilters</h1>
                    </div>
                </div>
                <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active" role="presentation">
                            <a aria-controls="prematchMultiFilters" data-toggle="tab"
                               href="https://www.betburger.com/profile#prematchMultiFilters" role="tab">
                                Prematch
                            </a>
                        </li>
                        <li role="presentation">
                            <a aria-controls="liveMultiFilters" data-toggle="tab"
                               href="https://www.betburger.com/profile#liveMultiFilters" role="tab">
                                Live
                            </a>
                        </li>
                        <li role="presentation">
                            <a aria-controls="valuebetFilters" data-toggle="tab"
                               href="https://www.betburger.com/profile#valuebetFilters" role="tab">
                                Valuebet
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active fade in" id="prematchMultiFilters" role="tabpanel">
                            <br />
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th className="width200">Filter Name</th>
                                                <th>Date</th>
                                                <th className="settings">Edit</th>
                                                <th className="settings">Delete</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="multi_411062">
                                                <td className="filterId">
                                                    411062
                                                </td>

                                                <td className="width200 bold filterTitle">
                                                    default
                                                </td>

                                                <td data-format="MMMM DD, YYYY HH:mm"
                                                    data-time="1604064395">
                                                    <span>October 30, 2020 16:26</span>
                                                </td>
                                                <td className="settings">
                                                    <a className="ico-edit filter-edit"
                                                       href="#"
                                                       title="edit">
                                                        <i className="edit-icon"></i>
                                                    </a>
                                                </td>
                                                <td className="settings">
                                                    <a className="ico-delete filter-delete"
                                                       data-confirm="Are you sure?" data-method="delete"
                                                       data-remote="true"
                                                       href="/public"
                                                       rel="nofollow">
                                                        <i className="delete-icon"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-holder right addFilter">
                                <input className="btn blue" data-type="prematch" data-singe_filter="false"
                                       name="commit" type="button" value="Add filter" />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liveMultiFilters" role="tabpanel">
                            <br />
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th className="width200">Filter Name</th>
                                                <th>Date</th>
                                                <th className="settings">Edit</th>
                                                <th className="settings">Delete</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="multi_370063">
                                                <td className="filterId">
                                                    370063
                                                </td>

                                                <td className="width200 bold filterTitle">
                                                    default
                                                </td>

                                                <td data-format="MMMM DD, YYYY HH:mm"
                                                    data-time="1604064395">
                                                    <span>October 30, 2020 16:26</span>
                                                </td>
                                                <td className="settings">
                                                    <a className="ico-edit filter-edit"
                                                       href="#"
                                                       title="edit">
                                                        <i className="edit-icon"></i>
                                                    </a>
                                                </td>
                                                <td className="settings">
                                                    <a className="ico-delete filter-delete"
                                                       data-confirm="Are you sure?" data-method="delete"
                                                       data-remote="true"
                                                       href="/public"
                                                       rel="nofollow">
                                                        <i className="delete-icon"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-holder right">
                                <input className="btn blue addFilter" data-type="live" data-singe_filter="false"
                                       name="commit" type="button" value="Add filter" />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="valuebetFilters" role="tabpanel">
                            <br />
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th className="width200">Filter Name</th>
                                                <th>Date</th>
                                                <th className="settings">Type</th>
                                                <th className="settings">Edit</th>
                                                <th className="settings">Delete</th>
                                            </tr>
                                            </thead>
                                            <tbody id="valuebet-live">
                                            <tr className="multi_102591">
                                                <td className="filterId">
                                                    102591
                                                </td>

                                                <td className="width200 bold filterTitle">
                                                    default
                                                </td>

                                                <td data-format="MMMM DD, YYYY HH:mm"
                                                    data-time="1604064395">
                                                    <span>October 30, 2020 16:26</span>
                                                </td>
                                                <td className="settings">
                                                    <span>
                                                            Live
                                                    </span>
                                                </td>
                                                <td className="settings">
                                                    <a className="ico-edit filter-edit"
                                                       href="#"
                                                       title="edit">
                                                        <i className="edit-icon"></i>
                                                    </a>
                                                </td>
                                                <td className="settings">
                                                    <a className="ico-delete filter-delete"
                                                       data-confirm="Are you sure?" data-method="delete"
                                                       data-remote="true"
                                                       href="/public"
                                                       rel="nofollow">
                                                        <i className="delete-icon"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            </tbody>
                                            <tbody id="valuebet-prematch">
                                            <tr className="multi_116271">
                                                <td className="filterId">
                                                    116271
                                                </td>

                                                <td className="width200 bold filterTitle">
                                                    default
                                                </td>

                                                <td data-format="MMMM DD, YYYY HH:mm"
                                                    data-time="1604064395">
                                                    <span>October 30, 2020 16:26</span>
                                                </td>
                                                <td className="settings">
                                                    <span>
                                                            Prematch
                                                    </span>
                                                </td>
                                                <td className="settings">
                                                    <a className="ico-edit filter-edit"
                                                       href="#"
                                                       title="edit">
                                                        <i className="edit-icon"></i>
                                                    </a>
                                                </td>
                                                <td className="settings">
                                                    <a className="ico-delete filter-delete"
                                                       data-confirm="Are you sure?" data-method="delete"
                                                       data-remote="true"
                                                       href="/public"
                                                       rel="nofollow">
                                                        <i className="delete-icon"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-holder right">
                                <input className="btn green addFilter" data-type="valuebet-prematch"
                                       data-singe_filter="false" name="commit" type="button"
                                       value="Add Prematch filter" />
                                <input className="btn blue addFilter" data-type="valuebet-live"
                                       data-singe_filter="false" name="commit" type="button"
                                       value="Add Live filter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default MultiFilter;
