class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length ? false : true;
  }

  isEmpty() {
    if (!this.canPush()) return false;

    return this.stackControl.length ? false : true;
  }

  push(item) {
    if (this.stackControl.length === this.MAX_SIZE) {
      throw new Error("STACK_OVERFLOW");
    }

    this.stackControl.push(item);

    return this.stackControl;
  }

  pop() {
    if (!this.stackControl.length) {
      throw new Error("STACK_UNDERFLOW");
    }

    return this.stackControl.pop();
  }

  display() {
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Stack;
