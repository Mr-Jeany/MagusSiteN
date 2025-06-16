const heroes = [
    { id: 1, displayName: "Anti-Mage" },
    { id: 2, displayName: "Axe" },
    { id: 3, displayName: "Bane" },
    { id: 4, displayName: "Bloodseeker" },
    { id: 5, displayName: "Crystal Maiden" },
    { id: 6, displayName: "Drow Ranger" },
    { id: 7, displayName: "Earthshaker" },
    { id: 8, displayName: "Juggernaut" },
    { id: 9, displayName: "Mirana" },
    { id: 10, displayName: "Morphling" },
    { id: 11, displayName: "Shadow Fiend" },
    { id: 12, displayName: "Phantom Lancer" },
    { id: 13, displayName: "Puck" },
    { id: 14, displayName: "Pudge" },
    { id: 15, displayName: "Razor" },
    { id: 16, displayName: "Sand King" },
    { id: 17, displayName: "Storm Spirit" },
    { id: 18, displayName: "Sven" },
    { id: 19, displayName: "Tiny" },
    { id: 20, displayName: "Vengeful Spirit" },
    { id: 21, displayName: "Windranger" },
    { id: 22, displayName: "Zeus" },
    { id: 23, displayName: "Kunkka" },
    { id: 25, displayName: "Lina" },
    { id: 26, displayName: "Lion" },
    { id: 27, displayName: "Shadow Shaman" },
    { id: 28, displayName: "Slardar" },
    { id: 29, displayName: "Tidehunter" },
    { id: 30, displayName: "Witch Doctor" },
    { id: 31, displayName: "Lich" },
    { id: 32, displayName: "Riki" },
    { id: 33, displayName: "Enigma" },
    { id: 34, displayName: "Tinker" },
    { id: 35, displayName: "Sniper" },
    { id: 36, displayName: "Necrophos" },
    { id: 37, displayName: "Warlock" },
    { id: 38, displayName: "Beastmaster" },
    { id: 39, displayName: "Queen of Pain" },
    { id: 40, displayName: "Venomancer" },
    { id: 41, displayName: "Faceless Void" },
    { id: 42, displayName: "Wraith King" },
    { id: 43, displayName: "Death Prophet" },
    { id: 44, displayName: "Phantom Assassin" },
    { id: 45, displayName: "Pugna" },
    { id: 46, displayName: "Templar Assassin" },
    { id: 47, displayName: "Viper" },
    { id: 48, displayName: "Luna" },
    { id: 49, displayName: "Dragon Knight" },
    { id: 50, displayName: "Dazzle" },
    { id: 51, displayName: "Clockwerk" },
    { id: 52, displayName: "Leshrac" },
    { id: 53, displayName: "Nature's Prophet" },
    { id: 54, displayName: "Lifestealer" },
    { id: 55, displayName: "Dark Seer" },
    { id: 56, displayName: "Clinkz" },
    { id: 57, displayName: "Omniknight" },
    { id: 58, displayName: "Enchantress" },
    { id: 59, displayName: "Huskar" },
    { id: 60, displayName: "Night Stalker" },
    { id: 61, displayName: "Broodmother" },
    { id: 62, displayName: "Bounty Hunter" },
    { id: 63, displayName: "Weaver" },
    { id: 64, displayName: "Jakiro" },
    { id: 65, displayName: "Batrider" },
    { id: 66, displayName: "Chen" },
    { id: 67, displayName: "Spectre" },
    { id: 68, displayName: "Ancient Apparition" },
    { id: 69, displayName: "Doom" },
    { id: 70, displayName: "Ursa" },
    { id: 71, displayName: "Spirit Breaker" },
    { id: 72, displayName: "Gyrocopter" },
    { id: 73, displayName: "Alchemist" },
    { id: 74, displayName: "Invoker" },
    { id: 75, displayName: "Silencer" },
    { id: 76, displayName: "Outworld Destroyer" },
    { id: 77, displayName: "Lycan" },
    { id: 78, displayName: "Brewmaster" },
    { id: 79, displayName: "Shadow Demon" },
    { id: 80, displayName: "Lone Druid" },
    { id: 81, displayName: "Chaos Knight" },
    { id: 82, displayName: "Meepo" },
    { id: 83, displayName: "Treant Protector" },
    { id: 84, displayName: "Ogre Magi" },
    { id: 85, displayName: "Undying" },
    { id: 86, displayName: "Rubick" },
    { id: 87, displayName: "Disruptor" },
    { id: 88, displayName: "Nyx Assassin" },
    { id: 89, displayName: "Naga Siren" },
    { id: 90, displayName: "Keeper of the Light" },
    { id: 91, displayName: "Io" },
    { id: 92, displayName: "Visage" },
    { id: 93, displayName: "Slark" },
    { id: 94, displayName: "Medusa" },
    { id: 95, displayName: "Troll Warlord" },
    { id: 96, displayName: "Centaur Warrunner" },
    { id: 97, displayName: "Magnus" },
    { id: 98, displayName: "Timbersaw" },
    { id: 99, displayName: "Bristleback" },
    { id: 100, displayName: "Tusk" },
    { id: 101, displayName: "Skywrath Mage" },
    { id: 102, displayName: "Abaddon" },
    { id: 103, displayName: "Elder Titan" },
    { id: 104, displayName: "Legion Commander" },
    { id: 105, displayName: "Techies" },
    { id: 106, displayName: "Ember Spirit" },
    { id: 107, displayName: "Earth Spirit" },
    { id: 108, displayName: "Underlord" },
    { id: 109, displayName: "Terrorblade" },
    { id: 110, displayName: "Phoenix" },
    { id: 111, displayName: "Oracle" },
    { id: 112, displayName: "Winter Wyvern" },
    { id: 113, displayName: "Arc Warden" },
    { id: 114, displayName: "Monkey King" },
    { id: 119, displayName: "Dark Willow" },
    { id: 120, displayName: "Pangolier" },
    { id: 121, displayName: "Grimstroke" },
    { id: 123, displayName: "Hoodwink" },
    { id: 126, displayName: "Void Spirit" },
    { id: 128, displayName: "Snapfire" },
    { id: 129, displayName: "Mars" },
    { id: 131, displayName: "Ringmaster" },
    { id: 135, displayName: "Dawnbreaker" },
    { id: 136, displayName: "Marci" },
    { id: 137, displayName: "Primal Beast" },
    { id: 138, displayName: "Muerta" },
    { id: 145, displayName: "Kez" }
];

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

function createReadyCard(playerId, stat, selectedHeroes, color) {
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
    rcPlayerId.innerHTML = "ID Игрока: <input type='text' placeholder='XXXXXXXXX' style='padding: 4px 8px; border-radius: 6px; border: 1px solid #aaa; width: 90px;' class='playerId' value='" + playerId + "'>";

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

    selectedHeroes.forEach(createdHero => {
        if (createdHero === "-1") { return; }
        else {
            const heroElement = document.createElement("div");
            heroElement.className = "heroElement";
            heroElement.style.cssText = "display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0;";

            const hero = document.createElement("select");
            hero.className = "heroId";
            hero.style.cssText = "width: 100%; min-width: 0; padding: 4px 8px; border-radius: 6px; border: 1px solid #aaa;";

            // Add default empty option
            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Select Hero";
            hero.appendChild(defaultOption);

            // Add all hero options
            heroes.forEach(heroData => {
                const option = document.createElement("option");
                option.value = heroData.id;
                option.textContent = heroData.displayName;
                hero.appendChild(option);
            });

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

        const hero = document.createElement("select");
        hero.className = "heroId";
        hero.style.cssText = "width: 100%; min-width: 0; padding: 4px 8px; border-radius: 6px; border: 1px solid #aaa;";

        // Add default empty option
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select Hero";
        hero.appendChild(defaultOption);

        // Add all hero options
        heroes.forEach(heroData => {
            const option = document.createElement("option");
            option.value = heroData.id;
            option.textContent = heroData.displayName;
            hero.appendChild(option);
        });

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