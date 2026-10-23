const {test,expect} = require('@playwright/test');

//test.describe.configure({mode:'parallel'});
//test.describe.configure({mode:'serial'});
test("@Web popup Validation",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://www.google.com/");
   // await page.goBack();
    //await page.goForward(); // methods used to go back and forward in browsers
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.pause();
//page.on('dialog', async dialog =>{
   // await dialog.accept(); 
    page.on('dialog',dialog=>dialog.accept());// java pop-up alerts
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const framespage= page.frameLocator("#courses-iframe");
    await framespage.locator("li a[href*='lifetime-access']:visible").click(); // we use visible because the locater identify 2 elements: one is in invisible mode but we want only visible one 
    const textCheck = await framespage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);
});

test("@Web Screenshots and visual comparison",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path:'partialScreenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
});

