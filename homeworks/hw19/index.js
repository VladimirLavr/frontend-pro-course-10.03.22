const getRandomId = (prefix = "ID") => `${prefix}-${Math.random().toString(16).slice(2)}-${Date.now()}`;

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
  constructor (title, amount, measurment) {
    this.id = getRandomId("LIST_ITEM");
    this.title = title;
    this.amount = amount;
    this.measurment = measurment;
  }
}

class ShopingList {
  constructor (name, author, maxAmount) {
    this.id = getRandomId("SHOPING_LIST");
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

    const item = this.items.find(({id}) => id === itemId);
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
    {title: "Cookies", amount: 500, measurment: "g."},
    {title: "Water", amount: 1, measurment: "L"},
    {title: "Sugar", amount: 1, measurment: "kg."},
    {title: "Cola", measurment: "L"},
    {title: "Coffee", amount: 200, measurment: "g."},
    {title: "Snickers", amount: 1, measurment: "piece"},
    {title: "Chips", amount: 1, measurment: "pack"},
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
