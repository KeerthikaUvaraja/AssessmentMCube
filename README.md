## Project Overview
This project contains automated tests for API testing using Playwright with TypeScript and UI testing of Google search functionality. The API tests validate the creation and retrieval of users via the GoRest API, while the UI tests validate key search-related features on the Google homepage.

## Prerequisites
Before running the tests, ensure that you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later)
- TypeScript (if not installed globally)
- Playwright
  
## Installation
### 1. Clone the Repository:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2. Install Dependencies:

Install the necessary npm packages:

```bash
npm install
```

### 3. Set Up Environment Variables for API Testing:

Create a .env file in the root directory and add the following content:

```bash
API_TOKEN=your_gorest_api_token
```

Replace your_gorest_api_token with your actual GoRest API token.


## Running the Tests
### 1. API Testing
The API testing verifies the creation and retrieval of users using the GoRest API.

- Endpoint: https://gorest.co.in/
- Resources: POST /public/v2/users and GET /public/v2/users/{user_id}

### To Run the API Tests:

```bash
npx playwright test tests/api_test.ts
```

### 2. UI Testing for Google Search Functionality
The UI testing covers three scenarios related to Google’s search functionality.

## Test Scenarios:

- Scenario 1: Search for a Common Term

  - Given I am on the Google homepage
  - When I search for "Playwright"
  - Then I should see results related to "Playwright"

- Scenario 2: Search with an Exact Phrase

  - Given I am on the Google homepage
  - When I search for the exact phrase "open-source automation tool"
  - Then I should see results containing the exact phrase "open-source automation tool"

- Scenario 3: Use the "I'm Feeling Lucky" Button

  - Given I am on the Google homepage
  - When I enter "Playwright" in the search bar
  - And I click the "I'm Feeling Lucky" button
  - Then I should be navigated to the top search result

### To Run the UI Tests:

```bash
npx cucumber-js
```
This command will run all the feature files located in the features directory, executing the test cases against the Google homepage.

## Test Results
After running the tests, you can generate and view a detailed report by running:

```bash
npx playwright show-report
```
This will open a browser window displaying the results of the test run, including any passed or failed tests.
