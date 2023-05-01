// import { User } from './models/User';
// import { UserEdit } from './views/UserEdit';

import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';

// const collection = User.buildUsersCollection();

// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();

// const user = User.buildUser({ name: 'test', age: 40 });

// const userEdit = new UserEdit(document.getElementById('root')!, user);

// userEdit.render();

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root')!;

  new UserList(root, users).render();
});

users.fetch();
