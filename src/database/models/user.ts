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
    Is
} from 'sequelize-typescript'


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

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}


export default User