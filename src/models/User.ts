import { APISync } from './APISync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Model } from './Model';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new APISync(rootUrl)
    );
  }
}
