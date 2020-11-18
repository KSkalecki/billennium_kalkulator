import React from 'react';
import { connect } from 'react-redux';

const AdditionalInfo = ({ additionalInfoButtons, changeAdditionalInfo }) => {
  
  const handleClick = (isActive, name, e) => {
    e.preventDefault(e);
    changeAdditionalInfo(isActive, name)
  }
  
  const buttonsList = additionalInfoButtons.map((button) => {
    return (
      <button key={button.name} name={button.name} className={`btn btn-additional-info btn-${button.isActive}`} onClick={(e) => { handleClick(button.isActive, button.name, e) }}>{button.text}</button>
    )
  })

  return (
    <div className="center">
      <h5 className="component-label">Stan</h5>
        <div className="btn-container-additional-info">
          {buttonsList}
        <div className="additional-info-text">
          <p className="label-small">Brak wyboru oznacza nowego klienta bez przeszłości</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    additionalInfoButtons: state.additionalInfoButtons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeAdditionalInfo: (isActive, name) => { dispatch({ type: 'CHANGE_ADDITIONAL_INFO', isActive: isActive, name: name }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfo)