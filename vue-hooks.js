Vue.mixin({
  created: function () {
    var defaultFn = this.$options.default;
    if (defaultFn) defaultFn();

    var style = this.$options.style;
    if (style) {
      let s = document.createElement('style');
      s.innerHTML = style;
      document.head.appendChild(s);
    }
  },
});