class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length ? false : true;
  }

  isEmpty() {
    return this.canEnqueue();
  }

  enqueue(item) {
    this.queueControl.push(item);
    if (this.queueControl.length > this.MAX_SIZE) {
      throw new Error("QUEUE_OVERFLOW");
    }

    return this.queueControl
  }

  dequeue() {
    if (this.queueControl.length === 0) {
      throw new Error("QUEUE_UNDERFLOW");
    }
    return this.queueControl.shift();
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
