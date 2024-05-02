import { expect } from "@playwright/test";
import test from "../lambdaSetup";
 //import test from '@playwright/test'
const testData = {
  Url: "https://www.lambdatest.com/selenium-playground/",
  WelcomeMessage: "Welcome to LambdaTest",
  userName: "Mahammad Imran",
  Email: "testimran@gmail.com",
  Password: "Test@123",
  Company: "Lambda",
  Website: "www.lambda.com",
  Country: "United States",
  City: "Texas",
  Address1: "Street line1",
  Address2: "Street line2",
  State: "Texas",
  Zip: "76330",
  SucessMessage: "Thanks for contacting us, we will get back to you shortly.",
};

test.describe("PlayWright Test Scenarios", async () => {
  test.beforeEach(async ({ page }) => {
    test.step("Launch Application ", async () => {
      await page.goto(testData.Url);
      await page.waitForLoadState("domcontentloaded");
    });
  });

  test("Lambda Test Scenario 1", async ({ page }) => {
    await page.getByRole("link", { name: "Simple Form Demo" }).click();
    await page.getByPlaceholder("Please enter your Message").fill(testData.WelcomeMessage);
    await page.getByRole("button", { name: "Get Checked Value" }).click();
    await expect(page.locator("#message")).toHaveText(testData.WelcomeMessage);
  });

  test("Lambda Test Scenario 2", async ({ page }) => {
    await page.getByRole("link", { name: "Drag & Drop Sliders" }).click();
    await page.waitForSelector("#slider3");
    let defaultValTxt = await page.locator("#rangeSuccess").innerText();
    expect(defaultValTxt).toBe("15");
    await page.locator("#slider3").getByRole("slider").fill("95");
    let afterValTxt = await page.locator("#rangeSuccess").innerText();
    expect(afterValTxt).toBe("95");
  });

  test("Lambda Test Scenario 3", async ({ page }) => {
    await page.getByRole("link", { name: "Input Form Submit" }).click();
    await page.getByRole("button", { name: "Submit" }).click();
    await page.getByPlaceholder("Name", { exact: true }).fill(testData.userName);
    await page.getByPlaceholder("Email", { exact: true }).fill(testData.Email);
    await page.getByPlaceholder("Password").fill(testData.Password);
    await page.getByPlaceholder("Company").fill(testData.Company);
    await page.getByPlaceholder("Website").fill(testData.Website);
    await page.getByRole("combobox").selectOption(testData.Country);
    await page.getByPlaceholder("City").fill(testData.City);
    await page.getByPlaceholder("Address 1").fill(testData.Address1);
    await page.getByPlaceholder("Address 2").fill(testData.Address2);
    await page.getByPlaceholder("State").fill(testData.State);
    await page.getByPlaceholder("Zip code").fill(testData.Zip);
    await page.getByRole("button", { name: "Submit" }).click();
    await page.waitForTimeout(2000);
    const successMessage = await page
      .locator('//*[contains(@class,"loginform")]//p')
      .textContent();
    expect(successMessage).toBe(testData.SucessMessage);
  });
});
