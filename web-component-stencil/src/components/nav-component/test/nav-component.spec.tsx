import { newSpecPage } from '@stencil/core/testing';
import { NavComponent } from '../nav-component';

describe('nav-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NavComponent],
      html: `<nav-component></nav-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nav-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nav-component>
    `);
  });
});
