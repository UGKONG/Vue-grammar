const App = Vue.component('vue-bind', {
  template: `
    <section id="vue-bind">
      <h1>Vue v-bind</h1>
      <p v-bind:title="title">Vue의 속성 테스트</p>
    </section>
  `,
  data () {
    return {
      title: 'Hello Vue',
    }
  }
});

export default App;