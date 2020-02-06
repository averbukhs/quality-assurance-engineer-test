# Quality Assurance engineer test
Welcome to the QA Engineer tech test. We expect the work to take around 1 to 1.5 hours, and we thank
you in advance for taking that time for us!

This test consists of two parts: a written part and a coding part. For the written part, we would
like to receive a PDF, slide presentation or MD file with your insights. For the coding part, a fork of this repo with
your solution will do.

### Written Assignment


### Automated Testing Assignment
You can fork (and then clone your own version) this repo and run:

```
$ npm install
$ npm start
```

You now have a working frontend app that you will write some kind of automated user acceptence test. 
The language of framework does not matter, but we prefer JS, PHP or Python.

### Run Selenium Tests
Please, refer to the [documentation](./selenium-test/README.md) for more information on environment setup.
NOTE: Before running tests, make sure the application is up and running. 
NOTE: Test can be run in headless mode, please review [configuration](./selenium-test/config.yaml) file.
```
python3 ./selenium-test/test_home_page.py
```
