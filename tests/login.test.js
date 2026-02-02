import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test ('Login com Sucesso' , async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.register('teste@gmail.com' , '123456')
    await expect(loginPage.successMessage).toBeVisible
})

