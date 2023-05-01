import { APISync } from './APISync';
import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { Eventing } from './Eventing';
import { Model } from './Model';

export interface UserProps {
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

  static buildUsersCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, json =>
      User.buildUser(json)
    );
  }

  setRandomAge() {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
