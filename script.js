// ================================
// Part 1: Variables, Data Types, Operators, Conditionals
// ================================

// Variable declarations
let userName = "Esther";   // String
let yearOfBirth = 2005;    // Number
let isStudent = true;      // Boolean

// Operator example
let currentYear = 2025;
let age = currentYear - yearOfBirth;  // subtraction operator

console.log("User Name:", userName);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Function to capture user input and use conditionals
function checkAge() {
  let inputAge = document.getElementById("ageInput").value;

  // Convert input to a number
  inputAge = Number(inputAge);

  // Conditional statement
  if (inputAge >= 18) {
    document.getElementById("result").innerText = "You are an adult.";
  } else if (inputAge > 0 && inputAge < 18) {
    document.getElementById("result").innerText = "You are a minor.";
  } else {
    document.getElementById("result").innerText = "Please enter a valid age.";
  }
}

// Part 2: Functions — The Heart of Reusability

// 1. A function to calculate the sum of two numbers
function calculateTotal(a, b) {
  return a + b;
}
console.log("Total:", calculateTotal(10, 20)); // Output: 30

function showTotal() {
  let result = calculateTotal(50, 30); // Example values
  document.getElementById("total").innerText = "Total: " + result;
}

// 2. A function to format a greeting message
function greetUser(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}
console.log(greetUser("Esther"));

// 3. A function to toggle visibility of an element (for DOM use later)
function toggleVisibility(elementId) {
  let element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// Part 3: Loops

// Example 1: Using for loop to list fruits
function showFruits() {
  let fruits = ["Mango", "Apple", "Banana", "Orange"];
  let output = "";

  for (let i = 0; i < fruits.length; i++) {
    output += "<li>" + fruits[i] + "</li>";
  }

  document.getElementById("fruitList").innerHTML = output;
}

// Example 2: Using for loop for countdown
function startCountdown() {
  let countdownText = "";
  for (let i = 5; i >= 1; i--) {
    countdownText += i + " ";
  }
  countdownText += "🚀 Blastoff!";
  document.getElementById("countdown").innerText = countdownText;
}

// Example 3: Using while loop to show numbers
function showNumbers() {
  let num = 1;
  let output = "";

  while (num <= 5) {
    output += num + " ";
    num++;
  }

  document.getElementById("numberList").innerText = output;
}

// Part 4: DOM Manipulation

// Example 1: Change text content
function changeText() {
  document.getElementById("textExample").innerText = "🎉 The text has been changed!";
}

// Example 2: Toggle background color
function toggleColor() {
  let box = document.getElementById("colorBox");
  if (box.style.backgroundColor === "lightblue") {
    box.style.backgroundColor = "lightgreen";
  } else {
    box.style.backgroundColor = "lightblue";
  }
}

// Example 3: Add new list items dynamically
let counter = 1;
function addListItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.innerText = "New Item " + counter;
  list.appendChild(newItem);
  counter++;
}
