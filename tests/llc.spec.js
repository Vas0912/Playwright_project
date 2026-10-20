
import {test, expect} from '@playwright/test';

test('Playwright special Locator',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();  // for clicks getbylabel is stable
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123"); // because the password has placeholder attribute we use getByPlaceholder
    await page.getByRole("button",{name:'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!").isVisible();
    // 5 seconds default timeout for expect assertions
    //if the application takes 7 seconds for assertions: expect(locator).toBeVisible({timeout:10_000})--step level
    //expect(page.getByText("Success! The Form has been submitted successfully!")).toBeVisible();
    await page.getByRole("link",{name :'Shop'}).click();
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();
})

test ('Playwright test level timeout',async({page})=>
{
    test.setTimeout(60000);// gobal timeout for the whole test instead of distrubing config file timeout 30*000 we mentioning here
    const slowExpect = expect.configure({timeout:9000});
    page.setDefaultTimeout(9000); //test level action timeout
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();  // for clicks getbylabel is stable
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123"); // because the password has placeholder attribute we use getByPlaceholder
    await page.getByRole("button",{name:'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!").isVisible();
    // 5 seconds default timeout for expect assertions
    //if the application takes 7 seconds for assertions: expect(locator).toBeVisible({timeout:10_000})--step level
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!")).toBeVisible();
    //Global -> test ->step
    await page.getByRole("link",{name :'Shop'}).click();
    await slowExpect(page.locator(".my-4").first()).toHaveText("Shop");
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click({timeout:15000}); // action timeout at step level
})

