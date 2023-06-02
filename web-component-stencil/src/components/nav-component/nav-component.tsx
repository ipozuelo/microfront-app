import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nav-component',
  styleUrl: 'nav-component.css',
  shadow: true,
})
export class NavComponent {

  render() {
    return (
      <Host>
        <nav>
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Página 1</a></li>
            <li><a href="">Página 2</a></li>
            <li><a href="">Sobre Nosotros</a></li>
          </ul>
        </nav>
      </Host>
    );
  }

}
