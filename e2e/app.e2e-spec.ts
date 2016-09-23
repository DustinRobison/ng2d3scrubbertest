import { ScrubberTestPage } from './app.po';

describe('scrubber-test App', function() {
  let page: ScrubberTestPage;

  beforeEach(() => {
    page = new ScrubberTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
