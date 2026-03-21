function enableQuickMode() {
    if (this.getAttribute("toggle") == "false") {
        window.location.href = "/?quick=";
        return;
    }
    window.location.href = "/";
}

const quickMode = document.getElementById("quickMode");
quickMode.addEventListener("click", enableQuickMode);

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("quick")) {
    quickMode.style.backgroundColor = "#eeeeee";
    quickMode.style.color = "#000000";
    quickMode.innerText = "QUICKMODE: ENABLED";
    quickMode.setAttribute("toggle", "true");
}