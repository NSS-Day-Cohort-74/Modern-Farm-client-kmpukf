console.log("Welcome to the main module")
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

const yearlyPlan = createPlan()

const seedsToPlant = plantSeeds(yearlyPlan)
