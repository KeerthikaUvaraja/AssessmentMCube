import { Given, When, Then, After, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Page, Browser } from 'playwright';
import { googleLocators } from '../locators';

let page: Page;
let browser: Browser;

// Set default timeout to 60 seconds for all steps
setDefaultTimeout(60 * 1000);

// Custom logging function to simulate System.out.println
function log(message: string) {
  console.log(`[LOG]: ${message}`);
}

// Given step for all scenarios
Given('I am on the Google homepage', async function () {
  log('Navigating to the Google homepage...');
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.google.com');

  // Accept Google's cookies (if the prompt appears)
  const acceptCookiesButton = await page.$(googleLocators.acceptCookiesButton);
  if (acceptCookiesButton) {
    await acceptCookiesButton.click();
    log('Accepted cookies.');
  }

  // Wait for the search input to be visible and interactable
  await page.waitForSelector(googleLocators.searchInput, { state: 'visible', timeout: 30000 });
  log('Search input is visible and ready for interaction.');
});

// When step for Scenario 1: Search for a common term
When('I search for {string}', async function (searchTerm: string) {
  log(`Searching for the term: "${searchTerm}"`);
  await page.fill(googleLocators.searchInput, searchTerm);
  await page.press(googleLocators.searchInput, 'Enter');
  await page.waitForSelector(googleLocators.resultsContainer, { state: 'visible', timeout: 30000 });
  log('Search results are displayed.');
});

// When step for the exact phrase scenario
When('I search for the exact phrase {string}', async function (searchTerm: string) {
  log(`Searching for the exact phrase: "${searchTerm}"`);
  await page.fill(googleLocators.searchInput, `"${searchTerm}"`);
  await page.press(googleLocators.searchInput, 'Enter');
  await page.waitForSelector(googleLocators.resultsContainer, { state: 'visible', timeout: 30000 });
  log('Search results are displayed for the exact phrase.');
});

// When step for the "I'm Feeling Lucky" button
When('I enter {string} in the search bar', async function (searchTerm: string) {
  log(`Entering the search term: "${searchTerm}"`);
  await page.fill(googleLocators.searchInput, searchTerm);
});

When('I click the "I\'m Feeling Lucky" button', async function () {
  log('Clicking the "I\'m Feeling Lucky" button...');
  await page.click(googleLocators.feelingLuckyButton);
});

// Then step for navigating to the top result
Then('I should be navigated to the top search result', async function () {
  log('Waiting for navigation to the top search result...');
  try {
    // Try to wait for navigation
    await page.waitForNavigation({ waitUntil: 'networkidle', timeout: 60000 });
  } catch (error) {
    log('Navigation did not complete within the expected time. Checking current URL...');
  }

  const currentURL = page.url();
  log(`Current URL after clicking "I'm Feeling Lucky": ${currentURL}`);
  
  // Ensure we are no longer on the Google homepage
  expect(currentURL).not.toBe('https://www.google.com');
  log('Navigation to the top search result is confirmed.');
});

// Then step for Scenario 1: Check search results
Then('I should see results related to {string}', async function (expectedText: string) {
  log(`Verifying that the search results contain the term: "${expectedText}"`);
  const resultsText = await page.textContent(googleLocators.resultsContainer);
  expect(resultsText).toContain(expectedText);
  log('Search results verification completed successfully.');
});

// Then step for Scenario 2: Check exact phrase in results
Then('I should see results containing the exact phrase {string}', async function (expectedText: string) {
  log(`Verifying that the search results contain the exact phrase: "${expectedText}"`);
  const resultsText = await page.textContent(googleLocators.resultsContainer);
  expect(resultsText).toContain(expectedText);
  log('Exact phrase verification completed successfully.');
});

// Closing the browser after all scenarios
After(async function () {
  if (browser) {
    log('Closing the browser...');
    await browser.close();
    log('Browser closed.');
  }
});
