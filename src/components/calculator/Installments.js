import React from 'react';
import { connect } from 'react-redux';

const InstalmentButtons = ({ instalmentButtons, changeInstallments }) =>{

  const handleClick = (isActive, name, e) => {
    e.preventDefault();
    changeInstallments(isActive, name)
  }

  const buttonsList = instalmentButtons.map((button) => {
    return (
      <button
        onClick={(e) => { handleClick(button.isActive, button.name, e) }}
        key={button.name}
        name={button.name}
        className={`btn btn-installment btn-${button.isActive}`}>
        {button.text}
      </button>
    )
  }) 
  
  return (
    <div className="center" >
      <h5 className="component-label">Ilość rat</h5>
      <div className="btn-container-installments">
        {buttonsList}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    instalmentButtons: state.instalmentButtons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInstallments: (isActive, name) => { dispatch({ type: 'CHANGE_INSTALLMENT', isActive: isActive, name: name }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstalmentButtons)

