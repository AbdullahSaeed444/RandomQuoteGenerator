// Fetch a random quote from an API
async function getNewQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').textContent = data.content;
        document.getElementById('author').textContent = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

// Initial quote on page load
getNewQuote();


// Fetch a random quote from an API
async function getNewQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();

        // Fade out the existing quote
        document.getElementById('quote').style.opacity = 0;
        document.getElementById('author').style.opacity = 0;

        // Wait for the transition to complete
        setTimeout(() => {
            // Update the quote and author
            document.getElementById('quote').textContent = data.content;
            document.getElementById('author').textContent = `- ${data.author}`;

            // Fade in the new quote
            document.getElementById('quote').style.opacity = 1;
            document.getElementById('author').style.opacity = 1;
        }, 200); // Adjust the delay as needed
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

// Initial quote on page load
getNewQuote();
