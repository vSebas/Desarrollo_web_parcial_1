var app1 = new Vue({
    el: '#app1',
    data: {
        show: false,
        pasatiempo_link: 'Ingresa tus pasatiempos',
        lista_pasatiempos: [ ]
    },
    methods: {
        add() {
          var nuevoPasatiempo = this.pasatiempo_link;
          this.lista_pasatiempos.push({texto: nuevoPasatiempo});
          this.pasatiempo_link = '';
        },
      }
  });