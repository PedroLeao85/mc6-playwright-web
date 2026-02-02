import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test ('Login com Sucesso' , async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.register('teste@gmail.com' , '123456')
    await expect(loginPage.successMessage).toBeVisible
})

test ('Login com senha <5 caracteres' , async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto();
    await loginPage.fillUsername('teste@gmail.com');
    await loginPage.fillPassword('123');
    await loginPage.clickLogin();
    await expect(loginPage.errorMessageSenha).toBeVisible
})

test ('Login com email inválido' , async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto();
    await loginPage.fillUsername('teste');
    await loginPage.fillPassword('123456');
    await loginPage.clickLogin();
    await expect(loginPage.errorMessageEmail).toBeVisible
})

