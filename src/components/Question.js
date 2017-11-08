import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Question extends Component {

    static propTypes = {
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            show: false
        };

        this.handleToggleShow = this.handleToggleShow.bind(this);
    }

    handleToggleShow() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <li className="list-group-item question">
                <div className="question__question" onClick={this.handleToggleShow}>
                    {this.props.question}
                </div>
                <p className={`question__answer ${this.state.show ? '' : 'hidden-xl-down'}`}>
                    {this.props.answer}
                </p>
            </li>
        );
    }

}
