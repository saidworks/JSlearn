const App = {
    data() {
        return {
            warningObject: {
                backgroundColor: 'auto',
                border: 'transparent'
            },
            threshold: {
                backgroundColor: "auto"
            },
            borderStyle: {
                border: '3px solid darkgreen',
                borderRadius: '50%'
            },
            displayLabels: true,
            max: 50,
            cart: [],
            displayCart: false,
            products: []
        }
    },
    created() {
        fetch("https://hplussport.com/api/products/order/price")
            .then(response => response.json())
            .then(data => {
                this.products = data;
            });
    },
    computed: {
        filteredProducts() {
            return this.products.filter(item => (item.price < this.max))
        },
        cartTotal() {
            return this.cart.reduce((inc, item) => Number(item.price) + inc, 0)
        },
        notEnough() {
            if (this.cartTotal > 0) {
                console.log(this.threshold);
                this.threshold.backgroundColor = "gray";
            }
        }
    },
    methods: {
        addToCart(product) {
            this.cart.push(product);
            if (this.cartTotal >= 100) { this.warningObject.backgroundColor = 'red' }
        },
        currency(value) {
            return '$' + Number.parseFloat(value).toFixed(2);
        }
    }
}

Vue.createApp(App).mount('#app')