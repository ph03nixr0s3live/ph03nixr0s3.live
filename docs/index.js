/**
 * @param {String} text
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.info("Copied text to clipboard.", text);
    } catch (error) {
        console.error("Failed to copy to clipboard", error);
    }
}

const copyrightYearEl = document.getElementById("copyright-year");
copyrightYearEl.innerText = new Date().getFullYear();
