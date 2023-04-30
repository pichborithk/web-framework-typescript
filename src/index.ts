import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.on('save', () => {
  console.log(user);
});

user.fetch();

// user.set({ age: 26, name: 'John' });

// user.save();
