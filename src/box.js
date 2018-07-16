import React, { Component } from 'react';
import './box.css'

class Box extends Component {
    render() {

      let size = this.props.size + "px"; 
      return (
        <div onMouseEnter={this.props.handleOnMouseEnter} onMouseLeave={this.props.handleOnMouseLeave} 
        onClick={this.props.handleOnClick}className="box" 
         style={{background: this.getRandomColor(), width:size, height:size}}>
        </div>
      );
    }

    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
  }

  
  export default Box;