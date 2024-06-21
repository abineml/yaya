function myFunction() {
    document.getElementById("demo").innerHTML="level 10 gyaat.";

}
function addGif() {
    // Create a new image element
    const gifImage = document.createElement('img');

    // Set the src attribute to the URL of your GIF
    gifImage.src = 'https://images.app.goo.gl/6HvhvQmruU29pE548';

    // Set alt text for accessibility
    gifImage.alt = 'GIF Image';

    // Optionally, add a class for styling
    gifImage.classList.add('gif-class'); // Replace 'gif-class' with your desired class name

    // Select the container where you want to append the GIF
    const gifContainer = document.getElementById('gifContainer');

    // Append the image element to the container
    gifContainer.appendChild(gifImage);
}



