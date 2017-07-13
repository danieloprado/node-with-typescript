import { IPost } from '../interfaces/post';
import { Model } from 'objection';
import { User } from './user';

export class Post extends Model implements IPost {
  title: string;
  slug: string;
  content: string;
  userId: number;
  createdDate: Date;
  updatedDate: Date;

  static tableName = 'Post';
  static relationMappings = {
    user: {
      relation: Model.HasOneRelation,
      modelClass: Post,
      join: {
        from: 'userId',
        to: 'id'
      }
    }
  }

  $beforeInsert() {
    this.createdDate = this.updatedDate = new Date();
  }

  $beforeUpdate() {
    this.updatedDate = new Date();
  }
}