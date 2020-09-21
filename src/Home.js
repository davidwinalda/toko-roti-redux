import React from 'react';
import { connect } from 'react-redux';

// Import Action
import buatDonatAction from './actions/buatDonatAction';
import beliDonatAction from './actions/beliDonatAction';
import './App.css';

const Home = props => {
  return (
    <div className="App">
      <h1>TOKO ROTI</h1>
      <h2 style={{ textAlign: 'center', }}>Saldo {props.saldo.wallet}</h2>
      <div className="product">
        <div>Donut 0</div>
        <div>Cake 0</div>
      </div>
      <div className="wrapperIngredients">
        Ingredients
        <div className="ingredients">
          <div>TEPUNG {props.bahan.tepung}</div>
          <div>COKLAT {props.bahan.coklat}</div>
          <div>CHERRY {props.bahan.cherry}</div>
          <div>MENTEGA {props.bahan.mentega}</div>
          <div>TELOR {props.bahan.telor}</div>
        </div>
      </div>
      <div className="action">
        <button type="button" onClick={props.buatDonat}>Buat Donat</button>
        <button type="button">Buat Cake</button>
      </div>
      <div className="action">
        <button type="button" onClick={props.beliDonat}>Beli Donat</button>
        <button type="button">Beli Cake</button>
      </div>
    </div>
  );
}

// Menggunakan state yang ada di Redux kedalam komponen/page App.js
const mapStateToProps = (state) => {
  console.log(state)
  return {
    bahan: state.bahan,
    saldo: state.transaction,
  }
}

// Menggunakan state method yang ada di Redux ke dalam komponen/pages ini
const mapDispatchToProps = (dispatch) => {
  return {
    buatDonat: () => dispatch(buatDonatAction),
    beliDonat: () => dispatch(beliDonatAction),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
