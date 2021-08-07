import store from './../store.js';

const App = Vue.component('vue-x', {
  template: `
    <section id="vue-x">
      <h1>Vuex</h1>
      <div>
        <input ref="inputRef" v-model="inputValue" />
        <button @click="addList">저장</button>
      </div>
      <ul>
        <li v-for="(data, idx) in getList" :key="idx">
          {{ idx + 1 }}. {{ data.name }} <button @click="delList(data.seq)">X</button>
        </li>
      </ul>
    </section>
  `,
  data () {
    return {
      inputValue: '',
    }
  },
  methods: {
    addList () {
      if (this.inputValue === '') {
        this.inputValue = '';
        this.$refs.inputRef.focus();
        return;
      }
      store.dispatch('addList', { seq: this.newSeq, name: this.inputValue });
      this.inputValue = '';
      this.$refs.inputRef.focus();
    },
    delList (seq) {
      store.dispatch('delList', seq);
    }
  },
  computed: {
    getList () {
      return store.state.list;
    },
    newSeq () {
      if (this.getList.length === 0) {
        return 0;
      }
      return this.getList[this.getList.length - 1].seq + 1;
    }
  },
  style: `
    #vue-x > div {
      display: flex;
    }
    #vue-x > div > input {
      height: 24px;
      box-sizing: border-box;
      border: 1px solid #aaa;
      border-radius: 0;
      padding: 0 5px;
      outline: none;
    }
    #vue-x > div > button {
      border: 1px solid #aaa;
      border-left: none;
      cursor: pointer;
      color: #444;
      outline: none;
    }
    #vue-x > div > button:hover {
      background-color: #ddd;
    }
    #vue-x > div > button:active {
      background-color: #ccc;
    }
    #vue-x ul {
      margin: 0;
      padding: 2px 0 0;
    }
    #vue-x li {
      list-style: none;
      font-size: 14px;
      padding: 2px 4px;
    }
    #vue-x li:hover > button {
      display: inline-flex;
    }
    #vue-x li > button {
      width: 14px;
      height: 14px;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 0;
      font-size: 10px;
      background-color: #ff4f4f;
      border: 0;
      border-radius: 2px;
      color: #fff;
      cursor: pointer;
    }
    #vue-x li > button:hover {
      background-color: #ff2626;
    }
    #vue-x li > button:active {
      background-color: #f00;
    }
  `,
});

export default App;