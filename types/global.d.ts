import * as bootstrap from 'bootstrap';
import $ from 'jquery';

declare global {
  interface Window {
    jQuery: typeof $;
    $: typeof $;
    bootstrap: typeof bootstrap;
  }
}