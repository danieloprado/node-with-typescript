import { IUser } from '../interfaces/user';
import { Model } from 'objection';
import { Post } from './post';

export class User extends Model implements IUser {
  id: number;
  name: string;
  email: string;
  age: number;

  static tableName = 'User';
  static relationMappings = {
    posts: {
      relation: Model.HasManyRelation,
      modelClass: Post,
      join: {
        from: 'id',
        to: 'userId'
      }
    }
  }
}