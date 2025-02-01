// Handling Header Visibility on Scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, hide the header
    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        // If scrolling up, show the header
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// Rating System
const stars = document.querySelectorAll('.star');
const ratingMessage = document.getElementById('rating-message');
let rating = 0;

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        rating = index + 1; // Update the rating value
        updateStars(rating);
        showRatingMessage(rating);
    });
});

function updateStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function showRatingMessage(rating) {
    if (rating === 1) {
        ratingMessage.textContent = "We're sorry to hear you didn't enjoy your experience. Please let us know how we can improve.";
    } else if (rating === 2) {
        ratingMessage.textContent = "Thank you for your feedback! We'll work on improving.";
    } else if (rating === 3) {
        ratingMessage.textContent = "Glad you had a good experience! We'll keep striving for excellence.";
    } else if (rating === 4) {
        ratingMessage.textContent = "Great! We're happy you liked it! Feel free to share your thoughts!";
    } else if (rating === 5) {
        ratingMessage.textContent = "Excellent! Thank you for your perfect rating! We appreciate your support.";
    } else {
        ratingMessage.textContent = ""; // Clear the message when no rating is selected
    }
}

// Store ratings in an array
let ratingsArray = [];

function storeRating(rating) {
    ratingsArray.push(rating); // Add the new rating to the array
    console.log("Current ratings:", ratingsArray); // Log ratings array to the console (for testing)
}

// Example: Add a rating when user clicks on a star (store it in the array)
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        rating = index + 1;
        storeRating(rating); // Store the rating in the array
    });
});

// Contact Form Handling (optional)
const contactForm = document.querySelector('.contact-section');
const contactButton = contactForm.querySelector('button');

contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert('Thank you for contacting us! We will get back to you soon.');
        // Reset form
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
