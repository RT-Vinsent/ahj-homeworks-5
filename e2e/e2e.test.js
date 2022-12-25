/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import puppeteer from 'puppeteer';
import server from './e2e.server';

jest.setTimeout(30000); // default puppeteer timeout

describe('p2p test', () => {
  const baseUrl = 'http://localhost:8888';

  let browser = null;
  let page = null;

  beforeAll(async () => {
    await server.start(); // запуск сервера

    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 150, // скорость
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

  test('test taskOne Popovers', async () => {
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

  test('test taskTwo Add Product Open and Cancel', async () => {
    await page.goto(baseUrl); // переход на страницу

    const taskTwo = await page.$('[data-id=taskTwo]');
    await taskTwo.click();

    const modalAddProduct = await page.$('.list-edit-add');
    await modalAddProduct.click();

    const productCancel = await page.$('[data-id=editor-cancel]');
    await productCancel.click();

    const modal = await page.$('.list-edit-modal');
    const result = await page.evaluate((el) => el.className, modal);

    expect(result).toEqual('list-edit-modal');
  });

  test('test taskTwo Add Product Save New Product', async () => {
    await page.goto(baseUrl); // переход на страницу

    const taskTwo = await page.$('[data-id=taskTwo]');
    await taskTwo.click();

    const modalAddProduct = await page.$('.list-edit-add');
    await modalAddProduct.click();

    const modalNameProduct = await page.$('#editor-label-name');
    await modalNameProduct.type('Samsung S22 Ultra');

    const modalPriceProduct = await page.$('#editor-label-price');
    await modalPriceProduct.type('12000.22');

    const productSave = await page.$('[data-id=editor-save]');
    await productSave.click();

    const products = await page.$('.list-edit-products');
    const arrProduct = await products.$$('.list-edit-product');
    const arrProductLength = arrProduct.length;

    expect(arrProductLength).toEqual(4);
  });

  test('test taskTwo Add Product delete Product', async () => {
    await page.goto(baseUrl); // переход на страницу

    const taskTwo = await page.$('[data-id=taskTwo]');
    await taskTwo.click();

    const deleteProduct = await page.$('.list-edit-remove');
    await deleteProduct.click();

    const products = await page.$('.list-edit-products');
    const arrProduct = await products.$$('.list-edit-product');
    const arrProductLength = arrProduct.length;

    expect(arrProductLength).toEqual(2);
  });
});
