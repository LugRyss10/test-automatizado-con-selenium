const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");

describe("login", () => {
    it("Prueba del inicio de sesion de sporify", async () => {
        let driver = new Builder().forBrowser("chrome").build();
        try {
            await driver.get("https://accounts.spotify.com/es-ES/login?continue=https%3A%2F%2Fopen.spotify.com%2Fintl-es");
            await driver.findElement(By.id("login-username")).sendKeys("miguelvaldez12@gmail.com");
            await driver.findElement(By.css("#login-password")).sendKeys("Miguelvaldez12");
            await driver.findElement(By.css('[data-testid="login-button"]')).click();
            await driver.sleep(10000);
            const screenshot = await driver.takeScreenshot();
            fs.writeFileSync("screenshot.png", screenshot, "base64");
        } finally {
            await driver.quit();
        }
    });
});