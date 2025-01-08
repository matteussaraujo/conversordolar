let dolar = 6.10;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd");
});

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value);
});

usdInput.value = "1000.00";
convert("usd-to-brl");

function formatCurrency(value) {
    let fixedValue = fixValue(value);
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2,
    };
    let formatter = new Intl.NumberFormat("pt-BR", options);
    return formatter.format(fixedValue);
}

function fixValue(value) {
    if (typeof value === "string") {
        let fixedValue = value.replace(",", ".");
        let floatValue = parseFloat(fixedValue);
        return isNaN(floatValue) ? 0 : floatValue;
    }
    return value;
}

function convert(type) {
    if (type === "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value);
        let result = fixedValue * dolar;
        brlInput.value = formatCurrency(result.toFixed(2));
    } else if (type === "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value);
        let result = fixedValue / dolar;
        usdInput.value = formatCurrency(result.toFixed(2));
    }
}
