# Test Automation Framework with AI capabilities

This is an enterprise-grade test automation framework built using **Playwright** in **Typescript**. It supports both **UI** and **API** automation. This project uses **Model Context Protocol(MCP)** server that provides browser automation capabilties using Playwright. This server enables LLM's to interact with web pages through structured accessibility snapshots, bypassing the need for screenshots or visually-tuned models.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#Installation)
- [Running Tests](#Running-Tests)
- [Logging](#Logging-and-Reporting)
- [CICD Integration](#CICD-Integration)

---

## Project Structure
```
PlaywrightAutomation/
├── 📂 .github/
│   └── 📂 workflows/
│   │   └── ⚙️ playwright.yml            # yml file for GitHubActions workflow
├── 🟡 🚫 **.gitignore**
├── 📂 modules/
│   ├── 📂 api-automation/
│   ├── 📂 common/
│   │   ├── 📂 fixtures/
│   │   └── 📂 utilities/                # Common utilities - logger,json-reader,path-resolver
│   └── 📂 ui-automation/
│   │   ├── 📂 envconfig/                # Environment configuration and model
│   │   ├── 📂 fixtures/                 # Page object fixtures, env fixture and merged fixture
│   │   ├── 📂 models/                   # POJO classes for test data
│   │   ├── 📄 pages/                    # BasePage with wrapper methods and Page classes
│   │   ├── 📂 prompts/                  # Prompts to generate test scripts using AI capabilities
│   │   ├── 📂 testdata/                 # Environment specific test data
│   │   ├── 🧪 tests/                    # Test classes
│   │   └── 📂 utilities/                # Test data provider and env loader utilities
├── 📂 playwright-report/                # Playwright HTML reporter
│   └── 🌐 index.html
├── 🔷 playwright.config.ts              # Playwright config file
├── 🔴 📖 **README.md**
└── 📂 test-results/                     # logs folder
│   └── ⚙️ logs
```

## Technologies Used
- **Playwright**
- **Typescript**
- **Node.js**
- **Playwright test runner** for test execution and test categorizations
- **Winston** for logging
- **Playwright HTML reporter** for reporting
- **Model Context Protocol (MCP)**
- **GitHub Copilot** or **Roo Code**
- **GitHub Actions workflow**


## Features
- Page Object Model (POM) design pattern for UI tests which significantly enhances the scalability of test automation frameworks. 
- Page Object Fixture and environmnet config fixture and merged together that can be injected into tests.
- Service Object Model (SOM) design pattern for API tests to support enterprise level microservices architecture
- Base API service for building HTTP requests
- Parallel test execution
- Logging to **console** and **log files** using Winston package
- JSON schema validation for API schema validation
- API request and response POJO classes to handle complex json responses by deserializing the API response to POJO objects
- UI and API components are in separate modules which makes the framework scalable and can be extended for mobile testing.
- Running test in GitHub CI server using GitHubActions workflow
- Project integration with **Model Context Protocol (MCP)** server to automate test scripting tasks using 
**AI code agents** and **LLM**
- Pre-configured **prompts** that can be fed into model to generate test scripts
- AI driven self healing capabilities to generate test scripts using AI assistants


## Prerequisites
- [Node.js] latest 20.x, 22.x or 24.x. (https://nodejs.org/en/download)
- [npm](https://www.npmjs.com/)
- Windows 11+, Windows Server 2019+ or Windows Subsystem for Linux (WSL).
- macOS 14 (Ventura) or later.
- Debian 12 / 13, Ubuntu 22.04 / 24.04 (x86-64 or arm64).

## Installation
1. Clone the repository
```bash
git clone https://github.com/arvindjosh08/UI-API-Automation-Playwright.git
```

2. Navigate to the project directory
```bash
cd <folder_name>
```

3. Install dependencies
```bash
npm ci
```

4. Install Playwright browsers
```bash
npx playwright install --with-deps
```

5. Install MCP server
```bash
npm install --save-dev @playwright/mcp@latest
```


## Running Tests
Follow these steps to execute the tests on your Mac machine:
1. Run all tests in all browsers in parallel(depends on number of CPU cores of your local machine or server)
```bash
npm run test
```
2. Run all test in chromium browser in parallel
```bash
npm run test:chromium
```
3. Run all test in firefox browser in parallel
```bash
 npm run test:firefox
```
4. Run all test in webkit browser in parallel
```bash
 npm run test:webkit
```
5. Run all regression test in chromium browser in parallel
```bash
npm run test:regression:chromium
```
6. Run all tests in all browsers in parallel in sit environment
```bash
npm run test:sit
```

[Playwright MCP(Model Context Protocol) - AI Test Generation](./docs/README-mcp.md)


## CICD Integration
- There is playwright.yml files inside .github\workflows. You can trigger the build manually from your GitHub Actions or you can change the .yml file in such a way that build gets triggered on pull request.


## Logging and Reporting
- Logging is handled by Winston package.
- Logs are written to console as well as to log file to: /test-results/logs/combined.log
- Playwright html reporter is used which is generated under /playwright-report/index.html


## Further Enhancements
- Jira integration
- Secrets Management
- API integration