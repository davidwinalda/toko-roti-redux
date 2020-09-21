import axios from 'axios';

const getCustomerAction = () => {
  return (dispatch) => {
    axios.get("http://localhost:1234/users")
    .then((response) => {
      return dispatch ({
        type: 'GET_CUSTOMER_DATA',
        customers: response.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export default getCustomerAction;
