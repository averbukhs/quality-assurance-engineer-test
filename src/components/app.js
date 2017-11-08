import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Questions from './Questions';
import QuestionMaker from './QuestionMaker';
import Sidebar from './Sidebar';
import { addQuestion } from '../actions';

const mapStateToProps = state => ({
    questions: state.questions
});

class App extends Component {

    static defaultProps = {
        questions: []
    };

    componentWillMount() {
        this.props.dispatch(addQuestion('How to add a question?', 'Easy: just fill the form below and submit it!'));
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="col-md-3">
                    <Sidebar numberOfQuestions={this.props.questions.length}/>
                </div>
                <div className="col-md-9 content">
                    <Questions questions={this.props.questions}/>
                    <QuestionMaker/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
