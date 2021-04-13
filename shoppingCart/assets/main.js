const App = {
    data() {
        return {
            salesBtn: "btn-success",
            totalBtn: "font-weight-bold bg-white",
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
        }
    },
    methods: {
        addToCart(product) {
            this.cart.push(product);
            if (this.cartTotal <= 200 && this.cartTotal >= 100) { this.salesBtn = "btn-warning"; } else if (this.cartTotal < 100) { this.salesBtn = "btn-success"; } else if (this.cartTotal >= 200) { this.salesBtn = "btn-danger"; }
        },
        currency(value) {
            return '$' + Number.parseFloat(value).toFixed(2);
        },
        changeColor() {
            if (this.displayCart == true) {
                this.totalBtn = "text-danger"
            } else {
                this.totalBtn = "font-weight-bold bg-white"
            }
        }
    }
}

Vue.createApp(App).mount('#app')