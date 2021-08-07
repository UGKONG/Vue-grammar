const App = Vue.component('vue-style', {
  template: `
    <section id="vue-style">
      <h1>Vue style</h1>
      <li :style="firstStyle">첫 번째 리스트<button @click="firstClick">클릭</button></li>
      <li :style="{color: 'orange'}">두 번째 리스트</li>
    </section>
  `,
  data () {
    return {
      firstStyle: {color: 'red'}
    }
  },
  methods: {
    firstClick () {
      this.firstStyle.color = this.firstStyle.color == 'red' ? 'blue' : 'red';
    }
  }
});

export default App;