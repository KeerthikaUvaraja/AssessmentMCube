Feature: Google Search Functionality

  Scenario: Search for a common term
    Given I am on the Google homepage
    When I search for "Playwright"
    Then I should see results related to "Playwright"

  Scenario: Search with an exact phrase
    Given I am on the Google homepage
    When I search for the exact phrase "open-source automation tool"
    Then I should see results containing the exact phrase "open-source automation tool"

  Scenario: Use the "I'm Feeling Lucky" Button
    Given I am on the Google homepage
    When I enter "Playwright" in the search bar
    And I click the "I'm Feeling Lucky" button
    Then I should be navigated to the top search result