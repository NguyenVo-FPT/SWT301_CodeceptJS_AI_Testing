Feature('Date Time Checker');

Scenario('Toggle dark mode', async ({ I }) => {
  I.amOnPage('http://localhost:3000/'); // Ensure your application URL is set appropriately
  I.seeElement('#themeToggle');
  I.click('#themeToggle');
  // Optionally, if there's a visible indicator for mode change, verify it.
});

Scenario('Enter a valid date and check', async ({ I }) => {
  I.amOnPage('http://localhost:3000/'); // Ensure your application URL is set appropriately
  I.fillField('#da', '12');
  I.fillField('#month', '10');
  I.fillField('#year', '2023');
  I.click('#checkBtn');
  // Add assertions if there's a result displayed after checking
  // e.g., I.see('Valid date');
});

Scenario('Use tomorrow shortcut', async ({ I }) => {
  I.amOnPage('http://localhost:3000/'); // Ensure your application URL is set appropriately
  I.click('#tomorrowBtn');
  // Add assertions to verify the date fields have been updated appropriately
  // e.g., I.seeInField('#day', 'expectedDayTomorrow');
});
