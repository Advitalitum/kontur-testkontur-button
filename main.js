const button = document.createElement('button');
const currentUrl = window.location.toString();
const isTestKontur = currentUrl.includes(".testkontur.ru");
button.textContent = isTestKontur ? "→ kontur.ru" : "→ testkontur.ru";
button.style = "top:0;right:0;position:fixed;z-index:9999;background:none;border:none"
document.body.appendChild(button);
button.addEventListener('click', () => {
    const newUrl = isTestKontur ? currentUrl.replace(".testkontur.ru", ".kontur.ru") : currentUrl.replace(".kontur.ru", ".testkontur.ru");
    window.location.href = newUrl;
});