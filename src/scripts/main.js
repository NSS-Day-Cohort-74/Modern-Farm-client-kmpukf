console.log("Welcome to the main module")
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const plants = usePlants()
//console.log(plants)
const plantsHarvest = harvestPlants(plants)
const plantHTML = catalog(plantsHarvest)
//console.log(plantsHarvest)

const mainContainerEl = document.querySelector(".container")
mainContainerEl.innerHTML = plantHTML