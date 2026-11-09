import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('heading', { name: 'Register' }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('heading', { name: 'Register' }).click();
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
});