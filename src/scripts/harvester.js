import { usePlants } from "./field.js";

const plants = usePlants()

/* 
1. Create a forof loop to iterate harvestPlants
2. Create a new empty array in the scope of the forof loop
3. Push the seedObject multiplied by its output key value
4. Return the newly constructed array and export it
5. Import the returned array to the catalog module
*/

const harvested = []

export const harvestPlants = (plants) => {
    for (const plant of plants) {
        for (let i = 0; i < plant.output; i++) {
            harvested.push(plant)
        }
    }
    return harvested
}
