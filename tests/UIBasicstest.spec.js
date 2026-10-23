const {test,expect} = require('@playwright/test');

test('Browser context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username'); // instead of writing the selector evertimje we can store the selector in a variable userName/ await page.locator('#username').fill("rahulshetty");
    const signIn = page.locator('#signInBtn'); // await page.locator('#signInBtn').click();
    const cardTitles = page.locator(".card-body a");
    console.log(await page.title());
    // css selectors
    await userName.fill("rahulshetty"); //to enter anything in the edit boxes we can use two methods .type/.fill
    await page.locator("[type='password']").fill("Learning@830$3mK2"); // wrote selector based on attribute [tagname='value']
    await signIn.click(); // click() is used to perform click action
    console.log(await page.locator("[style*='block']").textContent()); // capture the error message for incorrect username or password
    await expect(page.locator("[style*='block']")).toContainText('Incorrect'); // check the error message contain "incorrect" word
    await userName.fill(""); // clear the username field
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.first().textContent()); // capture the first element in the list of elements 
    //console.log(await cardTitles.nth(1).textContent()); // capture the second element
    const allTitles = await cardTitles.allTextContents(); // it capture all the elements and return array of elemets
    // if we didn't mentions first(). textContent() and directly write allTextContents() step the array will retun empty array[]
    //textContent() playwright will patiently wait up to 30 seconds for the element to appear in the DOM before extracting the text
    console.log(allTitles);
}
);












test('UI controls', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const signIn = page.locator('#signInBtn'); 
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown= page.locator("select.form-control");
    await dropdown.selectOption("consult");
   await page.locator(".radiotextsty").last().click();
   await page.locator("#okayBtn").click();
   console.log(await page.locator(".radiotextsty").last().isChecked());// it returns boolean value
   await expect (page.locator(".radiotextsty").last()).toBeChecked();
   await page.locator("#terms").click();
   await expect (page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect (await page.locator("#terms").isChecked()).toBeFalsy();
    // await expect ( page.locator("#terms")).not.toBeChecked(); instead of above line we can also write this line
    await expect(documentLink).toHaveAttribute("class","blinkingText");
}
);

test('child window handl', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),//listen for any new page pending, rejected, fulfilled
            documentLink.click(),
        ])// new page is opened
    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    await userName.fill(domain);
    console.log(await page.locator("#username").inputValue());

})