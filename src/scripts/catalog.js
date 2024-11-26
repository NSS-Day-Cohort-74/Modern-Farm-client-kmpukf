export const catalog = (plants) => {
    let html = " "
    for (const plant of plants) {
        html += `<section class="plant"></section>
            <div class=plant_type>${plant.type}</div>`
    }
    return html
}