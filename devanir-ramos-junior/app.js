
var lang;

fetch("lang.json")
.then(response => {
   return response.json();
})
.then(data => lang = data);

function changeLang() {
  var checkbox = document.getElementById('lang');
  if (checkbox.checked == true) {
    aboutTitle.innerHTML = lang[1].aboutTitle;
    aboutText.innerHTML = lang[1].aboutText;
    knowledgeTitle.innerHTML = lang[1].knowledgeTitle;
    knowledgeText.innerHTML = lang[1].knowledgeText;
    knowledgeList.style.display = 'none';
    cv.textContent = 'Curriculum';
  } else {
    aboutTitle.innerHTML = lang[0].aboutTitle;
    aboutText.innerHTML = lang[0].aboutText;
    knowledgeTitle.innerHTML = lang[0].knowledgeTitle;
    knowledgeText.innerHTML = lang[0].knowledgeText;
    knowledgeList.style.display = 'none';
    cv.textContent = 'Baixar CV';
  }
};

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
