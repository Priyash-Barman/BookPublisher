const book1 = {
    title: 'Programming in c++',
    subject: 'C++',
    author: "R. Neapolitan ",
    dateOfPublishing: "01-02-2021",
    price: 599,
}

const book2 = {
    title: 'Programming in Python',
    subject: 'Python',
    author: "G. Brassard",
    dateOfPublishing: "01-02-2021",
    price: 399,
}

const book3 = {
    title: 'Programming in Java',
    subject: 'Java',
    author: "Herbert Schildt",
    dateOfPublishing: "01-02-2021",
    price: 699,
}

const book4 = {
    title: 'Programming in Kotlin',
    subject: 'Kotlin',
    author: "S. Sahni",
    dateOfPublishing: "01-02-2021",
    price: 499,
}

const book5 = {
    title: 'Programming in Javascript',
    subject: 'JavaScript',
    author: "P. Brately",
    dateOfPublishing: "01-02-2021",
    price: 499,
}

// -----------------------------------------------------
const books = [book1, book2, book3, book4, book5];


// book content
let bookContent = `
<thead>
    <th>TITLE</th>
    <th>SUBJECT</th>
    <th>AUTHOR(S)</th>
    <th>DATE OF PUBLISH</th>
    <th>PRICE</th>
</thead>
`;
let x = 1;
books.forEach(book => {
    bookContent += ` 
    <tr class="row-${x % 2}">
    <td>${book.title}</td>
    <td>${book.subject}</td>
    <td>${book.author}</td> 
    <td>${book.dateOfPublishing}</td>
    <td>${book.price}</td> </tr>`;
    x++;
});

document.getElementById('bookTable').innerHTML = bookContent;
