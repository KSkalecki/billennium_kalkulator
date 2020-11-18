import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  
  state = {
    calculator: 'active',
    summary: 'inactive'
  }

  render() {
    const showSummary = this.props.showSummary;
    
    // Set class on navbar element to toggle it
    const toggleSummary = () => {
      if (showSummary === true) {
        return 'summary-active'
      } else {
        return 'summary-inactive'
      }
    }

    // Render different elements based for 'nav-active' and 'nav-inactive'
    const summaryTab = () => {
      if (showSummary === true) {
        return (
          <NavLink to={'/podsumowanie'} id="nav-summary" className={`nav-element ${toggleSummary()} tooltip-container`}>
            Podsumowanie
          </NavLink>          
        )        
      } else {
        return (
          <div className="tooltip-container div-inactive">
            <span className="tooltiptext">Oblicz ratę, aby przejść do podsumowania</span>
            <span>Podsumowanie</span>
          </div>
        )        
      }
    }

    return (
      <div>
        <nav>
          <NavLink to={'/kalkulator'} id="nav-calc" className={`nav-element`} >
              Kalkulator
            </NavLink>
            {summaryTab()}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showSummary: state.showSummary
  }
}


export default connect(mapStateToProps)(Navbar);