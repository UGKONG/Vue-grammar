import './child.js';

const App = Vue.component('vue-event', {
  template: `
    <section id="vue-event">
      <h1>Vue Event</h1>
      <button @click="DOWN">DOWN</button>
      {{ number }}
      <button @click="UP">UP</button>
      <br />
      <br />
      <vue-child :setNumber="setNumber"></vue-child>
    </section>
  `,
  data () {
    return {
      number: 5,
    }
  },
  methods: {
    UP () { this.number += 1 },
    DOWN () { this.number -= 1 },
    setNumber (num) {
      this.number = num;
    }
  }
});

export default App;