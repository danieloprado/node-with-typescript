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

  user?: User;

  static get tableName() {
    return 'Post';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        join: {
          from: 'Post.userId',
          to: 'User.id'
        }
      }
    };
  }

  $beforeInsert() {
    this.createdDate = this.updatedDate = new Date();
  }

  $beforeUpdate() {
    this.updatedDate = new Date();
  }
}