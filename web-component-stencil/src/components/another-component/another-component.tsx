import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'another-component',
  styleUrl: 'another-component.css',
  shadow: true,
})
export class AnotherComponent {

  render() {
    return (
      <Host>
        <slot>Hola Mundo!</slot>
      </Host>
    );
  }

}
