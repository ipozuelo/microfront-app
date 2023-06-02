import { newE2EPage } from '@stencil/core/testing';

describe('nav-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nav-component></nav-component>');

    const element = await page.find('nav-component');
    expect(element).toHaveClass('hydrated');
  });
});
