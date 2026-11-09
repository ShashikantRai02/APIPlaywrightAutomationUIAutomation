import { test, expect } from "@playwright/test";
test("Playwright locators", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/");
  const signInButton = page.getByRole("button", { name: "Sign In" });
  await expect(signInButton).toBeVisible();
  await signInButton.click();

  //    We recommend using text locators to find non interactive elements like div, span, p, etc.
  // For interactive elements like button, a, input, etc. use role locators.
  //  page.getByText().

  const welcomeText = page.getByText(
    "👋 Welcome, admin! You are authenticated.",
    { exact: true },
  );
  await expect(welcomeText).toBeVisible();
  //   Use this locator when locating form fields.
  // page.getByLabel().

  const feedback = page.getByLabel("Your feedback (getByLabel)");
  await expect(feedback).toBeVisible();
  await feedback.fill("Excellent");

  //    Use this locator when locating form elements that do not have labels
  //  but do have placeholder texts.
  // page.getByPlaceholder().
  const yourFeedback = page.getByPlaceholder("Share your automation tips...");
  await expect(yourFeedback).toBeVisible();
  await yourFeedback.fill("Excellent");
  //   Use this locator when your element supports alt text such as img and area elements.
  // All images should have an alt attribute that describes the image.
  // You can locate an image based on the text alternative using page.getByAltText().

  await expect(page.getByAltText("Playwright automation logo")).toBeVisible();
  //   Use this locator when your element has the title attribute.
  // Locate an element with a matching title attribute using page.getByTitle().

  const logo = page.getByTitle("Click to inspect logo");
  await expect(logo).toBeVisible();
  await expect(logo).toHaveText("Logo alt");
  await expect(logo).toContainText("Logo alt"); // toContainText()- means or use for partial text matches
  //   You can also use test ids when you choose to use the test id methodology or
  //  when you can't locate by role or text.
  // Set a custom test id attribute
  // By default, page.getByTestId() will locate elements based on the data-testid attribute,
  //  but you can configure it in your test config or by calling selectors.setTestIdAttribute().

  const addtotaskbutton = page.getByTestId("add-task-button");
  await expect(addtotaskbutton).toBeVisible();
  await addtotaskbutton.click();
});
