fetch("https://norm-of-the-server.onrender.com/api/1RmEm4aUEjW4ewi1vYQeY1qUcf3YPanxe6dZbAlRhwto/movies")
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
        let anchorTag = document.createElement("a");
        let topTextDiv = document.createElement("div");
        let filmNum = document.createElement("p");
        let filmScore = document.createElement("p");
        filmCard.classList.add("film-card");
        poster.classList.add("card-poster");
        date.classList.add("date");
        choiceOf.classList.add("choice-of");
        textDiv.classList.add("card-text");
        topTextDiv.classList.add("top-card-text");
        filmScore.classList.add("avg-film-score");
        if (data[i].movie_id == "NP") {
          poster.src = "nextNorm.webp";
          date.textContent = "Next pick:";
          choiceOf.textContent = data[i].name;
        } else if (data[i].movie_id == "Null") {
          poster.src = "norm.webp";
          date.textContent = "Soon...from";
          choiceOf.textContent = data[i].name;
        } else {
          poster.src = data[i].poster_url;
          date.textContent = data[i].date_watched;
          choiceOf.textContent = data[i].name;
          anchorTag.href = data[i].link;
          anchorTag.target = "_blank";
          filmNum.textContent = "#" + data[i].movie_id;
          filmScore.textContent = data[i].average_rating;
        }
        topTextDiv.appendChild(filmNum);
        topTextDiv.appendChild(filmScore);
        textDiv.appendChild(date);
        textDiv.appendChild(choiceOf);
        filmCard.appendChild(topTextDiv);
        filmCard.appendChild(poster);
        filmCard.appendChild(textDiv);
        anchorTag.appendChild(filmCard);
        postChrisGrid.appendChild(anchorTag);
        let lowerCaseName = choiceOf.textContent.toLowerCase();
        choiceOf.classList.add(lowerCaseName);
    }
    for (let i = 71; i > -1; i--) {
        let filmCard = document.createElement("div");
        let poster = document.createElement("img");
        let date = document.createElement("p");
        let choiceOf = document.createElement("p");
        let textDiv = document.createElement("div");
        let anchorTag = document.createElement("a");
        let topTextDiv = document.createElement("div");
        let filmNum = document.createElement("p");
        let filmScore = document.createElement("p");

        filmCard.classList.add("film-card");
        poster.classList.add("card-poster");
        date.classList.add("date");
        choiceOf.classList.add("choice-of");
        textDiv.classList.add("card-text");
        topTextDiv.classList.add("top-card-text");
        filmScore.classList.add("avg-film-score");

        poster.src = data[i].poster_url;
        date.textContent = data[i].date_watched;
        choiceOf.textContent = data[i].name;
        anchorTag.href = data[i].link;
        anchorTag.target = "_blank";
        filmNum.textContent = "#" + data[i].movie_id;
        filmScore.textContent = data[i].average_rating;

        topTextDiv.appendChild(filmNum);
        topTextDiv.appendChild(filmScore);
        textDiv.appendChild(date);
        textDiv.appendChild(choiceOf);
        filmCard.appendChild(topTextDiv);
        filmCard.appendChild(poster);
        filmCard.appendChild(textDiv);
        anchorTag.appendChild(filmCard);
        preChrisGrid.appendChild(anchorTag);
        let lowerCaseName = choiceOf.textContent.toLowerCase();
        choiceOf.classList.add(lowerCaseName);
    }
  })

fetch("https://norm-of-the-server.onrender.com/api/1RmEm4aUEjW4ewi1vYQeY1qUcf3YPanxe6dZbAlRhwto/members")
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      let choiceAvg = document.createElement("p");
      let givenAvg = document.createElement("p");
      let highAvg = document.createElement("p");
      let lowAvg = document.createElement("p");
      let five = document.createElement("p");
      five.classList.add("five");
      five.textContent = "/5";
      let scoreDiv = document.createElement("div");
      scoreDiv.classList.add("score");
      let choiceScore = scoreDiv;
      let givenScore = scoreDiv.cloneNode(true);
      let highScore = scoreDiv.cloneNode(true);
      let lowScore = scoreDiv.cloneNode(true);

      choiceAvg.textContent = `${data[i].choice_avg}`;
      givenAvg.textContent = `${data[i].given_avg}`;
      highAvg.textContent = `${data[i].high_choice_avg}`;
      lowAvg.textContent = `${data[i].low_choice_avg}`;

      choiceScore.appendChild(choiceAvg);
      choiceScore.appendChild(five);
      givenScore.appendChild(givenAvg);
      givenScore.appendChild(five.cloneNode(true));
      highScore.appendChild(highAvg);
      highScore.appendChild(five.cloneNode(true));
      lowScore.appendChild(lowAvg);
      lowScore.appendChild(five.cloneNode(true));

      let member = data[i].name.toLowerCase();
      let memberChildrenCollection = document.getElementById(`${member}-bio-stats`).children;
      memberChildrenCollection[0].appendChild(choiceScore);
      memberChildrenCollection[1].appendChild(givenScore);
      memberChildrenCollection[2].style.backgroundImage = `url(${data[i].high_poster})`;
      memberChildrenCollection[2].children[0].querySelector("#stats-title").textContent = data[i].high_choice_title;
      memberChildrenCollection[2].children[0].appendChild(highScore);
      memberChildrenCollection[3].style.backgroundImage = `url(${data[i].low_poster})`;
      memberChildrenCollection[3].children[0].querySelector("#stats-title").textContent = data[i].low_choice_title;
      memberChildrenCollection[3].children[0].appendChild(lowScore);
      memberChildrenCollection[2].children[0].style.color = `var(--${member})`;
      memberChildrenCollection[3].children[0].style.color = `var(--${member})`;
    }
})