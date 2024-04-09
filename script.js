const userCode = document.getElementById('user-code');
const submitButton = document.getElementById('submit-button');
const output = document.getElementById('output-text');
const clearButton = document.getElementById('clear-button');
const copyButton = document.getElementById('copy-button');

function nofollowRemover(code) {
    const regex = /noopener|noreferrer|nofollow|_blank/g;
    const newCode = code.replace(regex, '');
    const regex2 = /(target="?([\s]{0,})"|rel="?([\s]{0,})")\s/g;
    const cleaned = newCode.replace(regex2, '');
    output.textContent = cleaned;
}

function clear() {
    userCode.value = '';
    output.textContent = '';
    return;
}

async function copy(copyCode) {
    await navigator.clipboard.writeText(copyCode.value);
}

submitButton.addEventListener('click', () => nofollowRemover(userCode.value));
userCode.addEventListener('input', () => nofollowRemover(userCode.value));
clearButton.addEventListener('click', clear);
copyButton.addEventListener('click', () => copy(output));