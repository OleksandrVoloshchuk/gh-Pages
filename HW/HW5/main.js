const birthday = prompt("Введіть рік народження:");
    if (birthday === null) {
        alert("Шкода, що Ви не захотіли ввести свій рік народження.")
    } else;

const city = prompt("Введіть місто, в якому ви живете:");
    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
    } else;

const favoriteSport = prompt("Введіть Ваш улюблений вид спорту:");
    if (favoriteSport === null) {
        alert("Шкода, що Ви не захотіли вести Ваш улюблений вид спорту.")
    } else;

let currentYear = new Date().getFullYear();
const age = currentYear - birthday;
const ageMessage = "Ваш вік: " + age + " років.\n";

let cityMessage = "";
if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
    cityMessage = "Ти живеш у столиці " + getCapitalCountry(city) + ".\n";
} else {
    cityMessage = "Ти живеш у місті " + city + ".\n";
}

function getCapitalCountry(city) {
    switch (city) {
        case "Київ":
            return "України";
        case "Вашингтон":
            return "США";
        case "Лондон":
            return "Великої Британії";
        default:
            return "невідомої країни";
    }
}  

    switch (favoriteSport) {
        case "футбол":
            message = "Круто! Хочеш стати Кріштіану Роналду?";
        break;

        case "теніс":
            message = "Круто! Хочеш стати Новаком Джоковічем?";
        break;

        case "баскетбол":
            message = "Круто! Хочеш стати Леброном Джеймсом?";
        break;     

        default:
            message = "Круто! Хочеш стати спортсменом?";
}

alert(ageMessage + cityMessage + message);
