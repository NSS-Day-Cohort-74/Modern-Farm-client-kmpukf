const plants = []

export const addPlant = (seedObject) => {
    plants.push(seedObject)
}

export const usePlants = () =>
    plants.map(plant => plant)