import React, { Component } from 'react';


class Payments extends Component {
  render() {
    return (
        <div className="tab-pane fade" id="payments">
            <div className="margin">
                <div className="col-lg-10 col-md-9">
                    <div className="alert alert-danger fade hide" style={{margin_top: "10px",}}>
                        <span aria-hidden="true" className="glyphicon glyphicon-exclamation-sign"></span>

                    </div>
                    <div className="page-header title font">
                        <h1>Payments</h1>
                    </div>
                    <div>
                        <div className="table-responsive">
                            <table className="table table-striped" id="profilePayments">
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Detalhes do pagamento</th>
                                    <th>Método de pagamento</th>
                                    <th>Montante</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td colSpan="5" style={{text_align: "center",}}>
                                        Você nunca pagou por nossos serviços.
                                    </td>
                                </tr>
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

export default Payments;
