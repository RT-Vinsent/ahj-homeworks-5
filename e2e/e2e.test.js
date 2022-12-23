/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import puppeteer from 'puppeteer';
import server from './e2e.server';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  const baseUrl = 'http://localhost:8888';

  let browser = null;
  let page = null;

  beforeAll(async () => {
    await server.start(); // запуск сервера

    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 50, // скорость
      devtools: false, // show devTools
      args: ['--window-size=640,1080'],
      defaultViewport: {
        width: 640,
        height: 1080,
      },
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close(); // закрытие браузера
    await server.stop(); // остановка сервера
  });

  test('test taskOne', async () => {
    await page.goto(baseUrl); // переход на страницу

    const taskOne = await page.$('[data-id=taskOne]');

    await taskOne.click();

    const hasTooltip = await page.$$('.has-tooltip');

    for (let i = 0; i < hasTooltip.length; i += 1) {
      await hasTooltip[i].click();
      await hasTooltip[i].waitForSelector('.tooltip_active')
        .then(() => console.log('got it'));
    }
  });
});
