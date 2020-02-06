
from selenium.webdriver.common.by import By

class HomePageLocatars(object):
  HEADER_H1 = (By.XPATH, '//header/h1')
  QUESTION_INPUT = (By.ID, 'question')
  ANSWER_INPUT = (By.ID, 'answer')
  CREATE_QUESTION_BUTTON = (By.XPATH, '//button[text()="Create question"]')
  SORT_QUESTIONS_BUTTON = (By.XPATH, '//button[text()="Sort questions"]')
  REMOVE_QUESTIONS_BUTTON = (By.XPATH, '//button[text()="Remove questions"]')
  QUESTIONS_LIST_ITEM = (By.XPATH, '//div[@class="card"]/ul/li')

