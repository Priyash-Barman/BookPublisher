'use strict'

// books data--------------------------------------
const book1 = {
    title: 'Programming in c++',
    subject: 'C++',
    author: "Alex",
    dateOfPublishing: "01-02-2021",
    price: 599,
}

const book2 = {
    title: 'Programming in Java',
    subject: 'Java',
    author: "Sujit",
    dateOfPublishing: "01-02-2021",
    price: 699,
}

const book3 = {
    title: 'Programming in Python',
    subject: 'Python',
    author: "Sagar",
    dateOfPublishing: "01-02-2021",
    price: 399,
}

const book4 = {
    title: 'Programming in Kotlin',
    subject: 'Kotlin',
    author: "Sujoy",
    dateOfPublishing: "01-02-2021",
    price: 499,
}

const book5 = {
    title: 'Programming in Javascript',
    subject: 'JavaScript',
    author: "Raju",
    dateOfPublishing: "01-02-2021",
    price: 499,
}

// -----------------------------------------------------
const books = [book1, book2, book3, book4, book5];

const home = document.getElementById('homepage');
const bookList = document.getElementById('bookList');
const authorReg = document.getElementById('authorReg');
const feedback = document.getElementById('feedback');
const content = document.getElementById('content');
const FeedbackUser = document.getElementById('FeedbackUser');
const FeedbackMsg = document.getElementById('FeedbackMsg');

// templates--------------------------------------------
// home content 
const homeContent = ` 
        <div class="home-info"id="home-info">
            <p>
                <i style="color: blue":>Agun Publisher</i> has been publishing school, college and universitiy books for more than 25 years. Our books span K-12 to University level in nearly all subjects offered in schools/colleges/universities in all over world. Our books adhere to the current syllabus and offer to learn support to students in the best possible manner. The language is simple and clear, illustrations and diagrams help the student to grasp the matter easily; design and graphics make our books more student-friendly and appealing.
                <br><br>All our books go through checks by our team of editors before being printed. Our goal is to provide error-free books to students at affordable prices. To accompany our books, <i style="color: blue">Agun Publisher App</i> provides supporting material that is not given in the printed books. It is completely free, available on The Google Play store, and contains additional theory, problems, exercises, solutions and test papers.
                <br><br>We love feedback from our community of students, teachers and authors Our Facebook page is where we post news about ourselves. We welcome all of you to browse through our website, visit and like our social media pages and to participate in our endeavors to support learning and make better books
            </p>
            <div class="contact">
                <strong>Contact Us</strong>
                <div class="contact-data">
                    <ul>
                        <li>+91 9563 777 346</li>
                        <li>+91 9932 765 025</li>
                        <li>agunpublisher@agun.com</li>
                    </ul>
                    <ul>
                        <li>Address</li>
                        <li>Sitai, Cooch Behar, West Bengal</li>
                        <li>736167</li>
                    </ul>
                </div>
            </div>
        </div>`;
// book content
let bookContent = ` 
    <div class="bookListPage"id="bookListPage">
        <h5>LIST OF BOOKS</h5>
        <table class="bookTable"id="bookTable">
            <thead>
                <th>TITLE</th>
                <th>SUBJECT</th>
                <th>AUTHOR(S)</th>
                <th>DATE OF PUBLISH</th>
                <th>PRICE</th>
            </thead>`;
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
bookContent += `</table></div>`;
// author content
const authorContent = `
            <div class="authorRegContent">
                <h4>Author Registration form</h4>
                <form onsubmit="authorSubmit()" class="authorForm">
                    <input type="text" placeholder="Enter proposed book title" required>
                    <input type="text" placeholder="Subject" required>
                    <input type="text" placeholder="Author name" required>
                    <input type="email" placeholder="Author email" required>
                    <input type="number" placeholder="Phone no" required>
                    <label for="expectedDate" class="expectedDate">Expected date to complete the book :</label>
                    <input type="date" id="expectedDate" required>
                    <input type="submit" value="submit" class="submitBtn">
                </form>
            </div>
`;

// feedback content
const feedbackContent = ` 
    <div class="feedbackForm"id="feedbackForm">
        <h4>&nbsp;&nbsp;Enter your Feedback</h4>
        <form onsubmit="submitFeedback()">
            <input type="text"id="FeedbackUser"placeholder="Enter your name"required>
            <textarea name=""id="FeedbackMsg"cols="30"rows="10"placeholder="Enter feedback here..." required></textarea>
            <input type="submit"value="submit"class="submitBtn">
        </form>
    </div>`;


// by default home----------------------------------
content.innerHTML = homeContent;

// click events ------------------------------------
// home 
const myHomepage = function () {
    home.classList.add('active');
    bookList.classList.remove('active');
    authorReg.classList.remove('active');
    feedback.classList.remove('active');
    content.innerHTML = homeContent;
}

home.addEventListener('click', myHomepage);

// bookList 
bookList.addEventListener('click', () => {
    bookList.classList.add('active');
    home.classList.remove('active');
    authorReg.classList.remove('active');
    feedback.classList.remove('active');
    content.innerHTML = bookContent;
});

// author 
authorReg.addEventListener('click', () => {
    authorReg.classList.add('active');
    bookList.classList.remove('active');
    home.classList.remove('active');
    feedback.classList.remove('active');
    content.innerHTML = authorContent;
});

// feedback 
feedback.addEventListener('click', () => {
    feedback.classList.add('active');
    bookList.classList.remove('active');
    authorReg.classList.remove('active');
    home.classList.remove('active');
    content.innerHTML = feedbackContent;
});

const submitFeedback = function () {
    content.innerHTML = `<h4 class="message">Feedback submitted successfully...<h4>`;
    setTimeout(myHomepage, 4000);
}
let authorRegInfo = [];
const authorSubmit = function () {
    authorRegInfo.push()
    content.innerHTML = `<h4 class="message">Author submitted successfully...<h4>`;
    setTimeout(myHomepage, 4000);
}