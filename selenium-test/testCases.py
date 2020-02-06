def test_cases(number):
    return testCases[number]
    
testCases = [
    #[severity, description]
    ['Blocker', 'When user goes to main page, page should be loaded'],
    ['Blocker', 'One default question "How to add a question" should be on the main page'],
    ['Blocker', 'When user adds a question it should appear in the list of questions'],
    ['Blocker', 'When user clicks on a question, answer should appear'],
    ['Blocker', 'When user sort questions they should be sorted alphabetically'],
    ['Blocker', 'When user deletes questions the list of questions should be empty']
]
