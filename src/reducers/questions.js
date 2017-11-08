const questions = (state = [], action) => {
    switch (action.type) {
        case 'ADD_QUESTION':
            return [
                ...state,
                {
                    question: action.question,
                    answer: action.answer
                }
            ];
        case 'REMOVE_QUESTIONS':
            return [];
        case 'SORT_QUESTIONS':
            return state.slice().sort((question1, question2) => {
                if (question1.question.toLowerCase() < question2.question.toLowerCase()) return -1;
                if (question1.question.toLowerCase() > question2.question.toLowerCase()) return 1;
                return 0;
            });
        default:
            return state;
    }
};

export default questions;