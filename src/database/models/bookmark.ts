import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    BelongsTo,
    AllowNull
} from 'sequelize-typescript'
import User from './user';


@Table
class Bookmark extends Model {

    @AllowNull(false)
    @Column(DataType.STRING)
    declare websiteName: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare websiteImage: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare websiteDomain: string;

    @ForeignKey(() => User)
    @Column
    declare userId: number;

    @BelongsTo(() => User)
    declare user: User;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;

}


export default Bookmark