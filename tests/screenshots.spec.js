const {test,expect} = require('@playwright/test');

test.only('scrrenshot in playwright',async({page})=>
{
    await page.goto("https://www.youtube.com/@testerstalk");
    //element screenshot
    await page.locator('#page-header').screenshot({path:'./screenshots/element.png'})
    //page screenshot
    await page.screenshot({path:'./screenshots/page.png'});
    //full page screenshot
    await page.screenshot({path:'./screenshots/fullpage.png',fullPage:true});
    await page.waitForTimeout(5000);
})
 