import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    BelongsTo,
    AllowNull,
    BelongsToMany
} from 'sequelize-typescript'
import User from './user';
import Tag from './tag';
import BookmarkTag from './bookmarkTag';


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

    @BelongsToMany(() => Tag, () => BookmarkTag)
    declare tags: Tag[]



    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;

}


export default Bookmark