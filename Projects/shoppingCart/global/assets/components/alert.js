App.component("alert", {
    props: ['cartTotal'],
    emits: ['trigger'],
    template: `<slot @DOMContentLoaded="$emit('trigger',this.cartTotal)"></slot><h1>`,
    methods: {
        Trigger() {
            if (this.cartTotal > 100) {
                return "Congratulations you have a 2% discount for each 100$ order"
            }
        }
    }
})