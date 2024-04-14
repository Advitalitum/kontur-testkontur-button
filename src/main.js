const hostname = window.location.hostname;

if (hostname != "kontur.ru" && hostname != "www.kontur.ru") {
    const kontur = ".kontur.ru";
    const testKontur = ".testkontur.ru";
    const toArrow = "→ ";
    const toKontur = toArrow + kontur;
    const toTestKontur = toArrow + testKontur;
    
    function getLocationData() {
        const location = window.location.toString();
        const isTestKontur = location.includes(testKontur);
        return { location, isTestKontur };
    };
    
    
    
    const button = document.createElement("button");
    button.textContent = getLocationData().isTestKontur ? toKontur : toTestKontur;
    button.style = "top:0;right:0;position:fixed;z-index:9999;background:none;border:none;color:rgb(102, 204, 255)";
    
    button.addEventListener('click', () => {
        const locationData = getLocationData();
        const currentLocation = locationData.location;
        const newLocation = locationData.isTestKontur ? currentLocation.replace(testKontur, kontur) : currentLocation.replace(kontur, testKontur);
        window.location.href = newLocation;
    });
    
    document.body.appendChild(button);
}
