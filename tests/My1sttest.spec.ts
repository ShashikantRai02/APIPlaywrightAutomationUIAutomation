import { test, expect } from "@playwright/test";
/* 
Fixtures- global variable : page, browser
test("title of tc",async({page})=>{

step1
step2
step3
})

*/
test("Verify the title", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await expect(page).toHaveTitle("Demo Web Shop");
});


