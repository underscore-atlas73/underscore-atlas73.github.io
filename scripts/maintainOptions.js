function appendOptions() {
    const urlParams = new URLSearchParams(window.location.search);
    const links = document.getElementsByTagName("a");

    for (const link of links ) {
        const url = new URL(link.href);
        for(const [key, value] of urlParams.entries()) {
            url.searchParams.append(key, value);
        }
        link.href = url.toString();
    }
}

appendOptions();