teletypeSpeed = 16;
async function teletype() {
    const elements = document.getElementsByClassName("mainTeletype");
    for (const element of elements) {
        let teleTypeSpeedInternal = teletypeSpeed;
        if (element.hasAttribute("speed-override")) {
            teleTypeSpeedInternal = element.getAttribute("speed-override");
        }

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("quick")) {
            teleTypeSpeedInternal = 0;
        }

        let text = element.getAttribute("text");

        if ((element.classList.contains("nontextTeletype")) && teleTypeSpeedInternal !== 0) {
            await sleep(teleTypeSpeedInternal);
            element.style.visibility = "visible";
            continue;
        }
        if (element.classList.contains("nontextTeletype") || element.classList.contains("projectListing")) {
            element.style.visibility = "visible";
            continue;
        }

        if (teleTypeSpeedInternal != 0) {
            for (let i = 0; i < text.length; i++) {
                await sleep(teleTypeSpeedInternal);

                if ("\\SPEC" == text.substring(i, i + 5)) {
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
                if ('\\' === text[i] && 't' === text[i + 1]) {
                    element.innerHTML += '\t';
                    i += 1;
                    continue;
                }

                element.innerText += text[i];
            }
        } else {
            for (let i = 0; i < text.length; i++) {
                if ("\\SPEC" == text.substring(i, i + 5)) {
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
                if ('\\' === text[i] && 't' === text[i + 1]) {
                    element.innerHTML += '\t';
                    i += 1;
                    continue;
                }

                element.innerText += text[i];
            }
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

teletype();