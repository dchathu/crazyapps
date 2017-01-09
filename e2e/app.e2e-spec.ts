import { CAV1Page } from './app.po';

describe('cav1 App', function() {
  let page: CAV1Page;

  beforeEach(() => {
    page = new CAV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
