// Use closures to create a simple module for managing a collection of items, Implement methods to add, remove, and list items.

function createItemManager() {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
      console.log(`Item '${item}' added.`);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`Item '${item}' removed.`);
      } else {
        console.log(`Item '${item}' not found.`);
      }
    },
    listItems: function () {
      if (items.length > 0) {
        console.log("Items:", items.join(", "));
      } else {
        console.log("No items in the list.");
      }
    },
  };
}

const itemManager = createItemManager();

itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.listItems();
itemManager.removeItem("Apple");
itemManager.listItems();

itemManager.removeItem("Orange");
itemManager.listItems();
