import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <label for="hamburgerCheckboxID" class="hamburgerLabel">
            <div className="barsContainer">
              <div className="bar" id="bar1"></div>
              <div className="bar" id="bar2"></div>
              <div className="bar" id="bar3"></div>
            </div>
        </label>
        <input id="hamburgerCheckboxID" type="checkbox" class="hamburgerCheckbox" />

        <Grid className="header-grid">
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </Grid>
      </header>
    )
  }

}

export default Header
