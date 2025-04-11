const book1 = { 
    "title": "Pride and Prejudice",
    "description": "A love story between an equally proud and prejudiced Elizabeth Bennett and Mr. Darcy",
    "pages": 259,
    "author": "Jane Austen",

};
// Accessing values from the object

console.log(book1.title); // Expected output: Pride and Prejudice
console.log(book1["author"]); // Expected output: Jane Austen
console.log(book1.pages); // Expected output: 259
console.log(book1.description); // Expected output: A love story between an equally proud and predudice Elizabeth Bennett and Mr. Darcy

console.log(book1["title", "author", "description", "pages"]); 

book1.description = "Elizabeth Bennet and Mr. Darcy must overcome their pride and prejudice to find true love with one another"
