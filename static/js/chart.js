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
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'  // White text for legend
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'  // Light gray grid lines
                },
                ticks: {
                    color: '#ffffff'  // White text for x-axis
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'  // Light gray grid lines
                },
                ticks: {
                    color: '#ffffff'  // White text for y-axis
                }
            }
        }
    }
}

new Chart(
    chartElement,
    config
)

const availableStatistic = [
    { value: "kills", label: "Убийства" },
    { value: "deaths", label: "Смерти" },
    { value: "assists", label: "Помощи" },
    { value: "goldPerMinute", label: "Золото в минуту" },
    { value: "experiencePerMinute", label: "Опыт в минуту" },
    { value: "heroDamage", label: "Урон по героям" },
    { value: "towerDamage", label: "Урон по башням" },
    { value: "heroHealing", label: "Лечение героев" },
    { value: "numLastHits", label: "Добитых крипов" },
    { value: "numDenies", label: "Крипов не отдано" },
    { value: "networth", label: "Ценность" }
];

// Cards
const createCard = document.getElementById("createCard")
createCard.addEventListener("click", function () {
    createReadyCard("", "kills", [], "");
})

function createReadyCard(playerId, stat, heroes, color) {
    const readyCardElement = document.createElement("div");
    readyCardElement.className = "variable-form";
    readyCardElement.style.cssText = "display: flex; flex-direction: column; gap: 12px; position: relative; padding-top: 32px;";

    const rcRemoveBtn = document.createElement("button");
    rcRemoveBtn.innerHTML = "×";
    rcRemoveBtn.className = "remove-btn";
    rcRemoveBtn.style.cssText = "position: absolute; top: 8px; right: 8px; background: none; border: none; color: #000000; font-size: 24px; cursor: pointer; padding: 0; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; line-height: 1; border-radius: 0; outline: none;";

    rcRemoveBtn.addEventListener("click", function() {
        readyCardElement.remove();
    });

    const inputsContainer = document.createElement("div");
    inputsContainer.style.cssText = "display: flex; align-items: center; gap: 12px;";

    const rcPlayerId = document.createElement("label");
    rcPlayerId.style.cssText = "font-size: 18px; color: #191a19; font-weight: 600; display: flex; align-items: center; gap: 8px;";
    rcPlayerId.innerHTML = "ID: <input type='text' placeholder='ID Игрока' style='padding: 4px 8px; border-radius: 6px; border: 1px solid #aaa; width: 90px;' class='playerId' value='" + playerId + "'>";

    const rcStatistic = document.createElement("label");
    rcStatistic.style.cssText = "font-size: 18px; color: #191a19; font-weight: 600; display: flex; align-items: center; gap: 8px;";
    const statSelect = document.createElement("select");
    statSelect.style.cssText = "padding: 4px 8px; border-radius: 6px; border: 1px solid #aaa;";
    statSelect.className = "statistic";
    availableStatistic.forEach(optionStatistic => {
        const option = document.createElement("option");
        option.value = optionStatistic.value;
        option.textContent = optionStatistic.label;
        statSelect.appendChild(option);
    });
    statSelect.value = stat;
    rcStatistic.appendChild(document.createTextNode("Статистика:"));
    rcStatistic.appendChild(statSelect);

    const rcColorInput = document.createElement("label");
    rcColorInput.style.cssText = "font-size: 18px; color: #191a19; font-weight: 600; display: flex; align-items: center; gap: 8px;";
    rcColorInput.innerHTML = "Цвет: <input type='color' value='" + (color || "#4e9f3d") + "' style='width: 16px; height: 16px; border: none; background: none;' class='colorInput'>";

    const newHero = document.createElement("button");
    newHero.textContent = "Добавить героя";
    newHero.className = "addHero";
    newHero.style.cssText = "margin-left: 8px; display: flex; align-items: center;";

    inputsContainer.appendChild(rcPlayerId);
    inputsContainer.appendChild(rcStatistic);
    inputsContainer.appendChild(rcColorInput);
    inputsContainer.appendChild(newHero);

    const heroesContainer = document.createElement("div");
    heroesContainer.style.cssText = "display: flex; flex-direction: column; gap: 8px;";

    const heroesList = document.createElement("div");
    heroesList.className = "heroesList";
    heroesList.style.cssText = "display: flex; flex-direction: row; gap: 8px; width: 100%;";

    heroes.forEach(createdHero => {
        if (createdHero === "-1") { return; }
        else {
            const heroElement = document.createElement("div");
            heroElement.className = "heroElement";
            heroElement.style.cssText = "display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0;";

            const hero = document.createElement("input");
            hero.placeholder = "ID Героя";
            hero.className = "heroId";
            hero.style.cssText = "width: 100%; min-width: 0;";
            hero.value = createdHero;

            const heroRemove = document.createElement("button");
            heroRemove.textContent = "Удалить";
            heroRemove.className = "heroRemove";
            heroRemove.style.cssText = "flex-shrink: 0;";

            heroRemove.addEventListener("click", function () {
                heroElement.remove();
                newHero.disabled = false;
            })

            heroElement.appendChild(hero);
            heroElement.appendChild(heroRemove);

            heroesList.appendChild(heroElement);
        }
    })

    newHero.addEventListener("click", function () {
        if (heroesList.children.length >= 4) {
            newHero.disabled = true;
            return;
        }

        const heroElement = document.createElement("div");
        heroElement.className = "heroElement";
        heroElement.style.cssText = "display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0;";

        const hero = document.createElement("input");
        hero.placeholder = "ID Героя";
        hero.className = "heroId";
        hero.style.cssText = "width: 100%; min-width: 0;";

        const heroRemove = document.createElement("button");
        heroRemove.textContent = "Удалить";
        heroRemove.className = "heroRemove";
        heroRemove.style.cssText = "flex-shrink: 0;";

        heroRemove.addEventListener("click", function () {
            heroElement.remove();
            newHero.disabled = false;
        })

        heroElement.appendChild(hero);
        heroElement.appendChild(heroRemove);

        heroesList.appendChild(heroElement);

        if (heroesList.children.length >= 4) {
            newHero.disabled = true;
        }
    })

    // Disable Add Hero button if we already have 4 heroes
    if (heroesList.children.length >= 4) {
        newHero.disabled = true;
    }

    heroesContainer.appendChild(heroesList);

    readyCardElement.appendChild(inputsContainer);
    readyCardElement.appendChild(heroesContainer);
    readyCardElement.appendChild(rcRemoveBtn);

    document.getElementById("cardsContainer").appendChild(readyCardElement)
}

// Working with query
const searchParams = new URLSearchParams(window.location.search);
for (const [key, value] of searchParams.entries()) {
    const valuesList = value.split(";");
    const color = valuesList[4] ? `#${valuesList[4]}` : "#4e9f3d";
    createReadyCard(valuesList[0], valuesList[1], valuesList[2].split(","), color);
}

// Rebuilding charts
const rebuildButton = document.getElementById("rebuildChart");

rebuildButton.addEventListener("click", function () {
    const divs = document.getElementById("cardsContainer").querySelectorAll(".variable-form");
    let queryString = "?";

    let statId = 1;

    divs.forEach(div => {
        const playerId = div.querySelector(".playerId");
        const stat = div.querySelector(".statistic");
        const color = div.querySelector(".colorInput");
        const heroes = Array.from(div.querySelectorAll(".heroId")).map(hero => hero.value).filter(hero => hero !== "");
        const heroString = heroes.length > 0 ? heroes.join(",") : "-1";

        if (playerId.value === "") { return; }
        if (!color.value) { return; }
        queryString += `${statId}=${playerId.value};${stat.value};${heroString};0;${color.value.replace('#', '')}&`;

        statId++;
    })

    const currentUrlWithoutQuery = window.location.pathname;

    console.log(currentUrlWithoutQuery);
    console.log(queryString);

    window.location.href = currentUrlWithoutQuery + queryString;
});