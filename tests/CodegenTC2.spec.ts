import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/prod.html?idp_=1#');
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'Nexus' }).click();
  await expect(page.locator('#tbodyid')).toContainText('Add to cart');
  await expect(page.getByRole('heading', { name: 'Nexus' })).toBeVisible();
  await expect(page.locator('#imgp img')).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await expect(page.locator('#tbodyid')).toContainText('Nexus 6');
  await page.getByRole('cell', { name: '650' }).click();
  await expect(page.locator('thead')).toContainText('Price');
  await expect(page.getByRole('row', { name: 'Nexus 6 650 Delete' }).getByRole('img')).toBeVisible();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('textbox', { name: 'Total: 650 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 650 Name:' }).fill('sasi');
  await page.getByRole('textbox', { name: 'Country:' }).click();
  await page.getByRole('textbox', { name: 'Country:' }).fill('ind');
  await page.getByRole('textbox', { name: 'City:' }).click();
  await page.getByRole('textbox', { name: 'City:' }).fill('lko');
  await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('56756655686');
  await page.getByRole('textbox', { name: 'Month:' }).click();
  await page.getByRole('textbox', { name: 'Month:' }).fill('nov');
  await page.getByRole('textbox', { name: 'Year:' }).click();
  await page.getByRole('textbox', { name: 'Year:' }).fill('2022');
  await expect(page.locator('html').getByRole('document')).toContainText('Purchase');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.locator('body')).toContainText('OK');
  await page.getByRole('dialog', { name: 'Place order' }).click();
});