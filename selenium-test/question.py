from selenium import webdriver
from selenium.webdriver.common.by import By


class Question(object):

    def __init__(self, element):
        self.question = element.find_element(By.CLASS_NAME, 'question__question')
        self.answer = element.find_element(By.CLASS_NAME, 'question__answer')

    def get_question(self):
        return self.question.text

    def get_answer(self):
        return self.answer.get_attribute('innerHTML')

    def is_answer_hiden(self):
        return 'hidden-xl-down' in self.answer.get_attribute('class').split(' ')
