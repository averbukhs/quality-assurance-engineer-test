import React, { Component } from 'react';
import TooltippedTitle from './TooltippedTitle';
import { connect } from 'react-redux';
import { addQuestion } from '../actions';

class QuestionMaker extends Component {

    state = {
        question: '',
        answer: ''
    };

    handleQuestionChange = (event) => {
        this.setState({
            question: event.target.value
        });
    };

    handleAnswerChange = (event) => {
        this.setState({
            answer: event.target.value
        });
    };

    handleSubmitQuestion = (event) => {
        event.preventDefault();
        this.props.dispatch(addQuestion(this.state.question, this.state.answer));
        this.setState({
            question: '',
            answer: ''
        });
    };

    render() {
        return (
            <div className="question-maker">
                <TooltippedTitle tooltip="Here you can create new questions and their answers.">
                    Create a new question
                </TooltippedTitle>
                <form className="form" onSubmit={this.handleSubmitQuestion}>
                    <div className="form-group">
                        <label htmlFor="question">Question</label>
                        <input
                            required="required"
                            type="text"
                            id="question"
                            name="question"
                            className="form-control"
                            value={this.state.question}
                            onChange={this.handleQuestionChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="answer">Answer</label>
                        <textarea
                            required="required"
                            id="answer"
                            name="answer"
                            className="form-control"
                            value={this.state.answer}
                            onChange={this.handleAnswerChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Create question
                    </button>
                </form>
            </div>
        );
    }

}

export default connect()(QuestionMaker);