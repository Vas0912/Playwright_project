# Playwright Automation Framework | JavaScript

## Project Overview

This repository contains my personal Playwright Automation Framework developed using JavaScript and Playwright Test.

The project demonstrates my practical knowledge of UI automation, API testing, Page Object Model (POM), test execution, and automation framework development.

The framework is created as a hands-on portfolio project to demonstrate real-world automation testing concepts and best practices.

## Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Programming language |
| Playwright | UI and API automation |
| Playwright Test | Test execution framework |
| Page Object Model | Framework design pattern |
| Allure Playwright | Test reporting integration |
| Git & GitHub | Version control |
| GitHub Actions | CI workflow |

## Project Structure

```text
Playwright_project/
│
├── .github/
│   └── workflows/       # GitHub Actions workflows
│
├── pageobjects/         # Page Object Model classes
│
├── tests/               # UI and API test scripts
│
├── utils/               # Reusable utility files
│
├── allure-report/       # Allure report output
├── allure-results/      # Allure test results
│
├── playwright.config.js
├── playwright.config1.js
├── package.json
├── package-lock.json
│
└── README.md
```

## Key Automation Concepts Implemented

### UI Automation
- Browser automation using Playwright.
- Locators and web element interactions.
- Assertions and validations.
- Handling different web elements.
- End-to-end test scenarios.

### Framework Development
- Page Object Model (POM).
- Reusable page classes and methods.
- JavaScript classes and objects.
- Test hooks and fixtures.
- Playwright configuration.

### API Automation
- API testing using Playwright request context.
- API test execution using tagged tests.
- Separate execution of API and UI test suites.

### Test Execution and Reporting
- Regression test execution.
- Tagged test execution using `@Web` and `@API`.
- Safari browser project configuration.
- Allure Playwright integration.
- Playwright HTML reporting.

## Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/Vas0912/Playwright_project.git
```

**2. Navigate to the project**

```bash
cd Playwright_project
```

**3. Install dependencies**

```bash
npm install
```

**4. Install Playwright browsers**

```bash
npx playwright install
```

## Running Tests

**Run all regression tests**

```bash
npm run regression
```

**Run UI automation tests**

```bash
npm run webTests
```

**Run API automation tests**

```bash
npm run APITests
```

**Run tests using Safari configuration**

```bash
npm run SafariNewConfig
```

## Test Reports

The project uses Playwright reporting and includes Allure Playwright integration.

To view the Playwright HTML report:

```bash
npx playwright show-report
```

## GitHub Repository

[Playwright Automation Framework – GitHub](https://github.com/Vas0912/Playwright_project)

## Author

**Vasavi Reddy**

QA Test Analyst | Playwright Automation | JavaScript

This is a personal portfolio project developed to demonstrate my practical learning and hands-on experience in Playwright automation testing.
