import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import getCustomerAction from './actions/getCustomersAction'

const Customers = props => {
  useEffect(() => {
    props.getCustomer();
  }, []);

  return (
    <div>
      Saldo saat ini: {props.saldo.wallet}
      <br />Daftar customer:
      <ul>
        {
          props.customers.map((customer) => (
            <li>{customer.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    saldo: state.transaction,
    customers: state.customers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomer: () => dispatch(getCustomerAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);