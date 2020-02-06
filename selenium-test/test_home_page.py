import unittest
from selenium import webdriver
from config import Config
from pages import HomePage
from testCases import test_cases
from selenium.webdriver.common.by import By


class TestHomePage(unittest.TestCase):

    def setUp(self):
        self.config = Config()
        self._chrome_options = webdriver.ChromeOptions()
        if self.config.headless():
            self._chrome_options.add_argument('--headless')
        self._chrome_options.add_argument('--no-sandbox')
        self.driver = webdriver.Chrome(chrome_options=self._chrome_options,
                                       service_args=['--verbose'])
        self.driver.get(self.config.get_base_url())

    def test_page_load(self):
        print("\n" + str(test_cases(0)))
        page = HomePage(self.driver)
        self.assertTrue(page.check_page_loaded())

    def test_default_question_on_home_page(self):
        print("\n" + str(test_cases(1)))
        page = HomePage(self.driver)
        _questions_list = page.get_questions_list()
        self.assertEqual(len(_questions_list), 1)
        self.assertEqual(_questions_list[0].get_question(), 'How to add a question?')

    def test_add_question(self):
        print("\n" + str(test_cases(2)))
        page = HomePage(self.driver)
        res = page.add_question('How are you doing?', 'It is going great!')
        self.assertEqual(res[len(res) - 1].get_question(), 'How are you doing?')
        self.assertEqual(res[len(res) - 1].get_answer(), 'It is going great!')

    def test_show_answer(self):
        print("\n" + str(test_cases(3)))
        page = HomePage(self.driver)
        questions = page.get_questions_list()
        for question in questions:
            self.assertTrue(question.is_answer_hiden())
        res = page.show_answers()
        for question in res:
            self.assertFalse(question.is_answer_hiden())

    def test_sorf_by_name(self):
        print("\n" + str(test_cases(4)))
        page = HomePage(self.driver)
        page.add_question('A question', 'An answer')
        page.add_question('Z question', 'Z answer')
        page.add_question('K question', 'K answer')
        res = page.sort_questions_by_name()
        questions = [question.get_question() for question in res]
        self.assertEqual(questions, sorted(questions))

    def test_remove_questions(self):
        print("\n" + str(test_cases(5)))
        page = HomePage(self.driver)
        res = page.remove_questions()
        self.assertEqual(len(res), 0)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    suite = unittest.TestLoader().loadTestsFromTestCase(TestHomePage)
    unittest.TextTestRunner(verbosity=2).run(suite)
