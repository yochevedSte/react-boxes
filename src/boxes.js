import React, { Component } from 'react';
import Box from './box'

class Boxes extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes: [], size: 100 };
        this.setTimer();
        this.isPaused = false;
        this.maxBoxes = 75;
        this.count = 0;
    }
    render() {

        return (
            <div>{this.state.boxes}</div>
        );
    }


    setTimer() {
        
        let increment = true;


        setInterval(() => {
            if (!this.isPaused) {
                let array = [];
                if (increment) {
                    if (this.count < this.maxBoxes)
                        this.count++;
                    else if (this.count === this.maxBoxes) {
                        increment = false;
                        this.count--;
                    }
                }

                //we are now in the decrementing stage
                else {
                    if (this.count > 0)
                        this.count--;
                    else {
                        increment = true;
                        this.count++;
                    }
                }


                for (let i = 0; i < this.count; i++) {
                    array = array.concat(<Box handleOnClick={this.handleOnClick}  handleOnMouseEnter={this.handleOnMouseEnter} handleOnMouseLeave={this.handleOnMouseLeave} size={this.state.size}/>);
                }
                this.setState({ boxes: array });
            }
        }, 40);
    }

    handleOnMouseEnter= (e) => {
        this.isPaused = true;
    }

    handleOnMouseLeave = (e) => {
        this.isPaused = false;
    }

    handleOnClick = (e) => {
        this.count  *= 2;
        this.maxBoxes *= 2;
        this.setState({size: this.state.size/2});
    }
}

export default Boxes;