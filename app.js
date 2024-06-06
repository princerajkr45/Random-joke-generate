document.addEventListener("DOMContentLoaded", () => {
    const jokeContainer = document.getElementById("joke");
    const jokeButton = document.getElementById("new-joke-btn");

    const fetchJoke = async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const joke = await response.json();
            jokeContainer.innerHTML = `<p>${joke.setup}</p><p><strong>${joke.punchline}</strong></p>`;
        } catch (error) {
            jokeContainer.innerHTML = "<p>Sorry, something went wrong. Please try again later.</p>";
        }
    };

    jokeButton.addEventListener("click", fetchJoke);

    // Fetch an initial joke when the page loads
    fetchJoke();
});
