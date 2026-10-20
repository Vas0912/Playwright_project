const {test,expect} = require('@playwright/test');

test('practice Playwright test', async ({page})=>      
{
         //const context = await browser.newContext();
         //const page = await context.newPage();
    const productName = 'ZARA COAT 3';
    const email = "vreddy287@gmail.com";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder('email@example.com').fill(email);
    await page.getByPlaceholder('enter your passsword').fill("Vasavi@123");
    await page.getByRole("button",{name:"Login"}).click();
    await page.waitForLoadState('networkidle');//waits until page is fully loaded but this one is not recommended
    await page.locator('.card-body b').first().waitFor();
    //console.log(await page.locator('.card-body b').first().textContent());
    await page.locator(".card-body").filter({hasText:'ZARA COAT 3'}).getByRole("button",{name:'Add to Cart'}).click();
     await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();//bcz Cart is not unique we added the parent also
     // getbyrole("listitem") is important in the above step bcz that cart item is in <li> if listitem is not mentioned it selects all the buttons which has cart in it like "Add to cart"also
     await page.locator("div li").first().waitFor(); // wait untill firs element in the cart page is loaded
     await expect(page.getByText("ZARA COAT 3")).toBeVisible();
     await page.getByRole("button",{name:"Checkout"}).click();

     await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:100});
     await page.getByRole("button",{name:"India"}).nth(1).click();


     await page.getByText("PLACE ORDER").click();
    await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();


    const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    const cleanOrderId=orderId.replace(/\|/g, '').trim(); 
    await page.getByRole('listitem').getByRole("button",{name:"ORDERS"}).click();
  
    await page.locator("tbody").waitFor();
    await page.locator("tbody tr").filter({hasText:cleanOrderId}).getByText("View").click();

    const orderIdDetails = await page.locator(".col-text").textContent();
     expect(orderId.includes(orderIdDetails)).toBeTruthy();
     
});                                 