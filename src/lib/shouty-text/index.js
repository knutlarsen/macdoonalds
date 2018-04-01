import React from "react"
import "./style.css"

class ShoutyText extends React.Component {
  render() {
    return (
      <div className={`shouty-text ${this.props.className}`}>
        {this.props.text}
      </div>
    )
  }
}

export default ShoutyText
