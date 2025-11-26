# Test Automation Framework

This is an enterprise-grade test automation framework built using **Playwright** in **Typescript**. It supports both **UI** and **API** automation, parallel execution and logging

---

## Table of Contents
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Logging](#logging)

---

## Project Structure
```
AutomationFramework/
├── api-automation/
│   ├── src/
│   │   │
│   │   │   
│   │   └── test/
│   │       ├── java/
│   │       │   └── com.aarushi.automation.api
│   │       │                   ├── base/                    # Base classes and Rest client factory
│   │       │                   ├── listeners/               # Listener and Extent reporting using filter interface
│   │       │                   ├── model/                   # POJO classes for API request and response
│   │       │                   ├── services/                # API Service definitions (Service Object Model)
│   │       │                   ├── tests/                   # API test classes
│   │       │                   └── utilities/               # TestDataProvider class
│   │       └── resources/
│   │           ├── configuration/
│   │           └── testdata/
│   └── pom.xml
├── common/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com.aarushi.automation.common
│   │       │                   ├── reporting/                # common Extent reporting
│   │       │                   └── utilities/                # common ConfigReader/JsonReader/JiraIntegration/SecretsManager
│   │       └──resources/
│   │           └── log4j2.xml
│   └── pom.xml
├── ui-automation/
│   ├── src/
│   │   └──test/
│   │       ├── java/
│   │       │   └──com.aarushi.automation.ui/
│   │       │                   ├── actions/                    # Selenium Wrapper method
│   │       │                   ├── base/                       # Base classes and DriverFactory
│   │       │                   ├── listeners/                  # Listeners for Extent reports
│   │       │                   ├── model/                      # POJO classes for json data  
│   │       │                   ├── pages/                      # Page Object Models
│   │       │                   ├── tests/                      # API test classes
│   │       │                   ├── utilities/                  # Screenshot utility and TestDataProvider
│   │       ├── resources/
│   │           ├── configuration/
│   │           ├── testdata/
│   └── pom.xml
├── README.md
├── pom.xml
└── testng.xml


```

## Technologies Used
- **Java**
- **Apache Maven**
- **Selenium WebDriver** for UI automation
- **Rest Assured** for API automation
- **TestNG** for test execution and test categorizations
- **Log4j2** for logging
- **Extent Reports** for reporting
- **Jackson** for JSON handling


## Features
- Page Object Model (POM) design pattern for UI tests which significantly enhances the scalability of test automation frameworks
- Service Object Model (SOM) design pattern for API tests to support enterprise level microservices architecture
- Base API service for building HTTP requests
- Parallel test execution
- Thread-safe actions during parallel execution
- Handling of browser specific drivers using WebDriverManger
- Logging to **console** and **log files** using log4j2
- JSON schema validation for API schema validation
- API request and response POJO classes to handle complex json responses by deserializing the API response to POJO objects
- UI and API components are in separate modules which makes the framework scalable and can be extended for mobile testing.
- Running test in GitHub CI server using GitHubActions workflow


## Prerequisites
- [Java 20](https://www.oracle.com/au/java/technologies/downloads/)
- [Maven 3.9.11](https://maven.apache.org/download.cgi)
- Internet access for downloading dependencies
- Chrome and Edge browsers are installed in your machine
- No need to installed browser specific drivers as it is automatically handled through WebDriverManager


## Running Tests on mac using zsh terminal
Follow these steps to execute the tests on your Mac machine:
1. Run all tests (both UI and API) with console logging. By default the UI test will run on chrome browser
```bash
mvn clean test
```
2. Run only UI test with module name. This will only build the target module(using -pl) and the dependent module(using -am) as well
```bash
mvn clean test -pl ui-automation -am
```
3. Run only UI test in edge browser
```bash
 mvn clean test -pl ui-automation -am -Dbrowser=edge
```
4. Run only UI test of specific groups
```bash
 mvn clean test -pl ui-automation -am -Dbrowser=edge -Dgroups=regression
```
5. Run only UI test in parallel.
```bash
 mvn clean test -pl ui-automation -am -Dbrowser=edge -Dparallel=methods -DthreadCount=3
```
6. Run only UI test in headless mode for CI run
```bash
 mvn clean test -pl ui-automation -am -Dbrowser=edge -Dheadless=true
```
7. Run only API test
```bash
 mvn clean test -pl api-automation -am
```
8. Run only API test in parallel
```bash
 mvn clean test -pl api-automation -am -Dparallel=methods -DthreadCount=3
```

## Running test in GitHub CI servers
- There are two .yml files inside .github\workflows. api-test.yml file is to run api test and ui-test.yml file is to run ui tests


## Logging
- Logging is handled by Log4j2.
- Logs are written to: /target/logs/framework.log
- Thread ID is logged for parallel execution.
- Extent report is generated inside /target/UI_Test_Report.html OR API_Test_Report.html


## Further Enhancements
- Jira integration
- Secrets Management
- Appium integration