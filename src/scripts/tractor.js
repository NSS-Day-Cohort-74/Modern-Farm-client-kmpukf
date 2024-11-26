import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant } from "./field.js"

// export const plantSeeds = (yearlyPlan) => {
//     for (let i = 0; i < yearlyPlan.length; i++)
//         for (let j = 0; j < yearlyPlan[i].length; i++) {
//             if (yearlyPlan[j] === "asparagus") {
//                 addPlant(createAsparagus())
//             }
//             if (yearlyPlan[j] === "corn") {
//                 addPlant(createCorn())
//             }
//             if (yearlyPlan[j] === "potato") {
//                 addPlant(createPotato())
//             }
//             if (yearlyPlan[j] === "soybean") {
//                 addPlant(createdSoybean())
//             }
//             if (yearlyPlan[j] === "sunflower") {
//                 addPlant(createSunflower())
//             }
//             if (yearlyPlan[j] === "wheat") {
//                 addPlant(createWheat())
//             }
//         }
//}

/*
yearlyPlan = [
    [" ", " "],
    [" ", " "],
    [" ", " "]
]
*/


export const plantSeeds = (yearlyPlan) => {
    for (const row of yearlyPlan) {
        for (const plot of row) {
            if (plot === "Asparagus")
                addPlant(createAsparagus())
            if (plot === "Corn") {
                addPlant(createCorn())
            }
            if (plot === "Potato") {
                addPlant(createPotato())
            }
            if (plot === "Soybean") {
                addPlant(createSoybean())
            }
            if (plot == "Sunflower") {
                addPlant(createSunflower())
            }
            if (plot === "Wheat") {
                addPlant(createWheat())
            }
        }

    }
}
