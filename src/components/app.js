import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Questions from './Questions';
import QuestionMaker from './QuestionMaker';
import Sidebar from './Sidebar';

const mapStateToProps = state => ({
    questions: state.questions
});

class App extends Component {

    static defaultProps = {
        questions: []
    };

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
