# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

primitive data types:
string
number
boolean
null
undefined
symbol

complex data types:
array
objects

2. What's the difference between =, ==, and === in JavaScript?

= assignment
== equality
=== strict equality

3. What is the difference between an array's index and length?

The index is zero based and refers to the location of elements within the array. The length is the number of elements in the array.

4. What are the three parts of a for loop?

The start (eg let i = 0), the stop (eg i < arr.length), and the incrementor (eg i++).

5. What is a function's declaration, argument, and call?

A function declaration is where a function is defined. A function argument(s) is the value(s) passed into a function's parameter(s). The function call is when the function is invoked.

6. What are the three main steps in saving work to github?

git add
git commit
git push

7. What is the terminal command to move directories?

cd

8. Do you have a suggestion for a Check In question?

"What is one fun thing you did this week that didn't involve coding?"

9. What was your favorite topic this week?

Classes and inheritance.

10. What was your "A-ha!" moment this week?

Learning about inheritance and what extends does.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```

This function will produce an error because the variable text was declared twice.

2. What is JSON? How does it relate to javascript objects?

JSON stands for Javascript Object Notation. It is a way to organize data in a manner that is most often used in APIs.

3. Describe a closure, what is it good for and how do you recognize one?

A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. It's useful for protecting local variables from the outer scope. The local variables are essentially private and the closure can serve as a getter or setter for them.

