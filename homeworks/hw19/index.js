(() => {
  const getRandomId = (prefix = "ID", maxSize) =>
    `${prefix}-${Math.random().toString(16).slice(2)}-${Date.now()}`.slice(0, maxSize);

  const ErrorTypes = {
    RICHED_MAX_AMOUNT_OF_ITEMS: "RICHED_MAX_AMOUNT_OF_ITEMS",
    NO_PROVIDED_CONFIG: "NO_PROVIDED_CONFIG",
    NO_PROVIDED_ID: "NO_PROVIDED_ID",
    NO_ITEM_TITLE: "NO_ITEM_TITLE",
    NO_ITEM_AMOUNT: "NO_ITEM_AMOUNT",
    NO_ITEM_MEASURMENT: "NO_ITEM_MEASURMENT",
    ITEM_NOT_EXISTS: "ITEM_NOT_EXISTS",
  };


  class ShopingListItem {
    constructor(title, amount, measurment) {
      this.id = getRandomId("LIST_ITEM");
      this.title = title;
      this.amount = amount;
      this.measurment = measurment;
    }
  }

  class ShopingList {
    constructor(name, author, maxAmount) {
      this.id = getRandomId("list", 16);
      this.name = name;
      this.author = author;
      this.maxAmount = maxAmount;
      this.items = [];
    }

    addItem(itemConfig) {
      if (this.items.length >= this.maxAmount) throw new Error(ErrorTypes.RICHED_MAX_AMOUNT_OF_ITEMS);
      if (!itemConfig) throw new Error(ErrorTypes.NO_PROVIDED_CONFIG);
      if (!itemConfig.title) throw new Error(ErrorTypes.NO_ITEM_TITLE);
      if (!itemConfig.amount) throw new Error(ErrorTypes.NO_ITEM_AMOUNT);
      if (!itemConfig.measurment) throw new Error(ErrorTypes.NO_ITEM_MEASURMENT);

      this.items.push(new ShopingListItem(itemConfig.title, itemConfig.amount, itemConfig.measurment));
    }

    removeItem(itemId) {
      if (!itemId) throw new Error(ErrorTypes.NO_PROVIDED_ID);

      const item = this.items.find(({ id }) => id === itemId);
      if (!item) throw new Error(ErrorTypes.ITEM_NOT_EXISTS);

      this.items = this.items.filter(eachItem => eachItem.id !== itemId);
    }
  }

  function displayResult(item, type) {
    console.log(item);
    const log = document.getElementById('log');
    const successfulRecord = document.createElement('p');
    successfulRecord.innerText = `${item.title}: ${item.amount} ${item.measurment} - ${type}. Id объекта: ${item.id}`;
    console.log(successfulRecord);
    log.appendChild(successfulRecord);
  }

  function displayError(err) {
    const log = document.getElementById('log');
    const errorRecordElement = document.createElement('p');
    errorRecordElement.innerText = ErrorTypes[err.message];
    errorRecordElement.classList.add('error');
    log.appendChild(errorRecordElement);
  }

  const testConfig = {
    name: "TEST SHOPPING LIST",
    author: "DEMO AUTHOR",
    maxAmount: 4,
    items: [
      { title: "Cookies", amount: 500, measurment: "g." },
      { title: "Water", amount: 1, measurment: "L" },
      { title: "Sugar", amount: 1, measurment: "kg." },
      { title: "Cola", measurment: "L" },
      { title: "Coffee", amount: 200, measurment: "g." },
      { title: "Snickers", amount: 1, measurment: "piece" },
      { title: "Chips", amount: 1, measurment: "pack" },
    ],
    itemsForRemoveIndexes: [2, 1],
  };

  function test(testConfig) {
    let testList;
    try {
      testList = new ShopingList(
        testConfig.name,
        testConfig.author,
        testConfig.maxAmount,
      );

      console.log(testList);
    } catch (err) {
      displayError(err);
    }



    for (let testItem of testConfig.items) {
      try {
        testList.addItem(testItem);
        displayResult(testList.items[testList.items.length - 1], "ADD");
      } catch (err) {
        displayError(err);
      }
    }
  }


  test(testConfig);
});


(() => {
  // import { v4 as uuidv4 } from "uuid";

  class ShoppingListItem {
    constructor(title, amount, measurment) {
      this.id = uuidv4();
      this.title = title;
      this.amount = amount;
      this.measurment = measurment;
    }
  }

  class ShoppingList {
    constructor(listName, author, maxAmount) {
      this.id = uuidv4();
      this.listName = listName;
      this.author = author;
      this.maxAmount = maxAmount;
      this.items = [];
    }

    addItem(itemConfig) {
      if (this.items.length >= this.maxAmount) {
        throw new Error(`Превысили допустимое количество.`);
      }
      if (!itemConfig.title) {
        throw new Error(`Заполните название продукта.`);
      }
      if (!itemConfig.amount) {
        throw new Error(`Заполните количество в продукте ${itemConfig.title}`);
      }
      if (!itemConfig.measurment) {
        throw new Error(
          `Укажите единицу измерения в продукте ${itemConfig.title}`
        );
      }

     const createdItem = new ShoppingListItem(
        itemConfig.title,
        itemConfig.amount,
        itemConfig.measurment,
        itemConfig.id
      )

      this.items.push(createdItem);

      return createdItem;
    }

    removeItem(id) {
      if (!this.items.find((elem) => elem.id === id)) {
        throw new Error(`Товар с идентификантором ${id} не найден`);
      }

      this.items = this.items.filter((elem) => elem.id !== title);
    }

    [Symbol.iterator]() {
      let count = 0;
      return {
        next: () => {
          let value = this.items[count++];
          return { value, done: !value };
        },
      };
    }
  }

  function shoppingListMarkup(item) {
    const wrapperEL = document.querySelector(".wrapper");
    const createItemEl = document.createElement("p");
    createItemEl.innerText = `${item.title}, количество = ${item.amount} ${item.measurment}. Id объекта: ${item.id}.`;
    wrapperEL.appendChild(createItemEl);
  }

  function errorMarkup(error) {
    const wrapperEL = document.querySelector(".wrapper");
    const createItemEl = document.createElement("p");
    createItemEl.innerText = error.message;
    wrapperEL.appendChild(createItemEl);
  }

  const newShoppingList = {
    listName: "Список покупок",
    author: "Ната",
    maxAmount: "5",
    items: [
      { title: "Морковь", amount: 500, measurment: "гр" },
      { title: "Кефир", amount: 1, measurment: "л" },
      { title: "Мясо", amount: 1, measurment: "кг" },
      { title: "Молоко", measurment: "л" },
      { title: "Чай", amount: 100, measurment: "гр" },
      { title: "Яйца", amount: 10, measurment: "шт" },
      { title: "", amount: 1, measurment: "шт" },
    ],
  };

  function makeNewShoppingList(newShoppingList) {
    let testList;

    let createdItems = [];

    try {
      testList = new ShoppingList(
        newShoppingList.listName,
        newShoppingList.author,
        newShoppingList.maxAmount
      );
    } catch (error) {
      errorMarkup(error);
    }

    for (let item of newShoppingList.items) {
      try {
        createdItems.push(testList.addItem(item));
        shoppingListMarkup(testList.items[testList.items.length - 1]);
      } catch (error) {
        errorMarkup(error);
      }
    }

    for (let index = 0; index < createdItems.length; index++) {
      const item = createdItems[index];
      try {
        testList.removeItem(item.id);
      } catch (error) {

      }
    }
  }

  function iterationShoppingList() {
    let list = new ShoppingList("Список покупок 2", "я", 4);
    list.addItem({ title: "Яйца", amount: 10, measurment: "шт" });
    list.addItem({ title: "Молоко", amount: 1, measurment: "л" });
    list.addItem({ title: "Кефир", amount: 1, measurment: "л" });

    for (const item of list) {
      console.log(item);
    }
  }

  makeNewShoppingList(newShoppingList);
  iterationShoppingList();
});
