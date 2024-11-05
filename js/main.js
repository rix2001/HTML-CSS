// Toggle dropdown visibility
function toggleDropdown(event) {
    event.preventDefault(); // Prevent the link from redirecting
    const dropdown = document.getElementById('user-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if clicked outside of it
window.onclick = function(event) {
    if (!event.target.matches('.user-icon-link img')) {
        const dropdown = document.getElementById('user-dropdown');
        if (dropdown && dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
}

// Fetch the JSON data from the file located in the data folder
/*fetch('json/posts.json')
    .then(response => response.json())  // Convert response to JSON
    .then(data => {
        console.log(data);  // Log data or use it in your application
        // Here you can dynamically create HTML elements to display the posts
        data.forEach(post => {
            // Example of creating HTML elements
            const postContainer = document.createElement('div');
            postContainer.className = 'post';

            const title = document.createElement('h3');
            title.textContent = post.title;

            const content = document.createElement('p');
            content.textContent = post.content;

            postContainer.appendChild(title);
            postContainer.appendChild(content);
            document.body.appendChild(postContainer);  // Append to body or another element
        });
    })
    .catch(error => console.error('Error fetching JSON data:', error)); */
    
    fetch('https://api.jsonbin.io/v3/b/672a434fad19ca34f8c4b034')
        .then(response => response.json())
        .then(data => console.log(data));