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