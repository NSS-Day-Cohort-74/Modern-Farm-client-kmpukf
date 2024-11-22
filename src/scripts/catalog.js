export const catalog = (plants) => {
    let html = " "
    for (const plant of plants) {
        html += `<section class="plant">${plant.type}</section>`
    }
    return html
}