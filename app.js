//1. Write JavaScript code to fetch the first item in the grocery items list.
let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];
console.log(shoppingList[0]);

// 2.Write JavaScript code to add "Carrots" to the end of the grocery items list. Log the updated grocery items list.
shoppingList.push("carrots");
console.log(shoppingList); //to check the updated array

// 3.Write JavaScript code to remove the last item from the grocery items list. Log the updated grocery items list before and after the removal.
console.log(shoppingList); //before removal
shoppingList.pop();
console.log(shoppingList); //after removal

// 4.Write JavaScript code to remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" in their place. Log the updated grocery items list before and after the splice operation.
let List = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];
console.log(List) //before removal
List[4].splice(1, 2, "Cucumbers", "Bell Peppers");
console.log(List); //after removal 


//TASK
let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

// 1.Write JavaScript code to fetch the student's name.
console.log(student.name);

// 2.Write JavaScript code to add a new property phone with the value "123-456-7890" to the student object. Log the updated student object.
student.phone = "123-456-7890";
console.log(student); //as arrays is reference datatype grade catagory is removed or effected pls check the next QUESTION-3

// 3.Write JavaScript code to remove the grade property from the student object. Log the updated student object before and after the removal.
delete student.grade
console.log(student);

// 4.Write JavaScript code to modify the student's age to 21. Log the updated student object.
student.age = 21;
console.log(student);


// Conditionals assignment

// 1.Write a JavaScript function that takes a number as input and returns "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.
let input = -1
if(input>=0){
    console.log("Positive");
}
else{
    console.log("Negative");
}

//2. Create a JavaScript program that evaluates a student's grade based on their score. The program should output "A" if the score is between 90 and 100, "B" if it's between 80 and 89, "C" if it's between 70 and 79, "D" if it's between 60 and 69, and "F" if it's below 60.
let marks = 56;
if(marks>=90 && marks<=100){
    console.log("Grade A");
}
else if(marks>=80 && marks<=89){
    console.log("Grade B");
}
else if(marks>=70 && marks<=79){
    console.log("Grade C");
}
else if(marks>=60 && marks<=69){
    console.log("Grade D");
}
else if(marks<60){
    console.log("Grade F")
}
else{
    console.log("Please enter marks between 1-100!")
}

// 3.Write a JavaScript function that takes a string as input and returns "Truthy" if the string is not empty, "Falsy" otherwise.

if(String){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}


