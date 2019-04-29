# Opie Timed 10-Meter Walk Test
## [Website](https://andrewim.github.io/)
### User Story
As a certified Prosthetist, I need to conduct the “Timed 10 Meter Walk Test” on my patients and record the results in their medical record.  I want a simple tool to help me conduct the test and create a short text statement about the test results that I could cut and paste into my full Electronic Medical Record system.  
### Assumption
As a certified Prosthetist, I need to conduct the “Timed 10 Meter Walk Test” on my patients and record the results in their medical record.  I want a simple tool to help me conduct the test and create a short text statement about the test results that I could cut and paste into my full Electronic Medical Record system.  

### Design
I decided to create a website so that it would work both on a phone as well as a computer to give the user flexibility when recording a patient. The website takes in information for the user about the patient so that the user can either submit it to a database (not implemented) or convert it to CSV format for ease of copying and pasting the results. It also has a timer function in case the user does not have a stopwatch on them. The timer only records in seconds because I am taking the assumption that the patient could walk the distance in under a minute. In case the patient does take over a minute the timer does go past 60 seconds but will still retain the seconds format (1min 20seconds= 80seconds). That was the only tool I could think of to help the user record the timed 10-meter test since the information that is unique is just the time. The input fields do have to be valid for it to be submitted or converted to CSV format. These were the main things that I could think of for implementing the project.

### The Look
![alt text](https://github.com/AndrewIm/andrewim.github.io/blob/master/Excercise.jpg "Excercise")
Originally, I thought of using some stock photos, but it didn't fit the look of the website, so I just choose to do gradient background with the OPIE logo and fields to make it look modernish. Also added some animations for when the page is initially loaded and when a cursor is over the button.


### Implementation
Started with basic inputs and buttons and a function to convert the inputs into CSV format.
![alt text](https://github.com/AndrewIm/andrewim.github.io/blob/master/First.png "First")

Afterwards added css into the page to make it look more appealing.
![alt text](https://github.com/AndrewIm/andrewim.github.io/blob/master/Second.png "Second")

Added the timer to help the user conduct the test as well as input validation to make the output correct. Also added a comment input and submit button.
![alt text](https://github.com/AndrewIm/andrewim.github.io/blob/master/Final%20Web.png "Final")
