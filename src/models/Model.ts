import { ModelSchema } from "./ModelSchema"

export class Model {

    constructor(private id: number) {}

    public getId(): number {
        return this.id
    }

    public static getSchema(): ModelSchema {

        return {
            id: "Int"
        }
        
    }

}