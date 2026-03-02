function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");

  for (let cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
 <button class="btn btn-sm text-lg hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
 `;

    categoryContainer.append(categoryDiv);
  }
}

const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos-container");

  videos.forEach((video) => {
    console.log(video);

    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    
    <h2 class="text-xl">${video.title}</h2>

    `

    videosContainer.append(videoCard)
  });
};

loadCategories();
loadVideos();
