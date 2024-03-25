const userCode = document.getElementById('user-code');
const submitButton = document.getElementById('submit-button');
const output = document.getElementById('output-text');
const clearButton = document.getElementById('clear-button');
const copyButton = document.getElementById('copy-button');

function nofollowRemover(code) {
    const regex = /rel="((noopener noreferrer nofollow)|(noopener nofollow noreferrer)|(noreferrer noopener nofollow)|(noreferrer nofollow noopener)|(nofollow noopener noreferrer)|(nofollow noreferrer noopener))"/g;
    const newCode = code.replace(regex, '');
    output.textContent = newCode;
}

function clear() {
    userCode.value = '';
    output.textContent = '';
    return;
}

function copy(copyCode) {
    copyCode.select();
    copyCode.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

submitButton.addEventListener('click', () => nofollowRemover(userCode.value));
clearButton.addEventListener('click', clear);
copyButton.addEventListener('click', () => copy(output));