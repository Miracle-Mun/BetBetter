import React, { Component } from 'react';


class Dashboard extends Component {
  render() {
    return (
        <div>
        <h4 className="change-password-title">
            Change the current email/password
        </h4>
        <div className="row">
            <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                <hr className="password-form-hr" />
            </div>
        </div>
        <form className="editUserInfo row" id="edit_betburger_user_106424"
              action="https://www.betburger.com/users" acceptCharset="UTF-8" method="post"><input
                name="utf8" type="hidden" value="✓" /><input type="hidden" name="_method" value="put" /><input
                type="hidden" name="authenticity_token"
                value="GB0GDkXPyERGrgiKCS6rrNks71A1zfi+YtpiRh1d8RPxty3GUy4j2hOTrd7uqr6JN9g/h44BiunOw6IcaK8WGg==" />
            <div className="info-holder form-group col-sm-6 col-md-12">
                <div className="row">
                    <div className="col-md-5 col-xs-12 no-desc">
                        <label htmlFor="betburger_user_email">Email
                        </label></div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input autoFocus="autofocus" className="form-control"
                               value="alex1992818@outlook.com" type="text"
                               name="betburger_user[email]" id="betburger_user_email" />
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group col-sm-6 col-md-12 current-password-holder">
                <div className="row">
                    <div className="col-md-5 col-xs-12 with-desc">
                        <label className="with_description" htmlFor="betburger_user_current_password">Current
                            Password
                        </label><span className="small">(we need your current password to confirm your changes)</span>
                    </div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input autoComplete="off" className="form-control" type="password"
                               name="betburger_user[current_password]"
                               id="betburger_user_current_password" />
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group col-sm-6 col-md-12 new-password-holder">
                <div className="row">
                    <div className="col-md-5 col-xs-12 with-desc">
                        <label className="with_description" htmlFor="betburger_user_password">New password
                        </label><span
                            className="small">(leave blank if you don't want to change it)</span>
                    </div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input autoComplete="off" className="form-control" type="password"
                               name="betburger_user[password]" id="betburger_user_password" />
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group conform col-sm-6 col-md-12 password-confirmation-holder">
                <div className="row">
                    <div className="col-md-5 col-xs-12 no-desc">
                        <label htmlFor="betburger_user_password_confirmation">Password confirmation
                        </label></div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input autoComplete="off" className="form-control" type="password"
                               name="betburger_user[password_confirmation]"
                               id="betburger_user_password_confirmation" />
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group conform col-xs-12 password-update-holder">
                <div className="row">
                    <div className="col-md-10 col-xs-12 text-right">
                        <input className="btn blue" name="commit" type="submit" value="Update" />
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
  }
}

export default Dashboard;
