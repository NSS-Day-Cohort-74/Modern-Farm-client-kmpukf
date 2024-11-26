const plants = []

export const addPlant = (seedObject) => {
    if(Array.isArray(seedObject)) {
        for (const corn of seedObject) {
            plants.push(corn)
        } 
    } else {
        plants.push(seedObject)
        }
    }
export const usePlants = () =>
    plants.map(plant => plant)