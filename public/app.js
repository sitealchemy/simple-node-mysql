let data = {
    items: [],
    title: '',
    content: ''
}

loadData();
var app = new Vue({
    el: '#app',
    data: data,
    methods: {
        add: function() {
            const data = {
                title: this.title,
                content: this.content
            }
            axios.post('/api/form', data).then(result => {
                loadData();
            });
        }
    }
})

function loadData() {
    axios.get('/api/form').then(result => {
        data.items = result.data;
    });
}
