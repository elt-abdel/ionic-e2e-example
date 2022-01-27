import {
  Device,
  pause,
  setDevice,
  switchToWeb,
  url,
  waitForLoad,
} from '../helpers';

import schedulePage from '../pageobjects/schedule.page';

describe('Schedule Filter', () => {
  before(async () => {
    await waitForLoad();
  });

  beforeEach(async () => {
    await setDevice(Device.Mobile);
    await switchToWeb();
    await url('/app/tabs/schedule');
    await pause(200);
    await schedulePage.filterButton.tap();
    await pause(400);
  });

  it('Should load filters', async () => {
    const items = await $$('page-schedule-filter ion-item');
    expect(items.length).toBe(10);
  });
});
