import { Model } from "./Model"
import fs from "fs"

//initializing schema tree
let schemas = []

//getting model schemas from model classes
schemas.push(Model.getSchema())
console.log(schemas)

//writing model tree 
fs.writeFileSync("./modelTree.json", JSON.stringify(schemas))