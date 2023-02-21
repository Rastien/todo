Feature: Add Item
Description: As a user I want to be able to add tasks I need to do to my to do list
Scenario: Add walk the dog to the to do list
Given a user has navigated to the homepage
When the user adds "walk dog" to the todo list using the webUI
Then card "walk dog" should be displayed on the webUI