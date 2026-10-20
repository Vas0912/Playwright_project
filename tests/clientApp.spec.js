const {test,expect} = require('@playwright/test');

test('practice Playwright test', async ({page})=>      
{
         //const context = await browser.newContext();
         //const page = await context.newPage();
    const productName = 'ZARA COAT 3';
    const email = "vreddy287@gmail.com";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill("Vasavi@123");
    await page.locator("[value='Login']").click();
   // await page.waitForLoadState('networkidle');//waits until page is fully loaded but this one is not recommended
    await page.locator('.card-body b').first().waitFor();
    //console.log(await page.locator('.card-body b').first().textContent());
    const titles = await page.locator(".card-body b").allTextContents();
     console.log(titles);
     const count = await products.count();
     for( let i=0; i<count; ++i)
     {
         if( await products.nth(i).locator("b").textContent() === productName)
     {
          //add the product to cart
          await products.nth(i).locator("text= Add To Cart").click();
          break;
     }
     }
     await page.locator("[routerlink*='cart']").click();// click on cart in home page
     await page.locator("div li").first().waitFor(); // wait untill firs element in the cart page is loaded
     const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible(); // search for Zara coat 3 is visible h3 is tag for product has-text is pseoduclass for locator it checks for text has zara coat 3
     expect(bool).toBeTruthy(); // making sure with the assertion it returns true
     await page.locator("text=Checkout").click();
     await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:100});
     const dropdown = page.locator('.ta-results');
     await dropdown.waitFor();
     const optionsCount= await dropdown.locator("button").count();
     for(let i=0;i<optionsCount;++i)
     {
          const text = await dropdown.locator("button").nth(i).textContent();
          if(text ===" India") /// the text in inspect items is " India"
          {
               await dropdown.locator("button").nth(i).click();
               break;
          }
     }
     expect(await page.locator(".user__name [type='text']").first()).toHaveText(email);
     await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");

    for(let i=0; i<await rows.count();++i)
    {
      const rowOrderId= await rows.nth(i).locator("th").textContent();
      if(orderId.includes(rowOrderId))
      {
          await rows.nth(i).locator("button").first().click();
          break;
      }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
     expect(orderId.includes(orderIdDetails)).toBeTruthy();
     
});                                 