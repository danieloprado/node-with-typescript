import { IUser } from '../interfaces/user';
import { Model } from 'objection';
import { Post } from './post';

export class User extends Model implements IUser {
  id: number;
  name: string;
  email: string;
  age: number;

  posts?: Post[];

  static get tableName() {
    return 'User';
  }

  static get relationMappings() {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: 'User.id',
          to: 'Post.userId'
        }
      }
    }
  }
}