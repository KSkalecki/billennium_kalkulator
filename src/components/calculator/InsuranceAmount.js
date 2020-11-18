import React from 'react';
import { connect } from 'react-redux';

const InsuranceAmount = ({ insuranceAmount, changeAmount }) => {
  
  const handleChange = (e) => {
    e.preventDefault();
    changeAmount(e.target.value)
  }

  const leftSideColor = '#ff3d2e';
  const rightSideColor = '#f1f1f1';
  const minValue = 100;
  const maxValue = 10000;
  
  const handleDisplay = (e) => {
    e.preventDefault();
    let slider = e.target
    slider.style.background =
      `linear-gradient(to right,
      ${leftSideColor} 0%, ${leftSideColor} ${(slider.value / slider.max) * 100}%,
      ${rightSideColor} ${(slider.value / slider.max) * 100}%, ${rightSideColor} 100%)`
  }

  
  const sliderInitStyle = {
    background: `linear-gradient(to right,
      ${leftSideColor} 0%, ${leftSideColor} ${(insuranceAmount / maxValue) * 100}%,
      ${rightSideColor} ${(insuranceAmount / maxValue) * 100}%, ${rightSideColor} 100%)`,
    transition: "background 450ms ease-in",
  }

  return (
      <div className="center">
        <h5 className="component-label">Suma ubezpieczenia</h5>
        <div className="insurance-labels">
          <span className="label-small">100</span>
        <span className="insurance-amount">{parseFloat(insuranceAmount).toLocaleString('en').replace(/,/g, ' ')}</span>
          <span className="label-small">10 000</span>
        </div>
      <input
        style={sliderInitStyle}
        className="slider"
        id="slider-input"
        onChange={(e) => { handleChange(e); { handleDisplay(e) } }}
        type="range"
        min={minValue}
        max={maxValue}
        step="50"
        value={insuranceAmount}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    insuranceAmount: state.insuranceAmount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeAmount: (newAmount) => { dispatch({ type: 'CHANGE_AMOUNT', newAmount: newAmount }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InsuranceAmount)