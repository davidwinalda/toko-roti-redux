//Initial State
const initialCustomer = [];

const getCustomerReducer = (state = initialCustomer, action) => {
  if (action.type === 'GET_CUSTOMER_DATA') {
    return action.customers;
  }
  return state;
}

export default getCustomerReducer;
