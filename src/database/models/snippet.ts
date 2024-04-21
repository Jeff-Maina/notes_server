import { Model } from "sequelize";
import { AllowNull, Table } from "sequelize-typescript";



@Table({
    timestamps: true
})
class Snippet extends Model {
    @AllowNull(false)
    declare title: string;

    @AllowNull(false)
    declare language: string;

    @AllowNull(false)
    declare code: string;
}


export default Snippet;