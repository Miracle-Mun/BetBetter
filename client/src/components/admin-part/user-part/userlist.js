import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import {getAllUsers} from '../../../store/actions/adminActions';
import {DeleteUser} from '../../../store/actions/adminActions';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            id:"",
        };
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

      handleDeleteClick(evt) {
        const user_id={
            id:evt.target.id,
        }
        console.log(evt.target.td);
        this.props.DeleteUser(user_id);
      };
    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        const users = this.props.users;
        const tablebody=users.map(value => 
            <tr>
                <td style={{text_align: "center"}}>
                    {value.id}
                </td>
                <td style={{text_align: "center"}}>
                    {value.name}
                </td>
                <td style={{text_align: "center"}}>
                    {value.username}
                </td>
                <td style={{text_align: "center"}}>
                    {value.email}
                </td>
                <td style={{text_align: "center"}}>
                    {value.Role}
                </td>
                <td style={{text_align: "center"}}>
                    {value.From}
                </td>
                <td style={{text_align: "center"}}>
                    {value.To}
                </td>
                <td style={{text_align:"center"}}>
                    {value.id!='0' &&<span id={value.id} onClick={this.handleDeleteClick}><i className="fa fa-close" id={value.id}/></span>}
                </td>
            </tr>
        );
      return (
        <div className="active fade in tab-pane" id="user_tab">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>

                    </div>
                    <div className="page-header title font">
                        <h1>User_Lists</h1>
                    </div>
                    <div>
                        <div className="table-responsive">
                            <table className="table table-striped" id="profilePayments">
                                <thead>
                                    <tr>
                                        <th style={{text_align: "center"}}>User_id</th>
                                        <th style={{text_align: "center"}}>Name</th>
                                        <th style={{text_align: "center"}}>User Name</th>
                                        <th style={{text_align: "center"}}>Email</th>
                                        <th style={{text_align: "center"}}>Role</th>
                                        <th style={{text_align: "center"}}>From</th>
                                        <th style={{text_align: "center"}}>To</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                   {tablebody}
                                    
                                </tbody>
                            </table>
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
        users: state.admin.users
    }
}

export default connect(mapStateToProps, {getAllUsers, DeleteUser})(Users)

