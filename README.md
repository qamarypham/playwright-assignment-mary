# Playwright Automation Assignment – DemoBlaze - Tech99

## 📌 Overview
This project is an **end-to-end automation testing demo** built with **Playwright (TypeScript)** for the website:

👉 https://www.rocscience.com/

The project demonstrates:
- UI automation best practices
- Page Object Model (POM)
- Cross-browser execution
- CI/CD integration with GitHub Actions
- Test reporting using Allure and Monocart

----------

## 🎯 Test Scope
### Main E2E Flow
- Access Homepage, click to Login to RockPortal then Verify URL and validate Login page elements are visible

----------

## 🧱 Project Structure
playwright-assignment-tech99
│
├── .github/
│ └── workflows/
│ └── playwright.yml # GitHub Actions CI pipeline
│
├── allure-report/ # Generate allure report after run
│
├── data/
│ └── testData.ts # Test data if needed
│
├── fixtures/
│ └── fixture.ts # Setup / teardown / shared context
│
├── locator/
│ ├── homepage-locators.ts # Home page selectors
│ └── loginpage-locators.ts # Login page selectors
│
├── pages/
│ ├── home.page.ts # Home page actions
│ └── login.page.ts # Login actions
│
├── tests/
│ └── test.spec.ts # Main end-to-end tests
│
├── utilities/
│ ├── assertions.ts # Common assertions
│ ├── constants.ts # Test constants
│ ├── logging.ts # Centralize logging
│ └── utils.ts # Utility commons function
├── playwright.config.ts # Playwright configuration
├── package.json # Scripts & dependencies
└── README.md

----------

## 🛠️ Tech Stack
- **Playwright**
- **TypeScript**
- **Node.js**
- **Allure Report**
- **Monocart Report**
- **GitHub Actions**

## ▶️ Run Tests Locally
### Install dependencies
- npm ci
### Install Playwright browsers
- npx playwright install --with-deps
### Run all tests
- npx playwright test
#### Useful NPM Scripts
- npm run ci (for Github CI)
- npm run test:allure (for local)
- npm run test:api (for API testing)
  
#### Run tests with UI mode
- npm run test:ui

#### Run tests with API mode
- npm run test:api

#### Run tests in headed mode
- npm run test:headed

#### Run Chrome only
- npm run test:chrome

#### Run tests & generate Allure report
- npm run test:allure

#### Run tests & generate Monocart report
- npm run test:mono

----------

## 📊 Test Reporting – Allure
### Generate report locally
#### Allure report
- allure generate allure-results -o allure-report --clean
- allure open allure-report (to open Allure report)
#### Monocart report
- npx monocart show monocart-report/index.html

----------

## 🤖 CI/CD – GitHub Actions
### CI Pipeline Includes:
- Install dependencies
- Install Playwright browsers
- Run UI automation tests
- Generate Allure report
- Upload report as artifact
### CI config file:
- .github/workflows/playwright.yml

---------- 

## 👤 Author
Mary Pham
Senior QA
  


