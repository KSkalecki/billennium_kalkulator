import React, { Component } from 'react';
import InsuranceAmount from './calculator/InsuranceAmount';
import Installments from './calculator/Installments';
import AdditionalInfo from './calculator/AdditionalInfo';
import SubmitPanel from './calculator/SubmitPanel';


class CalculatorMain extends Component {
  
  render() { 
    return ( 
      <div>
        <InsuranceAmount/>
        <Installments />
        <AdditionalInfo />
        <SubmitPanel />
      </div>
     );
    }
  }
 
  
export default CalculatorMain;

