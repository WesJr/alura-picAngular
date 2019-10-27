import { AlurapicPage } from './app.po';

describe('alurapic App', () => {
  let page: AlurapicPage;

  beforeEach(() => {
    page = new AlurapicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
