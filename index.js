import './components/index.js';
import './vue-hooks.js';

new Vue({
  el: '#root',
  template: `
    <div id="App">
      <test />
      <vue-event />
      <vue-model />
      <vue-bind />
      <vue-for />
      <vue-if />
      <vue-show />
      <vue-class />
      <vue-style />
      <vue-if-for />
      <vue-x />

    </div>
  `,
});
