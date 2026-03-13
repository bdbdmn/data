fetch("https://sheetdb.io/api/v1/gtq7w6uzj647w?sheet=movies")
  .then(res => res.json())
  .then(data => {
    const preChrisGrid = document.getElementById("pre-chris-grid");
    const postChrisGrid = document.getElementById("post-chris-grid");
    for (let i = data.length - 1; i > 71; i--) {
        let filmCard = document.createElement("div");
        let poster = document.createElement("img");
        let date = document.createElement("p");
        let choiceOf = document.createElement("p");
        let textDiv = document.createElement("div");
        filmCard.classList.add("film-card");
        poster.classList.add("card-poster");
        date.classList.add("date");
        choiceOf.classList.add("choice-of");
        textDiv.classList.add("card-text");
        if (data[i].movie_id == "NP") {
          poster.src = "nextNorm.webp";
          date.textContent = "Next pick is from:";
          choiceOf.textContent = data[i].chosen_by;
        } else if (data[i].movie_id == "Null") {
          poster.src = "norm.webp";
          date.textContent = "Soon...from";
          choiceOf.textContent = data[i].chosen_by;
        } else {
          poster.src = data[i].poster_url;
          date.textContent = data[i].date_watched;
          choiceOf.textContent = data[i].chosen_by;
        }
        if (choiceOf.textContent == "Jacob") {
          choiceOf.classList.add("jacob");
        } else if (choiceOf.textContent == "Sam") {
          choiceOf.classList.add("sam");
        } else if (choiceOf.textContent == "Brian") {
          choiceOf.classList.add("brian");
        } else if (choiceOf.textContent == "Chris") {
          choiceOf.classList.add("chris");
        }
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