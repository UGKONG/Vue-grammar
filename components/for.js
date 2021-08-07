const App = Vue.component('vue-for', {
  template: `
    <section id="vue-for">
      <h1>Vue v-for</h1>
      <li v-for="(data, idx) in list" :key="idx">
        {{ data }}
      </li>
    </section>
  `,
  data () {
    return {
      list: ['사자', '호랑이', '표범', '코끼리', '하마'],
    }
  }
});

export default App;