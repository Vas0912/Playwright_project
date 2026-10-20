const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
    testDataForOrder:{
            productName: "ZARA COAT 3",
            username: "vreddy287@gmail.com",
            password: "Vasavi@123"
        }
    }
)