const teletypeSpeed = 16;
async function teletype() {
    const elements = document.getElementsByClassName("mainTeletype");
    for (const element of elements) {
        let text = element.getAttribute("text");
        for (let i = 0; i < text.length; i++) {
            await sleep(teletypeSpeed);
            if ("\\SPEC" == text.substring(i, i+5)) {
                i += 5;
                let spec = element.getAttribute("SPEC" + text[i]);
                element.innerHTML += spec;
                continue;
            }
            if ('\\' === text[i] && 'n' === text[i + 1]) {
                element.innerHTML += "<br>";
                i += 1;
                continue;
            }
            element.innerText += text[i];
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

teletype();