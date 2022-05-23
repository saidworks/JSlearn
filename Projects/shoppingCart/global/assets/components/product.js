// App.component('product', {
//     props: ['item'],
//     emits: ['addToCart'],
//     template:
//     /*html*/
//         `<div class="col-2 m-auto">
//         <button :style="borderStyle" @click="$emit('addToCart',item)" class="btn btn-success">+</button>
//         </div>
//         <div class="col-sm-4">
//             <img class="img-fluid d-block" :src="item.image" :alt="item.name">
//         </div>
//         <div class="col">
//             <h3 class="text-primary">{{item.name }}</h3>
//             <p class="mb-0">{{ item.description }}</p>
//             <div class="h5 float-right">
//                 <curr :value="item.price"></curr>
//         </div>
//         </div>`

// })

App.component('product', {
    props: ['item'],
    emits: ['add'],
    template:
    /*html*/
        `
        <div class="col-2 m-auto">
          <button @click="$emit('add', item)" class="btn btn-success">+</button>
        </div>
        <div class="col-sm-4">
          <img class="img-fluid d-block" :src="item.image" :alt="item.name">
        </div>
        <div class="col">
         <h3 class="text-primary">{{item.name }}</h3>
         <p class="mb-0">{{ item.description }}</p>
         <div class="h5 float-right">
           <span class="label"></span><curr :value="item.price"></curr></div>
        </div>
    `
})