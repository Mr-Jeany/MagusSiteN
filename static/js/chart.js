// Creating chart
const chartElement = document.getElementById("statChart");
const config = {
    type: 'line',
    data: data,
    options: {
        // Code below makes it so you could hover whereever you want - jeany
        interaction: {
            mode: 'index',
            intersect: false,
        },
        responsive: true,

    }
}

new Chart(
    chartElement,
    config
)

const availableStatistic = ["kills", "deaths", "assists", "goldPerMinute", "experiencePerMinute", "heroDamage", "towerDamage", "heroHealing",
"numLastHits", "numDenies", "networth"];

// Cards
const createCard = document.getElementById("createCard")
createCard.addEventListener("click", function () {
    createReadyCard("", "kills", "");
})

function createReadyCard(playerId, stat, heroes, color) {
    const readyCardElement = document.createElement("div");
    readyCardElement.className = "card";

    const rcPlayerId = document.createElement("input");
    rcPlayerId.placeholder = "Player ID";
    rcPlayerId.value = playerId;
    rcPlayerId.className = "playerId";

    const rcStatistic = document.createElement("select");
    availableStatistic.forEach(optionStatistic => {
        const option = document.createElement("option");
        option.value = optionStatistic;
        option.textContent = optionStatistic;
        rcStatistic.appendChild(option);
    })
    rcStatistic.value = stat;
    rcStatistic.className = "statistic";

    const rcColorInput = document.createElement("input");
    rcColorInput.placeholder = "#FF0000";
    rcColorInput.value = color;
    rcColorInput.className = "colorInput";

    const heroesList = document.createElement("div");
    heroesList.className = "heroesList";

    const newHero = document.createElement("button");
    newHero.textContent = "Add Hero";
    newHero.className = "addHero";

    heroes.forEach(createdHero => {
        if (createdHero === -1) { return; }
        const heroElement = document.createElement("div");
        heroElement.className = "heroElement";

        const hero = document.createElement("input");
        hero.placeholder = "heroId";
        hero.value = createdHero;

        const heroRemove = document.createElement("button");
        heroRemove.textContent = "Remove";

        heroRemove.addEventListener("click", function () {
            heroElement.remove()
        })

        heroElement.appendChild(hero);
        heroElement.appendChild(heroRemove);

        heroesList.appendChild(heroElement);
    })

    newHero.addEventListener("click", function () {
        const heroElement = document.createElement("div");
        heroElement.className = "heroElement";

        const hero = document.createElement("input");
        hero.placeholder = "heroId";

        const heroRemove = document.createElement("button");
        heroRemove.textContent = "Remove";

        heroRemove.addEventListener("click", function () {
            heroElement.remove()
        })

        heroElement.appendChild(hero);
        heroElement.appendChild(heroRemove);

        heroesList.appendChild(heroElement);
    })


    const rcRemoveBtn = document.createElement("button");
    rcRemoveBtn.textContent = "Remove card";
    rcRemoveBtn.className = "remove-btn"; // Optional: for styling
    rcRemoveBtn.addEventListener("click", function() {
        readyCardElement.remove(); // Removes the card when clicked
    });


    readyCardElement.appendChild(rcPlayerId);
    readyCardElement.appendChild(rcStatistic);
    readyCardElement.appendChild(rcColorInput);
    readyCardElement.appendChild(newHero);
    readyCardElement.appendChild(heroesList);
    readyCardElement.appendChild(rcRemoveBtn);

    document.getElementById("cardsContainer").appendChild(readyCardElement)
}

// Working with query
const searchParams = new URLSearchParams(window.location.search);
for (const [key, value] of searchParams.entries()) {
    const valuesList = value.split(";");
    createReadyCard(valuesList[0], valuesList[1], valuesList[2].split(","), valuesList[4]);
}

// Rebuilding charts
const rebuildButton = document.getElementById("rebuildChart");

rebuildButton.addEventListener("click", function () {
    const divs = document.getElementById("cardsContainer").querySelectorAll(".card");
    let queryString = "?";

    let statId = 1;

    divs.forEach(div => {
        const playerId = div.querySelector(".playerId");
        const stat = div.querySelector(".statistic");
        const color = div.querySelector(".colorInput");

        if (playerId.value === "") { return; }
        if (color.value === "") { return; }
        queryString += `${statId}=${playerId.value};${stat.value};-1;0;${color.value}&`;

        statId++;
    })

    const currentUrlWithoutQuery = window.location.pathname;

    console.log(currentUrlWithoutQuery);

    console.log(queryString);

    window.location.href = currentUrlWithoutQuery + queryString;
});