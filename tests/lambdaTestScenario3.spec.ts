import { expect } from "@playwright/test";
import test from "../lambdaSetup";
import { testData } from "../testData";

  test("Lambda Test Scenario 3", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await page.waitForLoadState("domcontentloaded");
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
    const successMessage = await page.locator('//*[contains(@class,"loginform")]//p').textContent();
    expect(successMessage).toBe(testData.SucessMessage);
  });