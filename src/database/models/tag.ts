import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    AllowNull,
    BelongsToMany,

} from 'sequelize-typescript'
import Bookmark from './bookmark';
import BookmarkTag from './bookmarkTag';


@Table
class Tag extends Model {

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    declare name: string;


    @BelongsToMany(() => Bookmark, () => BookmarkTag)
    declare bookmarks: Bookmark[]

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;

}


export default Tag


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJ1c2VySWQiOjEsImlhdCI6MTcxMzc0MTM2OX0.716ZJTrm6YUaZlNgbMICJYJkuyRUzwYFa7JZjYEFKIY