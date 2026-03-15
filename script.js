fetch("https://sheetdb.io/api/v1/gtq7w6uzj647w?sheet=movies")
  .then(res => res.json())
  .then(data => {
    const preChrisGrid = document.getElementById("pre-chris-grid");
    const postChrisGrid = document.getElementById("post-chris-grid");
    for (let i = data.length - 1; i > 71; i--) {
        let filmCard = document.createElement("div");
        let poster = document.createElement("img");
        let date = document.createElement("p");
        let name = document.createElement("p");
        let textDiv = document.createElement("div");
        let anchorTag = document.createElement("a");
        filmCard.classList.add("film-card");
        poster.classList.add("card-poster");
        date.classList.add("date");
        name.classList.add("choice-of");
        textDiv.classList.add("card-text");
        if (data[i].movie_id == "NP") {
          poster.src = "nextNorm.webp";
          date.textContent = "Next pick is from:";
          name.textContent = data[i].name;
        } else if (data[i].movie_id == "Null") {
          poster.src = "norm.webp";
          date.textContent = "Soon...from";
          name.textContent = data[i].chosen_by;
        } else {
          poster.src = data[i].poster_url;
          date.textContent = data[i].date_watched;
          name.textContent = data[i].name;
          let lowerCaseName = name.textContent.toLowerCase();
          name.classList.add(lowerCaseName);
          anchorTag.href = data[i].link;
          anchorTag.target = "_blank";
        }
        textDiv.appendChild(date);
        textDiv.appendChild(name);
        filmCard.appendChild(poster);
        filmCard.appendChild(textDiv);
        anchorTag.appendChild(filmCard);
        postChrisGrid.appendChild(anchorTag);
    }
    for (let i = 71; i > -1; i--) {
        let filmCard = document.createElement("div");
        let poster = document.createElement("img");
        let date = document.createElement("p");
        let choiceOf = document.createElement("p");
        let textDiv = document.createElement("div");
        let anchorTag = document.createElement("a");
        filmCard.classList.add("film-card");
        poster.classList.add("card-poster");
        date.classList.add("date");
        choiceOf.classList.add("choice-of");
        textDiv.classList.add("card-text");
        poster.src = data[i].poster_url;
        date.textContent = data[i].date_watched;
        choiceOf.textContent = data[i].name;
        anchorTag.href = data[i].link;
        anchorTag.target = "_blank";
        
        textDiv.appendChild(date);
        textDiv.appendChild(choiceOf);
        filmCard.appendChild(poster);
        filmCard.appendChild(textDiv);
        anchorTag.appendChild(filmCard);
        preChrisGrid.appendChild(anchorTag);
        let lowerCaseName = choiceOf.textContent.toLowerCase();
        choiceOf.classList.add(lowerCaseName);
    }
  })

fetch("https://sheetdb.io/api/v1/gtq7w6uzj647w?sheet=members")
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      let choiceAvg = document.createElement("p");
      let givenAvg = document.createElement("p");
      let highAvg = document.createElement("p");
      let lowAvg = document.createElement("p");

      choiceAvg.textContent = data[i].choice_avg;
      givenAvg.textContent = data[i].given_avg;
      highAvg.textContent = data[i].high_choice_avg;
      lowAvg.textContent = data[i].low_choice_avg;

      let member = data[i].name.toLowerCase();
      let memberChildrenCollection = document.getElementById(`${member}-bio-stats`).children;
      memberChildrenCollection[0].appendChild(choiceAvg);
      memberChildrenCollection[1].appendChild(givenAvg);
      memberChildrenCollection[2].style.backgroundImage = `url(${data[i].high_poster})`;
      memberChildrenCollection[2].children[0].querySelector("#stats-title").textContent = data[i].high_choice_title;
      memberChildrenCollection[2].children[0].appendChild(highAvg);
      memberChildrenCollection[3].style.backgroundImage = `url(${data[i].low_poster})`;
      memberChildrenCollection[3].children[0].querySelector("#stats-title").textContent = data[i].low_choice_title;
      memberChildrenCollection[3].children[0].appendChild(lowAvg);
      if (member == "chris") {
        memberChildrenCollection[2].children[0].style.color = "var(--lchris)";
        memberChildrenCollection[3].children[0].style.color = "var(--lchris)";
      } else {
        memberChildrenCollection[2].children[0].style.color = `var(--${member})`;
        memberChildrenCollection[3].children[0].style.color = `var(--${member})`;
      }
    }
})