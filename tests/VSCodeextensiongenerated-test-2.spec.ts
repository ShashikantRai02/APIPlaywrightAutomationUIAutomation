import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoblaze.com/prod.html?idp_=1#");
  await page.getByRole("link", { name: "Home (current)" }).click();
  await page.getByRole("link", { name: "Samsung galaxy s6" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("link", { name: "Add to cart" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("link", { name: "Add to cart" }).click();
  await page.getByRole("link", { name: "Cart", exact: true }).click();
  await expect(page.locator("#tbodyid")).toContainText("Samsung galaxy s6");
  await expect(page.locator("thead")).toContainText("Price");
  await expect(page.locator("#tbodyid")).toContainText("360");
  await expect(page.getByRole("img").nth(1)).toBeVisible();
  await expect(page.getByRole("button")).toContainText("Place Order");
  await page.getByRole("button", { name: "Place Order" }).click();
  await page.getByRole("textbox", { name: "Total: 720 Name:" }).click();
  await page.getByRole("textbox", { name: "Total: 720 Name:" }).fill("qq");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Purchase" }).click();
  await page.getByRole("textbox", { name: "Country:" }).click();
  await page.getByRole("textbox", { name: "Country:" }).fill("ww");
  await page.getByRole("textbox", { name: "City:" }).click();
  await page.getByRole("textbox", { name: "City:" }).fill("ww");
  await page.getByRole("dialog", { name: "Place order" }).click();
  await page.getByRole("textbox", { name: "Credit card:" }).click();
  await page.getByRole("textbox", { name: "Credit card:" }).fill("45643635");
  await page.getByRole("textbox", { name: "Year:" }).click();
  await page.getByRole("textbox", { name: "Year:" }).fill("2025");
  await page.getByRole("textbox", { name: "Month:" }).click();
  await page.getByRole("textbox", { name: "Month:" }).fill("11");
  await page.getByRole("button", { name: "Purchase" }).click();
  await expect(page.locator("body")).toContainText("OK");
  await page.getByRole("button", { name: "OK" }).click();
});
