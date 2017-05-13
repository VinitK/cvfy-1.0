import { CvfyappPage } from './app.po';

describe('cvfyapp App', () => {
  let page: CvfyappPage;

  beforeEach(() => {
    page = new CvfyappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
