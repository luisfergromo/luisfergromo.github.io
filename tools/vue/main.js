const app = new Vue({
    el:'#app',
    data:{
        Title:'Hello World',
        Subtitle:'Testing some text'
    },
    template:`
    <h1>{{Title}}</h1>
    <h2>{{Subtitle}}</h2>
    `
});