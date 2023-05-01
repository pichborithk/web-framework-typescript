import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<UserProps, User> {
  eventsMap(): {
    [key: string]: () => void;
  } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onUpdateNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onUpdateNameClick = (): void => {
    const input = this.parent.querySelector('input');
    const name = input?.value;

    this.model.set({ name });
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Update Name</button>
        <button class="set-age">Click Me</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
