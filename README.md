

## How to Run Tests

Follow these steps to run the API tests in this repository:

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/your-repo.git

2. Navigate to the Project Directory
Move into the project directory:

bash
cd Coding_Assessment

3. Install Dependencies
Install the necessary npm packages:

bash
npm install

4. Set Up Environment Variables
If your tests require a GoRest API token, you can set it up by creating a .env file in the root of the project:

plaintext
API_TOKEN=your_gorest_api_token
Alternatively, you can directly replace the token in the test file if you're just doing a quick run.

5. Run the Tests
To run the tests, use the following command:

bash
npx playwright test
This command will execute all tests located in the tests directory.

6. View Test Results
After running the tests, you can generate and view a detailed report by running:

bash
npx playwright show-report
This will open a browser window displaying the results of the test run, including any passed or failed tests.
