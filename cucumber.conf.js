const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60000)

// Before anything Launch the browser
BeforeAll(async function () {
    global.browser = await chromium.launch({  
        headless: false, //hides or shows browser
        slowMo: 1000, //slows down tests
    });
 });

 // Before a scenario create new page with context
Before(async function () {
   global.context = await global.browser.newContext();
   global.page = await global.context.newPage();
});

// After a scenario close the page and close the context
After(async function () {
   await global.page.close();
   await global.context.close();
});

 // After everything close the browser
 AfterAll(async function () {
    await global.browser.close();
 });