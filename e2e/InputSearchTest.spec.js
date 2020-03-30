/* eslint-disable no-undef */
const { reloadApp } = require('detox-expo-helpers');

describe('Testing Search component', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should have input Search ', async () => {
    await expect(element(by.id('searchInput'))).toBeVisible();
  });

  it('should visible search list', async () => {
    await element(by.id('searchInput')).tap();
    await element(by.id('searchInput')).typeText('Bad Boys for life');
    await expect(element(by.id('MovieSearchListTest'))).toBeVisible();
  });
});
