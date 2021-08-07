const App = Vue.component('vue-if', {
  template: `
    <section id="vue-if">
      <h1>Vue v-if</h1>
      <span v-if="state">State가 {{ state }}입니다!!</span>
      <button @click="changeState">State전환</button>
    </section>
  `,
  data () {
    return {
      state: true,
    }
  },
  methods: {
    changeState () {
      this.state = !this.state;
    },
  }
});

export default App;