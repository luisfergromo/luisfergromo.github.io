const app = new Vue({
    el:'#footer',
    data:{
        Text:'Developed with HTML, CSS, <a href="http://vanilla-js.com/">VainillaJS</a>,  & ♥',
    },
    template:`
    <p>{{Text}}️</p>
    `
});