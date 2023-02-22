Feature: Add task to be completed to the list
Description: User needs to add a single task to the list to be a mvp

    Scenario: Add walk the dog as a task
        Given a user has navigated to the homepage
        When  the user adds 'walk the dog' to the todo list
        Then  I want to see 'walk the dog' in the list
    
    Scenario: Add walk the cat as a task
        Given a user has navigated to the homepage
        When  the user adds 'walk the cat' to the todo list
        Then  I want to see 'walk the cat' in the list
    
    Scenario: Add go to the supermarket as a task
        Given a user has navigated to the homepage
        When  the user adds 'go to the supermarket' to the todo list
        Then  I want to see 'go to the supermarket' in the list
    


 
  
    

    
    
    



    