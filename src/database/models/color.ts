import { Model } from "sequelize";
import { AllowNull, Table } from "sequelize-typescript";



@Table({
    timestamps: true
})
class Color extends Model {
    @AllowNull(false)
    declare color: string;
}


export default Color;