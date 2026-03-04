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

const loadCategoryVideos = (id) => {
  
  const url= `
  https://openapi.programming-hero.com/api/phero-tube/category/${id}
  `

 


fetch(url)
.then((res) => res.json())
.then((data) => displayVideos(data.category))

};

function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");

  for (let cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
 <button onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm text-lg hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
 `;

    categoryContainer.append(categoryDiv);
  }
}

const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos-container");

  videosContainer.innerHTML = "";

  videos.forEach((video) => {
    console.log(video);

    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    
    <div class="card bg-base-100">
          <figure class="relative">
            <img class="w-full h-[200px] object-cover" src="${video.thumbnail}" alt="Shoes" />
            <span
              class="absolute right-2 bottom-2 px-1 rounded text-sm text-white bg-black"
              >3hrs 56 min ago</span
            >
          </figure>
          <div class="flex gap-2 px-0 py-5">
            <div>
              <div class="avatar">
                <div class="ring-primary ring-offset-base-100 w-8 rounded-full">
                  <img
                    src="${video.authors[0].profile_picture}"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 class="font-bold">
                ${video.title}
              </h2>
              <p class="text-sm text-black/50 flex items-center gap-2 py-1">${video.authors[0].profile_name} <img src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="" width="20px"></p>
              <p class="text-sm text-black/50">${video.others.views} Views</p>
            </div>
          </div>
        </div>

    `;

    videosContainer.append(videoCard);
  });
};

loadCategories();
