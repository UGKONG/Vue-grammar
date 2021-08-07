const App = Vue.component('vue-if-for', {
  template: `
    <section id="vue-if-for">
      <h1>Vue v-if v-for</h1>
      <template v-for="(data, idx) in list">
        <li v-if="data != '표범'" :key="idx">{{ data }}</li>
      </template>
    </section>
  `,
  data () {
    return {
      list: ['사자',' 호랑이', '표범', '코끼리', '하마']
    }
  },
  methods: {
    
  }
});

export default App;