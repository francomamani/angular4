import { AlmacenesPage } from './app.po';

describe('almacenes App', () => {
  let page: AlmacenesPage;

  beforeEach(() => {
    page = new AlmacenesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
