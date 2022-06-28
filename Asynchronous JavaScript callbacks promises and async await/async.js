const takeOrder = (customer, callback) => {
  console.log(`Take order from ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`Processing Order for ${customer}`);
  setTimeout(() => {
    console.log("Cooking complete!");
    console.log(`Order Processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`Complete order for ${customer}`);
};

takeOrder('Customer 1', (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  })
})
