export const addQuestion = (question, answer) => ({
    type: 'ADD_QUESTION',
    question,
    answer
});

export const removeQuestions = () => ({
    type: 'REMOVE_QUESTIONS'
});

export const sortQuestions = () => ({
    type: 'SORT_QUESTIONS'
});