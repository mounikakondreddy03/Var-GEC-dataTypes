//  Task :1.   

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

delete person.city;
person.country = "USA";
person.age = 31;

console.log(person);

//  correct answer - { name: "Alice", age: 31, country: "USA" } 


// 2.How can you remove the model property from the following object using the delete operator?

const smartphone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 799
};
delete smartphone.model
console.log(smartphone)


// correct answer - delete smartphone.model;

// 3.

const book = {
    title: "Learn JavaScript",
    author: "John Smith",
    pages: 400
};
book.genre = "Programming";
console.log(book)

// correct answer - book.genre = "Programming"; 

// 4. Console the “fish”

var data = [10, 20, ["apple", "banana"], ["cat", ["dog", "elephant"], "fish"], "grape"];
console.log((data[3][2])) // output fish

// 5. Console. The “eraser”

var items = [["pen", "pencil"], "notebook", [1, 2, [3, 4, ["eraser"]]], "marker"];
console.log(items[2][2][2][0]) // output eraser