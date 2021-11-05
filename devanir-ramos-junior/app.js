new Vue({
  el: '#wrapper-footer',
  methods: {
    onEnterGH: function() {
      document.activeElement.blur();
      window.open('https://github.com/De472', '_blank');
    },
    onEnterLN: function() {
      document.activeElement.blur();
      window.open('https://www.linkedin.com/in/devanir-ramos-junior/', '_blank');
    }
  }
});

/*
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
    },
    clickTest: function(event){
      console.log(event);
    }
  }
});
*/
