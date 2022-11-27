const body = document.body
const colorCode = document.querySelector('#color-code')
const generateButton = document.querySelector('.float-action-button')
generateButton.onclick = generate
generate()

function generate() {
    color = {}
    color.r = fixHex(parseInt(Math.random() * 255).toString(16))
    color.g = fixHex(parseInt(Math.random() * 255).toString(16))
    color.b = fixHex(parseInt(Math.random() * 255).toString(16))
    const hex = `#${color.r}${color.g}${color.b}`.toUpperCase()
    body.style.background = hex
    colorCode.innerText = hex
}

function fixHex(hex) {
    if (hex.length == 1) {
        return '0'+hex
    }
    return hex
}