// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    console.log(this.items);
  }
}

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addPrintJob(job) {
    this.queue.enqueue(job);
    console.log(`Added print job: ${job}`);
  }

  processNextJob() {
    if (this.queue.isEmpty()) {
      console.log("No more print jobs in the queue.");
      return;
    }
    const job = this.queue.dequeue();
    console.log(`Processing print job: ${job}`);
  }

  viewNextJob() {
    const job = this.queue.front();
    if (job === null) {
      console.log("No print jobs in the queue.");
    } else {
      console.log(`Next print job: ${job}`);
    }
  }

  displayJobs() {
    this.queue.display();
  }
}

const printerQueue = new PrinterQueue();
printerQueue.addPrintJob("Document1.pdf");
printerQueue.addPrintJob("Document2.pdf");
printerQueue.addPrintJob("Photo1.jpg");

printerQueue.viewNextJob();
printerQueue.processNextJob();
printerQueue.viewNextJob();
printerQueue.processNextJob();
printerQueue.processNextJob();
printerQueue.processNextJob();

printerQueue.displayJobs();
