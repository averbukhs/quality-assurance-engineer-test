import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Sidebar extends Component {

    static propTypes = {
        numberOfQuestions: PropTypes.number.isRequired
    };

    render() {

        let numberOfQuestions;
        switch (this.props.numberOfQuestions) {
            case 0:
                numberOfQuestions = 'no questions';
                break;
            case 1:
                numberOfQuestions = '1 question';
                break;
            default:
                numberOfQuestions = this.props.numberOfQuestions + ' questions';
        }

        return (
            <div className="sidebar">
                Here you can find {numberOfQuestions}. Feel free to create your own questions!
            </div>
        );
    }

}