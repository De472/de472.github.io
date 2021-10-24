new Vue({
  el: '#vue-app',
  data: {
    name: 'Devanir',
    job: 'Developer',
    site: 'https://www.google.com/',
    siteTag: '<a href="https://www.google.com/"> Google por Tag</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
