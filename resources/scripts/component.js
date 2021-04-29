/**
 * Get the component file
 */
import Component from './Component.svelte';

/**
 * The el we want to rend the component in
 */
const component = document.querySelector('#component')

/**
 * Creating the component.
 * We pass the element as a prop, that way we can access data-* as a prop.
 */
new Component({ target: component, props: { component } })
