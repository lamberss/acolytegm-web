import { AcolytegmWebPage } from './app.po';

describe('acolytegm-web App', function() {
  let page: AcolytegmWebPage;

  beforeEach(() => {
    page = new AcolytegmWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
