const App = Vue.component('vue-show', {
  template: `
    <section id="vue-show">
      <h1>Vue v-show</h1>
      <span v-show="state2">State가 {{ state2 }}입니다!!</span>
      <button @click="changeState2">State2전환</button>
    </section>
  `,
  data () {
    return {
      state2: true,
    }
  },
  methods: {
    changeState2 () {
      this.state2 = !this.state2;
    },
  }
});

export default App;