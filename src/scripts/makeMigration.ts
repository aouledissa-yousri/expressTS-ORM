import { exec } from "child_process"
import * as modelList from "../models/models.json"

const models: object[] = modelList["default"]

models.forEach(model => {
    exec ("echo '\n' >> prisma/schema.prisma")
    exec(`cat  ${model["path"]} >> prisma/schema.prisma`)
})
