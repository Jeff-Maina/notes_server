import {
    Table,
    Column,
    Model,
    DataType,
    Unique,
    CreatedAt,
    UpdatedAt,
    IsEmail,
    Length,
    ForeignKey,
    Is,
    BelongsTo
} from 'sequelize-typescript'
import User from './user';


@Table
class Bookmark extends Model {


    @Column(DataType.STRING)
    declare websiteName: string;

    @Column(DataType.STRING)
    declare websiteImage: string;

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