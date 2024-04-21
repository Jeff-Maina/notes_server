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
    Is,
    HasMany
} from 'sequelize-typescript'
import Bookmark from './bookmark';


@Table
class User extends Model {
    @IsEmail
    @Unique
    @Column({
        type: DataType.STRING,
    })
    declare email: string;

    @Length({ min: 6 })
    @Column(DataType.STRING)
    declare password: string;

    @HasMany(() => Bookmark)
    declare bookmarks: Bookmark[]

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;

}


export default User