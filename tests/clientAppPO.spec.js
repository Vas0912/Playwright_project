const {test,expect} = require('@playwright/test');
 const {customtest} = require('../utils/test-base');

const {POManager} = require('../pageobjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require("../utils/clientAppPOTestData.json")));
for(const data of dataSet)
{
    customtest.only(`Client App login for ${data.productName}`,async ({page})=>      
{
    const poManager = new POManager(page);
    const products = page.locator(".card-body");
    const loginPage = poManager.getLoginPage(page);
    await loginPage.goTo();
    await loginPage.validLogin(data.username,data.password);
   const dashBoardPage = poManager.getDashboardPage(page);
   await dashBoardPage.searchProductAddCart(data.productName);
   await dashBoardPage.navigateToCart();
   
    const cartPage = poManager.getCartPage();
     await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.CheckOut();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});}
   customtest.only(' Client App Login-with Fixtures',async({page,testDataForOrder}) =>
    {
        const poManager = new POManager(page);
    const products = page.locator(".card-body");
    const loginPage = poManager.getLoginPage(page);
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password);
   const dashBoardPage = poManager.getDashboardPage(page);
   await dashBoardPage.searchProductAddCart(testDataForOrder.productName);
   await dashBoardPage.navigateToCart();
   
    const cartPage = poManager.getCartPage();
     await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
    await cartPage.CheckOut();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

    })

