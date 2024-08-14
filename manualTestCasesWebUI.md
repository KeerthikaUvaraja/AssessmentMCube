Test Case 1: Search for a Common Term
    Test Case ID: TC001
    Title: Search for a common term on Google
    Objective: Verify that searching for a common term returns relevant results.
    Preconditions:
        - The user must have access to a browser.
        - The user must be on the Google homepage (https://www.google.com).
Steps:
    - Open a browser and navigate to https://www.google.com.
    - If a cookie consent prompt appears, click "I agree" to accept the cookies.
    - In the Google search bar, type the term "Playwright".
    - Press the Enter key or click on the "Google Search" button.
Expected Result:
    The search results page should display a list of results related to the term "Playwright".
################################################################
Test Case 2: Search with an Exact Phrase
    Test Case ID: TC002
    Title: Search for an exact phrase on Google
    Objective: Verify that searching for an exact phrase returns results containing that exact phrase.
    Preconditions:
        - The user must have access to a browser.
        - The user must be on the Google homepage (https://www.google.com).
Steps:
    - Open a browser and navigate to https://www.google.com.
    - If a cookie consent prompt appears, click "I agree" to accept the cookies.
    - In the Google search bar, type the exact phrase "open-source automation tool" (including the quotes).
    - Press the Enter key or click on the "Google Search" button.
Expected Result:
    - The search results page should display results that include the exact phrase "open-source automation tool" within the content.
#############################################################
Test Case 3: Search with "I'm Feeling Lucky"
    Test Case ID: TC003
    Title: Verify "I'm Feeling Lucky" Button Navigates to Top Search Result on Google
    Objective: Verify that the "I'm Feeling Lucky" button correctly navigates to the first result when a search term is entered.
    Preconditions:
        - The user must have access to the Google homepage (https://www.google.com).
Steps:
    - Open a browser and navigate to https://www.google.com.
    - If a cookie consent prompt appears, click "I agree" to accept the cookies.
    - In the Google search bar, type the term "Playwright".
    - Click the "I'm Feeling Lucky" button.
Expected Result:
    - The browser should navigate directly to the top search result for the term "Playwright".
    - The user should be redirected from the Google homepage to the website or page that is ranked as the top result for the search term "Playwright".
################################################################