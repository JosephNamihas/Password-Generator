# JavaScript Password Generator

## Description
I was tasked by the client to create a program that would generate a random password based on multiple criteria:

- To give the user a prompt how long the password should be (between 8 and 128 characters) 

- To give the user prompts on if it should have lowercase, uppercase, numbers or special characters. It must have had at least one of these.

- In built validation that would detect if incorrect data types were entered

This was a fun project which made me think about different ways to present data and to merge it based on user input. 
I learnt a lot about array methods and how programs are mainly just a group of functions. Also gave me a lot of experience with data structures and how they work.


## Challenges Faced

### Concatenating the Arrays

Found a few difficulties when merging the array into a central "password array" which would then be used to generate the actual password. At one point, commas were being printed after every character. I made use of the join() method to recreate the array into a string with no commas.

### Shuffling the Array

I looked into different algorithms on how to shuffle an array which was quite interesting. The 'Fisher Yates shuffle' was something I found and implemented. It involves using a random number to draw an element from an array until none remain. 

### Optimisation

I felt I could have done this project in less lines of code.
The important thing right now is that it works. It's functionable and it scales. Like a lot of these projects, I hope to come back in 6 months time and do the project in a lot less code. That could be a fun challenge at the end of my bootcamp

## Regenerating the Password

Had to add a seperate function to the event listener to make sure the password was generated again after the button was pressed. Previously, it wouldn't alert the user on the screen, you would need to press the button to generate the initial password. This could be poor design as once the prompts were anwsered, the user may be unsure what to do.

## Installation

Run the website by following the GitGub Pages link: 
https://josephnamihas.github.io/Password-Generator/

Follow the prompts to generate a password.
If a new password is required, press it again.


## Useage


![Generated Password](/images/password-generated.PNG)

- Appears in the text box when prompts are answered.

![Password Regenerated](/images/password-regenerated.PNG)

- When clicking the 'Generate Password' button, the program is repeated without the prompts and produced a shuffled password

![Alert for No Option Chosen](/images/datatype-alert.PNG)

- Alert when an option isn't chosen

![128 character password with all options](/images/longpassword.PNG)


## Credits

https://www.w3schools.com/

https://developer.mozilla.org/en-US/ - For Array methods
## License 

MIT License

Copyright (c) [2022] [Joseph Namihas]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
