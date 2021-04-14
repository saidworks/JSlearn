App.component('curr', {
    props: ['value'],
    template:
    /*html*/
        `{{dollar(value)}}`,
    methods: {
        dollar(value) {
            return '$' + Number.parseFloat(value).toFixed(2);
        }
    }
})