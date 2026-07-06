const API_KEY = "9633155f915f45c4818e3418cc43315e";
const url = "https://newsapi.org/v2/everything?q=";

// LOAD DEFAULT NEWS
window.addEventListener("load", () => fetchNews("India"));

// FETCH NEWS
async function fetchNews(query){

  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();

  bindData(data.articles);
}

// SHOW NEWS
function bindData(articles){

  const container = document.getElementById("cards-container");
  const template = document.getElementById("template-news-card");

  container.innerHTML = "";

  articles.forEach(article => {

    if(!article.urlToImage) return;

    const card = template.content.cloneNode(true);

    card.querySelector(".news-img").src = article.urlToImage;

    card.querySelector(".news-title").innerText = article.title;

    card.querySelector(".news-desc").innerText =
      article.description || "No description available";

    card.querySelector(".news-source").innerText =
      article.source.name;

    card.querySelector(".news-link").href = article.url;

    // OPEN FULL NEWS
    card.firstElementChild.addEventListener("click", () => {
      window.open(article.url, "_blank");
    });

    // SAVE NEWS
    card.querySelector(".save-btn").addEventListener("click", (e) => {

      e.stopPropagation();

      saveNews(article);
    });

    container.appendChild(card);
  });
}

// NAVBAR CATEGORY CLICK
document.querySelectorAll(".navitem").forEach(item => {

  item.addEventListener("click", () => {

    if(item.innerText == "Home"){
      fetchNews("India");
    }
    else{
      fetchNews(item.innerText);
    }

  });

});

// SAVE NEWS
function saveNews(article){

  let saved = JSON.parse(localStorage.getItem("news")) || [];

  // CHECK DUPLICATE
  if(saved.find(n => n.url === article.url)){

    alert("Already Saved!");
    return;
  }

  saved.push({
    ...article,
    note:""
  });

  localStorage.setItem("news", JSON.stringify(saved));

  alert("News Saved!");
}

// SHOW SAVED NEWS
function showSaved(){

  let saved = JSON.parse(localStorage.getItem("news")) || [];

  const container = document.getElementById("cards-container");

  container.innerHTML = "<h2>Saved News</h2>";

  saved.forEach((a, i) => {

    const div = document.createElement("div");

    div.className = "card";

    div.innerHTML = `
      <img src="${a.urlToImage}">
      
      <div class="card-content">

        <h3>${a.title}</h3>

        <p>${a.note || "No note added"}</p>

        <br>

        <button onclick="editNews(${i})">
          Edit
        </button>

        <button onclick="deleteNews(${i})">
          Delete
        </button>

      </div>
    `;

    container.appendChild(div);

  });
}

// EDIT NOTE
function editNews(i){

  let saved = JSON.parse(localStorage.getItem("news"));

  let note = prompt("Enter note:");

  if(note != null){

    saved[i].note = note;

    localStorage.setItem("news", JSON.stringify(saved));

    showSaved();
  }
}

// DELETE NEWS
function deleteNews(i){

  let saved = JSON.parse(localStorage.getItem("news"));

  saved.splice(i, 1);

  localStorage.setItem("news", JSON.stringify(saved));

  showSaved();
}

// SEARCH NEWS
document.querySelector(".search-button").addEventListener("click", () => {

  const q = document.querySelector(".news-input").value;

  if(q){
    fetchNews(q);
  }

});

// SAVED BUTTON
document.getElementById("saved-btn").addEventListener("click", showSaved);
document.getElementById("ipl").addEventListener("click", () => {
    fetchNews("IPL");
});

document.getElementById("finance").addEventListener("click", () => {
    fetchNews("Finance");
});

document.getElementById("politics").addEventListener("click", () => {
    fetchNews("Politics");
});