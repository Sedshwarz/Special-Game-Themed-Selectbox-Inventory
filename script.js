

const info = [
    {
        id: "1",
        header: "Winchester Model 1894 Rifle",
        detail: `This repeater can be obtained for free during the mission: "Spare the Rod, Spoil the Bandit", as a reward from the captured sheriff after the Tumbleweed hideout is complete. (The sheriff must stay alive for the player to receive the weapon), or can be bought from the Armadillo Gunsmith for $350.`,
        effect: "Gives fatal damage, Shows magazine warning",
        rot: "0deg"
    },
    {
        id: "2",
        header: "Borchardt C-93 Pistol",
        detail: `This weapon is found in the chest after completing hideout in Fort Mercer. The hideout becomes available after Marston accompanies Irish to Mexico in the mission "We Shall Be Together In Paradise" or can be purchased at the Escalera Gunsmith at a base price of $300, or $150 if the player's Honor is high enough.`,
        effect: "Gives damage Aim Core, Slightly increase Dead Eye Core",
        rot: "64deg"
    },
    {
        id: "3",
        header: "Kentucky Bourbon",
        detail: `In warm weather, it's time to sip a heavenly whiskey. This American-made whiskey increases health, gives a slightly intoxicating effect, and temporarily numbs any existing pain or wound. You can sell this product for $1.85, you can buy it for $3.75.`,
        effect: "Slightly damage Health Core, Moderately increases Stamina and Dead Eye Cores",
        rot: "121deg"
    },
    {
        id: "4",
        header: "LeMat Revolver",
        detail: `The player can purchase the LeMat revolver from the Gunsmith in Escalera for $1250 ($625 with high Honor and $313 with the Savvy Merchant Outfit + High Honor) after completing the mission "An Appointed Time".`,
        effect: "Blows the soft objects, Blows enemies heads",
        rot: "180deg"
    },
    {
        id: "5",
        header: "Premium Cigarette",
        detail: `If you have found a beautiful view and want to enjoy it, this Premium Cigarette is exactly what you are looking for. This cigarette, which never compromises on quality, is definitely the number one choice of cowboys. You can sell this product for $0, you can buy it for $5.00.`,
        effect: "Slightly damage Stamina Core, Slightly increase Dead Eye Core",
        rot: "239deg"
    },
    {
        id: "6",
        header: "Lasso",
        detail: `To use the lasso, players must aim and 'fire' it, like any other weapon, though there is an important distinction: the player must continue to hold the aim button, otherwise, the target will be released. At this point, the player may hogtie their enemy. Players should note that aiming the lasso above the target extends the lasso range further than the auto-aim targeting allows.`,
        effect: "Catches horses, enemies, guilties and ties them",
        rot: "296deg"
    },
]


var header = document.querySelector("#header"),
    detail = document.querySelector("#detail"),
    effect = document.querySelector("#effect"),
    infoCircle = document.querySelector(".infoCircle"),
    cursorCircle = document.querySelector(".cursorCircle"),
    openBtn = document.querySelector(".open"),
    inventory = document.querySelector(".inventory"),
    activeItem;

const themes = [
    {
        theme: "green",
        array: [
            "linear-gradient(to top, rgba(31, 114, 110, 0.4), rgba(100, 199, 202, 0.4))",
            "#82e4e4",
            "#52c5bf",
            "#32f0f0",
            "#3ec9c9",
            "#77c8e4",
            "aqua",
            "#2aa8a8",
            "#b5dbd8",
            "#35c8d3",
            "#35c8d3",
            "rgba(20, 77, 82, 0.596)",
            "#379494",
            "#379494",
            "rgba(20, 77, 82, 0.7)",
            "#4cddca",
            "rgba(12, 38, 46, 0.75)"
        ],
        values1: "#049aa5;#29fcd9;#57bac7;#049aa5",
        values2: "#35d1c9;#3dc4ec;#1fb3ab;#35d1c9"
    },
    {
        theme: "red",
        array: [
            "linear-gradient(to top, rgba(114, 55, 31, 0.4), rgba(202, 107, 100, 0.4))",
            "#f89881",
            "#c55f52",
            "#f0957a",
            "#fa8668",
            "#ff5353",
            "#fc8585",
            "#ff8b8b",
            "#e9b3ab",
            "#fc7171",
            "#fc7171",
            "rgba(116, 38, 38, 0.596)",
            "#ad4d4d",
            "#ad4d4d",
            "rgba(31, 8, 6, 0.7)",
            "#fa6565",
            "rgba(39, 16, 16, 0.75)",
        ],
        values1: "#a52404;#fc5329;#c75757;#a52404",
        values2: "#d15435;#ec573d;#b33d1f;#d15435"
    },
    {
        theme: "purple",
        array: [
            "linear-gradient(to top, rgba(63, 31, 114, 0.4), rgba(131, 100, 202, 0.4))",
            "#ab81f8",
            "#7e52c5",
            "#b17af0",
            "#7c3cf1",
            "#8753ff",
            "#be9aff",
            "#c094fa",
            "#cdabe9",
            "#a671fc",
            "#a671fc",
            "rgba(44, 19, 90, 0.596)",
            "#5d43a5",
            "#5d43a5",
            "rgba(32, 14, 77, 0.7)",
            "#aa65fa",
            "rgba(25, 16, 39, 0.75)"
        ],
        values1: "#5704a5;#7a29fc;#7557c7;#5704a5",
        values2: "#7135d1;#803dec;#581fb3;#7135d1"
    }
]



const hoverItem = (num, thisElm) => {

    var ary = info.filter(elm => elm.id === num.toString())

    const { header: iHeader, detail: iDetail, effect: iEffect, rot: iRot } = ary[0]

    header.innerText = iHeader
    detail.innerText = iDetail
    effect.innerHTML = `<font id="efH">Effect: </font> ${iEffect}`
    infoCircle.classList.add("showInfo")

    cursorCircle.style.rotate = iRot

    activeItem = thisElm.parentElement.parentElement
    activeItem.classList.add("activeItem")
}

const hoverBreak = (e) => {
    infoCircle.classList.remove("showInfo")
    activeItem.classList.remove("activeItem")
}

const openInventory = () => {
    inventory.classList.add("buttonActive")
    openBtn.classList.add("fadeButton")
}

const closeInventory = () => {
    inventory.classList.remove("buttonActive")
    openBtn.classList.remove("fadeButton")
}

document.onclick = (e) => {
    e.target === document.querySelector(".bg") ? closeInventory() : null;
}

openBtn.addEventListener("click", openInventory)



const changeTheme = (clr,thisBtn) => {
    for(var ind = 0; ind < 3; ind++){ document.querySelectorAll(".theme")[ind].classList.remove("activeTheme")}
    thisBtn.classList.add("activeTheme")
    
    const newTheme = themes.filter(elm=>elm.theme === clr)
    const colors = newTheme[0].array

    for (let index = 0; index < colors.length; index++) {
        document.body.style.setProperty(`--color${index+1}`, colors[index]);
    }

    const animates = document.querySelectorAll("animate");

    animates[0].setAttribute("values", newTheme[0].values1)
    animates[1].setAttribute("values", newTheme[0].values2)
}