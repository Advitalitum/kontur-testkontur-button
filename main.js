const kontur = ".kontur.ru";
const testKontur = ".testkontur.ru";
const toArrow = "→ ";
const toKontur = toArrow + kontur;
const toTestKontur = toArrow + testKontur;

const currentUrl = window.location.toString();
const isTestKontur = currentUrl.includes(testKontur);

const button = document.createElement("button");
button.textContent = isTestKontur ? toKontur : toTestKontur;
button.style = "top:0;right:0;position:fixed;z-index:9999;background:none;border:none;color:rgb(102, 204, 255)"
button.addEventListener('click', () => {
    const newUrl = isTestKontur ? currentUrl.replace(testKontur, kontur) : currentUrl.replace(kontur, testKontur);
    window.location.href = newUrl;
});

document.body.appendChild(button);