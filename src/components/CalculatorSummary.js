import React from 'react';
import { connect } from 'react-redux';

const CalculatorSummary = ({ insuranceAmount, instalmentButtons, additionalInfoButtons, installmentAmount, multiplier, showSummary }) => {
  
  const amountSummary = insuranceAmount;
  const singleInstallment = installmentAmount;
  const installmentsTotal = singleInstallment * multiplier;

  const noOfInstallmentsSummary = () => {
    let activeButtonInstallmensText = instalmentButtons.find(button => {
      return button.isActive === 'enabled';
    })
    return activeButtonInstallmensText.text
  }

  const additionalInfoSummary = () => {
    let activeButtonInfoText = additionalInfoButtons.find(button => {
      return button.isActive === 'enabled';
    })

    if (activeButtonInfoText === undefined) {
      return 'brak przeszłości';   
    } else {
      return activeButtonInfoText.text;
    }
  }
       
  
  // Check if summary should be displayed
  if (showSummary === true) {
    return (
      <div className="component-wrapper-summary">
        <div className="center component-container-summary">
          <span className="summary-label">Kwota ubezpieczenia: </span>
          <span>
            {amountSummary}
            <span>&nbsp;zł</span>
          </span>
        </div>
        
        <div className="center component-container-summary">
          <span className="summary-label">Ilość rat:</span>
          <span>{noOfInstallmentsSummary()}</span>
        </div>
        
        <div className="center component-container-summary">
          <span className="summary-label">Stan:</span>
          <span>{additionalInfoSummary()}</span>
        </div>
        
        <div className="center component-container-summary">
          <span className="summary-label">Kwota raty:</span>
          <span>
            {singleInstallment}
            <span>&nbsp;zł</span>
          </span>
        </div>

        <div className="submit-panel center component-container-summary">
          <span className="summary-label">Całkowita suma:&nbsp;</span>
          <span>
            {installmentsTotal}
            <span>&nbsp;zł</span>
          </span>
          
        </div>
  
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    insuranceAmount: state.insuranceAmount,
    instalmentButtons: state.instalmentButtons,
    additionalInfoButtons: state.additionalInfoButtons, 
    installmentAmount: state.installmentAmount,
    multiplier: state.multiplier,
    showSummary: state.showSummary
  }
}

export default connect(mapStateToProps)(CalculatorSummary);