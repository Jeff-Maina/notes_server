import {
    Table,
    Column,
    Model,
    ForeignKey,
} from 'sequelize-typescript'
import Tag from './tag';
import Bookmark from './bookmark';


@Table
class BookmarkTag extends Model {
    @ForeignKey(() => Bookmark)
    @Column
    declare bookmarkId: number;

    @ForeignKey(() => Tag)
    @Column
    declare tagId: number;
}


export default BookmarkTag