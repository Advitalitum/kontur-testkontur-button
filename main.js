const kontur = ".kontur.ru";
const testKontur = ".testkontur.ru";
const toArrow = "→";
const toKontur = toArrow + kontur;
const toTestKontur = toArrow + testKontur;

const currentUrl = window.location.toString();
const button = document.createElement("button");
const isTestKontur = currentUrl.includes(testKontur);
button.textContent = isTestKontur ? toKontur : toTestKontur;
button.style = "top:0;right:0;position:fixed;z-index:9999;background:none;border:none;color:rgb(102, 204, 255)"
document.body.appendChild(button);

button.addEventListener('click', () => {    
    const newUrl = isTestKontur ? currentUrl.replace(testKontur, kontur) : currentUrl.replace(kontur, testKontur);
    window.location.href = newUrl;
});