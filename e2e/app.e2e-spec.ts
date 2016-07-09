import { BennyHillPlayerPage } from './app.po';

describe('benny-hill-player App', function() {
  let page: BennyHillPlayerPage;

  beforeEach(() => {
    page = new BennyHillPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
