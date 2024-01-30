//  ==================================  Answer 4 ===================================

const fetchData = async() =>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
            //In HTTP, a status code of 200 indicates a successful response
                if (response.status == 400) {
                    throw new Error(`Failed to fetch data. Status: ${response.status}`);
                }
    
            const data = await response.json();
    
            // Extract title from the initial 5 posts from the api data.
            const titles = data.slice(0, 5).map(post => post.title);   
            return titles;

        } catch (error) {
            // Handling errors
            throw new Error(`Error fetching data: ${error.message}`);
        }
    };
    
    fetchData()
        .then(titles => {
            console.log("Titles of the first 5 posts:", titles);
        })
        .catch(error => {
            console.error("Error:", error.message);
        });
    