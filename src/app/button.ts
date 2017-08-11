export class Button {
  id: string;
  name: string;
  type: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
