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
        <div>
          <h1>Componente Stencil</h1>
          <h2>Clasificación Liga</h2>
          <ul>
            <li>Barcelona</li>
            <li>Real Madrid</li>
            <li>Atlético Del Madrid</li>
            <li>Real Sociedad</li>
            <li>Real Betis</li>
          </ul>
        </div>
      </Host>
    );
  }
}
