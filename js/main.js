const URL = "https://dummyjson.com/quotes/random";

async function getRandomQuote() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP ERROR. Status ${response.status}`);
        }
        const data = await response.json();
        const author = data.author;
        const quote = data.quote;

        console.log(quote, author);
    } catch (err) {
        console.log("Fetch error:", err);
    }
}

getRandomQuote();