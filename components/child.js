const App = Vue.component('vue-child', {
  props: ['setNumber'],
  template: `
    <div>
      숫자 초기화
      <button @click="setNumber(0)">Click</button>
    </div>
  `,
});

export default App;