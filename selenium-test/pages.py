from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from locators import *
from base import Page
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
from config import Config
from question import Question
import time

class HomePage(Page):
  def __init__(self, driver):
    self.locator = HomePageLocatars
    super().__init__(driver)

  def check_page_loaded(self):
    return True if self.find_element(*self.locator.HEADER_H1).text == "The awesome Q/A tool" else False

  def get_questions_list(self):
    return [Question(el) for el in self.find_elements(*self.locator.QUESTIONS_LIST_ITEM)] 

  def add_question(self, question, answer):
    self.find_element(*self.locator.QUESTION_INPUT).click()
    self.find_element(*self.locator.QUESTION_INPUT).send_keys(question)
    self.find_element(*self.locator.ANSWER_INPUT).click()
    self.find_element(*self.locator.ANSWER_INPUT).send_keys(answer)
    self.find_element(*self.locator.CREATE_QUESTION_BUTTON).click()

    return self.get_questions_list()

  def show_answers(self):
    for question in self.get_questions_list():
      question.question.click()
    return self.get_questions_list()

  def sort_questions_by_name(self):
    self.find_element(*self.locator.SORT_QUESTIONS_BUTTON).click()
    return self.get_questions_list()
  
  def remove_questions(self):
    self.find_element(*self.locator.REMOVE_QUESTIONS_BUTTON).click()
    return self.get_questions_list()
  
 