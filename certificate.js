document.addEventListener("DOMContentLoaded", () => {
  const downloadIcon = document.querySelector(".download-icon");

  // Function to trigger the image download
  function downloadImage() {
    // Get the image URL from the data attribute
    const imageUrl = downloadIcon.getAttribute("data-image-url");
    const imageName = imageUrl.split("/").pop(); // Extracts filename

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageName; // Set the download attribute to the filename
    document.body.appendChild(link); // Append link to the body

    link.click(); // Programmatically click the link to trigger the download

    document.body.removeChild(link); // Remove the link after download
  }

  // Add click event listener to the download icon
  downloadIcon.addEventListener("click", downloadImage);
});

document.addEventListener("DOMContentLoaded", () => {
  const downloadIcon = document.querySelector(".download-i");

  // Function to trigger the image download
  function downloadImage() {
    // Get the image URL from the data attribute
    const imageUrl = downloadIcon.getAttribute("data-image-url");
    const imageName = imageUrl.split("/").pop(); // Extracts filename

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageName; // Set the download attribute to the filename
    document.body.appendChild(link); // Append link to the body

    link.click(); // Programmatically click the link to trigger the download

    document.body.removeChild(link); // Remove the link after download
  }

  // Add click event listener to the download icon
  downloadIcon.addEventListener("click", downloadImage);
});

// script.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select the like icon
  const likeIcon = document.querySelector(".like-icon");

  // Toggle the 'liked' class on click
  likeIcon.addEventListener("click", () => {
    likeIcon.classList.toggle("liked"); // Add or remove the 'liked' class
    console.log("Icon clicked!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the like icon
  const likeIcon = document.querySelector(".like-i");

  // Toggle the 'liked' class on click
  likeIcon.addEventListener("click", () => {
    likeIcon.classList.toggle("like"); // Add or remove the 'liked' class
    console.log("Icon clicked!");
  });
});
