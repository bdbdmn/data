fetch("https://sheetdb.io/api/v1/gtq7w6uzj647w?sheet=movies")
  .then(res => res.json())
  .then(data => {
    const preChrisGrid = document.getElementById("pre-chris-grid");
    const postChrisGrid = document.getElementById("post-chris-grid");
    for (let i = data.length - 1; i > 71; i--) {
        let filmCard = document.createElement("div");
        filmCard.classList.add("film-card");
        let poster = document.createElement("img");
        poster.src = data[i].poster_url;
        let date = document.createElement("p");
        date.textContent = data[i].date_watched;
        let choiceOf = document.createElement("p");
        choiceOf.textContent = data[i].chosen_by;
        poster.classList.add("card-poster");
        date.classList.add("date");
        choiceOf.classList.add("choice-of");
        let textDiv = document.createElement("div");
        textDiv.classList.add("card-text");
        textDiv.appendChild(date);
        textDiv.appendChild(choiceOf);
        filmCard.appendChild(poster);
        filmCard.appendChild(textDiv);
        postChrisGrid.appendChild(filmCard);
    }
    for (let i = 71; i > 0; i--) {
        let filmCard = document.createElement("div");
        filmCard.classList.add("film-card");
        let poster = document.createElement("img");
        poster.src = data[i].poster_url;
        let date = document.createElement("p");
        date.textContent = data[i].date_watched;
        let choiceOf = document.createElement("p");
        choiceOf.textContent = data[i].chosen_by;
        poster.classList.add("card-poster");
        date.classList.add("date");
        choiceOf.classList.add("choice-of");
        let textDiv = document.createElement("div");
        textDiv.classList.add("card-text");
        textDiv.appendChild(date);
        textDiv.appendChild(choiceOf);
        filmCard.appendChild(poster);
        filmCard.appendChild(textDiv);
        preChrisGrid.appendChild(filmCard);
    }
  })