require('dotenv').config();

// Print out value of API key stored in .env file


async function getImg(){
    const endPoint = `https//api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}0cVKGW9uJoLjbZBsVjTZ2FNtgTBETxRT&q=fox&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        const response = await fetch(endPoint + "&q=" + getImg)
            const data = await response.json()
                const gifUrl = data.data[0].url
                    console.log("Gif Url", gifUrl)
                        return gifUrl
}

getImg('fox')

console.log(process.env.API_KEY)

//// HTML & CSS 

document.getElementById("searchButton").addEventListener("click", function() {
    getImage("fox"); // Hardcoded value, you can change this to any desired search query
});

function getImage(query) {
    // Assume getImage function fetches image URL based on the query
    // In this example, let's just return a hardcoded URL for demonstration purposes
    const imageURL = "https://via.placeholder.com/400"; // Placeholder image URL
    displayImage(imageURL);
}

function displayImage(url) {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = `<img src="${}" alt="Search Result">`;
}