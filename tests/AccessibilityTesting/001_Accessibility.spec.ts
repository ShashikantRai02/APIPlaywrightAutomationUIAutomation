/* 
1) Playwright can be used to test your application for many types of accessibility issues.
Examples:
    Missing or Improper ALT Text for Images
    Poor Color Contrast
    Missing Form Labels
    Keyboard Navigation Issues

Every website should follow WCAG guidelines.
    - Web Content Accessibility Guidelines (WCAG) 

Install @axe-core/playwright: 
    npm install @axe-core/playwright

https://www.npmjs.com/package/@axe-core/playwright

WCAG reference: https://www.w3.org/WAI/standards-guidelines/wcag/

Practice demo: https://www.w3.org

*/
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test.describe("Accessibility tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/accessibility_test_app");
  });
  // 1   Basic Accessibility scan
  test("Basic accessibility scan", async ({ page }) => {
    const result = await new AxeBuilder({ page }).analyze(); //Returns all accessibility violations.
    console.log(result.violations);
    //expect(result.violations).toEqual([]);
  });
});
// 2. Print Accessibility Violations
test("Print Accessibility Violations", async ({ page }) => {
  const result = await new AxeBuilder({ page }).analyze();
  console.log(`Total violations:${result.violations.length}`);
  //console.log(result.violations);
  for (const violation of result.violations) {
    console.log(`\nRule: ${violation.id}`);
    console.log(`Impact: ${violation.impact}`);
    console.log(`Description:${violation.description}`);
  }
});
// 3scan a specific section
test("Scan a login section only", async ({ page }) => {
  const result = await new AxeBuilder({ page })
    .include("#section-login")
    .analyze();
  console.log(result.violations);
});
//4 Exclude a section
test("Exclude Advertisement and Footer", async ({ page }) => {
  const result = await new AxeBuilder({ page })
    .exclude(".ad-banner")
    .exclude(".footer")
    .analyze();
  console.log(result.violations);
});
// 5scan specific wcag violations
test("Scan ecag 2.2 A and AA succes criteria ", async ({ page }) => {
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag2.2aa"])
    .analyze();
  console.log(result.violations);
});
// 6Disable individual rules
test("Disable color-contrast and image-alt rules", async ({ page }) => {
  const result = await new AxeBuilder({ page })
    .disableRules(["color-contrast", "image-alt"])
    .analyze();
  console.log(result.violations);
});
//Export Scan Results as Test Attachment
test("Export accessibility report", async ({ page }, testInfo) => {
  const result = await new AxeBuilder({ page }).analyze();
  await testInfo.attach("AccessibilityReport.json", {
    body: JSON.stringify(result),
    contentType: "application/json",
  });
  console.log("Accessibility report attached successfully");
});
