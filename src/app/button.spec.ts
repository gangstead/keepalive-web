import {Button} from './button';

describe('Button', () => {
  it('should create an instance', () => {
    expect(new Button()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const button = new Button({
      name: 'myName',
      type: 'myType'
    });

    expect(button.name).toEqual('myName');
    expect(button.type).toEqual('myType');
  });
});
