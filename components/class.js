const App = Vue.component('vue-class', {
  template: `
    <section id="vue-class">
      <h1>Vue className</h1>
      <span :class="{'class': state3}">Vue Class!!</span>
      <button @click="changeState3">State3전환</button>
    </section>
  `,
  data () {
    return {
      state3: true,
    }
  },
  methods: {
    changeState3 () {
      this.state3 = !this.state3;
    },
  }
});

export default App;