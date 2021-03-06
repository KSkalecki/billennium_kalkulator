const initState = {
  insuranceAmount: 5500,
  instalmentButtons: [
    { name: 'one-inst', isActive: 'enabled', text: '1 rata'},
    { name: 'two-inst', isActive: 'disabled', text: '2 raty'},
    { name: 'three-inst', isActive: 'disabled', text: '3 raty'},
    { name: 'four-inst', isActive: 'disabled', text: '4 raty'}
  ],
  additionalInfoButtons: [
    { name: 'one-additionalInfo', isActive: 'disabled', text: 'brak szkód' },
    { name: 'two-additionalInfo', isActive: 'disabled', text: 'wyrządzona szkoda' },
  ],
  multiplier: 1,
  discountPayment: [ 0.98, true],
  discountNoDetirement: [ 0.95, 'N/A'],
  extraChargePayment: [1.04, 'N/A'],
  extraChargeDetirement: [1.08, 'N/A'],
  installmentAmount: 0,
  showSummary: false,
}

const Reducer = (state = initState, action) => {

  if (action.type === 'CHANGE_AMOUNT') {
    let newAmount = action.newAmount;
    let newInstallmentAmountTotal = 0;
    let newShowSummary = false;

    return {
      ...state,
      insuranceAmount: newAmount,
      installmentAmount: newInstallmentAmountTotal,
      showSummary: newShowSummary
    }
    
  } else if (action.type === 'CHANGE_INSTALLMENT') {
    
    let newNoOfInstallments = [...state.instalmentButtons];
    let newInstallmentAmountTotal = 0;
    let newShowSummary = false;
    let newDiscountPayment = [...state.discountPayment];
    let newExtraChargePayment = [...state.extraChargePayment];
    let newMultiplier;
    
    newNoOfInstallments.forEach(button => {
      button.isActive = button.name === action.name ? 'enabled' : 'disabled';
    })
    
    if (action.name === 'one-inst') {
      newDiscountPayment[1] = true;
      newExtraChargePayment[1] = false;
      newMultiplier = 1;
    } else if (action.name === 'two-inst') {
      newDiscountPayment[1] = 'N/A';
      newExtraChargePayment[1] = 'N/A';
      newMultiplier = 2;
    } else if (action.name === 'three-inst') {
      newDiscountPayment[1] = 'N/A';
      newExtraChargePayment[1] = 'N/A';
      newMultiplier = 3;
    } else if (action.name === 'four-inst') {
      newDiscountPayment[1] = false;
      newExtraChargePayment[1] = true;
      newMultiplier = 4;
    }
      
    return {
      ...state,
      discountPayment: newDiscountPayment,
      extraChargePayment: newExtraChargePayment,
      instalmentButtons: newNoOfInstallments,
      installmentAmount: newInstallmentAmountTotal,
      multiplier: newMultiplier,
      showSummary: newShowSummary
    }

  } else if (action.type === 'CHANGE_ADDITIONAL_INFO') {
    
    let newAdditionalInfoButtons = [...state.additionalInfoButtons]
    
    newAdditionalInfoButtons.forEach(button => {

      if (button.name === action.name) {
        if (button.isActive === 'enabled') {
          button.isActive = 'disabled';
        } else {
          button.isActive = 'enabled';
        }
      } else {
        button.isActive = 'disabled';
      }
          
    })

    let newInstallmentAmountTotal = 0;
    let newShowSummary = false;
    let newDiscountNoDetirement = [...state.discountNoDetirement];
    let newExtraChargeDetirement = [...state.extraChargeDetirement];

    if (action.name === 'one-additionalInfo' && action.isActive === 'disabled') {
      newDiscountNoDetirement[1] = true;
      newExtraChargeDetirement[1] = false;
    } else if (action.name === 'two-additionalInfo' && action.isActive === 'disabled') {
      newDiscountNoDetirement[1] = false;
      newExtraChargeDetirement[1] = true;
    } else {
      newDiscountNoDetirement[1] = 'N/A';
      newExtraChargeDetirement[1] = 'N/A';
    }
     
 
    return {
      ...state,
      discountNoDetirement: newDiscountNoDetirement,
      extraChargeDetirement: newExtraChargeDetirement,
      additionalInfoButtons: newAdditionalInfoButtons,
      installmentAmount: newInstallmentAmountTotal,
      showSummary: newShowSummary
    }
    
  } else if (action.type === 'CHANGE_TOTAL') {
    let newInstallmentAmountTotal = action.installmentAmount
    let newShowSummary = true;

    return {
      ...state,
      installmentAmount: newInstallmentAmountTotal,
      showSummary: newShowSummary
    }
  }

  return state
}

export default Reducer