import React from 'react';
import { connect } from 'react-redux';

const SubmitPanel = ({ insuranceAmount, discountPayment, discountNoDetirement, extraChargePayment, extraChargeDetirement, installmentAmount,  changeTotal,  }) => {
  
  const getTotal = () => {

    let newAmount;
    let installmentsNo;
    let isDetirement;

    // Get installment amount
    if (insuranceAmount >= 100 && insuranceAmount <= 1000) {
      newAmount = 20;
    } else if (insuranceAmount >= 1001 && insuranceAmount <= 3000) {
      newAmount = 70;
    } else if (insuranceAmount >= 3001 && insuranceAmount <= 6000) {
      newAmount = 130;
    } else if (insuranceAmount >= 6001 && insuranceAmount <= 9000) {
      newAmount = 180;
    } else if (insuranceAmount >= 9001) {
      newAmount = 200;
    }

    // Get payment modifiers
    if (discountPayment[1] === true) {
        installmentsNo = discountPayment[0];
    } else if (discountPayment[1] === false){
        installmentsNo = extraChargePayment[0];
    } else {
        installmentsNo = 1;
    }
      
    // Get detirement modifiers
    if (discountNoDetirement[1] === true) {
      isDetirement = discountNoDetirement[0]
    } else if (discountNoDetirement[1] === false) {
      isDetirement = extraChargeDetirement[0]
    } else {
      isDetirement = 1;
    }

    return Math.ceil((newAmount * installmentsNo) * (isDetirement) )  ;
  }
    
  const handleClick = (e) => {
    e.preventDefault();
    let newTotalAmount = getTotal();
    changeTotal(newTotalAmount, true);
  } 

  return (
  <div className="submit-panel center">
    <button type="submit" onClick={(e) =>{handleClick(e)}} className="btn btn-submit"> <span>OBLICZ RATĘ</span></button>
    <div className="installment-amount"> 
      <span className="installment-total">{installmentAmount}</span>
      <span>&nbsp;zł</span>
    </div>
  </div>
  );
  
}

const mapStateToProps = (state) => {
  return {
    insuranceAmount: state.insuranceAmount,
    installmentAmount: state.installmentAmount,
    discountPayment: state.discountPayment,
    discountNoDetirement: state.discountNoDetirement,
    extraChargePayment: state.extraChargePayment,
    extraChargeDetirement: state.extraChargeDetirement,
    showSummary: state.showSummary
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTotal: (installmentAmount) => { dispatch({ type: 'CHANGE_TOTAL', installmentAmount: installmentAmount, showSummary: true }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPanel);