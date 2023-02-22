//packages
const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

//launch url
const homepage = 'http://localhost:3000'

//selectors
const homepageElement = '.borderTodo'
const todoInput = '.todo-input';
const todoButton = '.todo-button';
const todoItem = '.todo .todo-item ';

Given('a user has navigated to the homepage', async function () {
    await page.goto(homepage)
    const locator = await page.locator(homepageElement)
    await expect(locator).toBeVisible()
  });

When('the user adds {string} to the todo list', async function (item) {
    await page.fill(todoInput , item)
    await page.click(todoButton)
  });

Then('I want to see {string} in the list', async function (item) {
    const text = await page.innerText(todoItem)
    await expect(text).toBe(item)
  });