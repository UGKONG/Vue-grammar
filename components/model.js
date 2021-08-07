const App = Vue.component('vue-model', {
  template: `
    <section id="vue-model">
      <h1>Vue v-model</h1>
      {{ number }}<br />
      <input v-model="number" />
    </section>
  `,
  data () {
    return {
      number: 0,
    }
  },
  methods: {
    textFn () {

    }
  },
});

export default App;