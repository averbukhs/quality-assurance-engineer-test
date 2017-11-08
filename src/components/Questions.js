import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from './Question';
import TooltippedTitle from './TooltippedTitle';
import { removeQuestions, sortQuestions } from '../actions';

class Questions extends Component {

    static propTypes = {
        questions: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.handleRemoveQuestions = this.handleRemoveQuestions.bind(this);
        this.handleSortQuestions = this.handleSortQuestions.bind(this);
    }

    handleRemoveQuestions() {
        this.props.dispatch(removeQuestions());
    }

    handleSortQuestions() {
        this.props.dispatch(sortQuestions());
    }

    render() {

        let content;

        if (this.props.questions.length) {
            const questionItems = this.props.questions.map((question, index) =>
                <Question
                    key={index}
                    question={question.question}
                    answer={question.answer}
                />
            );
            const questions = (
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {questionItems}
                    </ul>
                </div>
            );
            const cta = (
                <div>
                    <button className="btn btn-primary" onClick={this.handleSortQuestions}>Sort questions</button>
                    <button className="btn btn-danger" onClick={this.handleRemoveQuestions}>Remove questions</button>
                </div>
            );
            content = (
                <div>
                    {questions}
                    {cta}
                </div>
            );
        } else {
            content = (
                <div className="alert alert-danger">
                    No questions yet :-(
                </div>
            );
        }

        return (
            <div className="questions">
                <TooltippedTitle tooltip="Here you can find the created questions and their answers.">
                    Created questions
                </TooltippedTitle>
                {content}
            </div>
        );

    }

}

export default connect()(Questions);