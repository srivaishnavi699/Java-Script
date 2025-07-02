# Java-Script

Project Readme: JavaScript and DOM Interaction Examples
This repository contains a collection of HTML and JavaScript files demonstrating fundamental concepts of web development, including DOM manipulation, event handling, and JavaScript functions.

Files Overview
HTML Files
eventlisteners.html

Description: This file demonstrates how to use event listeners in JavaScript, specifically focusing on click events for buttons and input fields. It includes an input field and "Reset" and "Submit" buttons.

Key Features:

An input field for text entry.

A "Reset" button that clears the input field.

A "Submit" button that prevents default form submission and displays an alert with the input value.

h1.html

Description: This HTML file illustrates various methods of accessing and manipulating DOM elements using JavaScript. It shows how to get elements by ID, class name, and tag name, and how to change their text content. It also demonstrates creating and appending new elements to the document.

Key Features:

Changing the document title dynamically.

Updating text content of paragraphs and headings using getElementById, getElementsByClassName, and getElementsByTagName.

Creating a new h3 element and adding it to the page.

An input field and a button to trigger the DOM manipulations.

keyboardlistners.html

Description: This file demonstrates how to implement keyboard event listeners (keydown, keypress) in JavaScript to react to user input from the keyboard. It changes the background color of the page and displays the pressed key's code or specific information for the "Enter" key.

Key Features:

Listens for keydown events on the entire document body.

Changes the background color of the body based on the pressed key.

Displays the key code for most keys.

Triggers an alert with the key pressed if the "Enter" key is pressed.

JavaScript Files
functions.js

Description: This JavaScript file provides examples of different types of functions in JavaScript. It covers functions with and without parameters, and with and without return values, along with a demonstration of default parameters.

Key Features:

add(x, y): Function with parameters and a return value for addition.

sub(x, y): Function with parameters and a return value for subtraction.

multiply(x, y): Function with parameters and a return value for multiplication.

displayMessage(message): Function with a parameter but no return value.

greet(): Function with no parameters and no return value.

getCurrentYear(): Function with no parameters but a return value.

greetUser(name = "Guest"): Function demonstrating default parameters.

How to Use
To interact with these examples:

Open the HTML files: Simply open any of the HTML files (eventlisteners.html, h1.html, keyboardlistners.html) in your web browser.

Inspect the JavaScript: The JavaScript code for each HTML file is either embedded within <script> tags or linked as external .js files. You can view the code by opening the respective .js files in a text editor or by using your browser's developer tools.

Experiment with interactions:

In eventlisteners.html, type text and click the buttons to see the event handling in action.

In h1.html, enter your name and click the button to observe how the page content changes dynamically.

In keyboardlistners.html, press various keys on your keyboard to see the background color change and key information displayed.

For functions.js, open your browser's developer console (usually by pressing F12) and load the script or copy-paste its content to see the function outputs logged.

Empty Files
