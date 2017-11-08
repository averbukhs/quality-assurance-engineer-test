import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TooltippedTitle extends Component {

    static propTypes = {
        children: PropTypes.string.isRequired,
        tooltip: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            show: false
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow() {
        this.setState({
            show: true
        });
    }

    handleHide() {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <div className="tooltipped-title">
                <h2 onMouseEnter={this.handleShow} onMouseLeave={this.handleHide} className="tooltipped-title__title">
                    {this.props.children}
                </h2>
                <span className={`tooltipped-title__tooltip ${this.state.show ? '' : 'hidden-xl-down'}`}>
                    {this.props.tooltip}
                </span>
            </div>
        );
    }

}
