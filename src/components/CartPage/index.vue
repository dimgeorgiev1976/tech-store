<template>
    <div class="row">
        <div class="col">
            <div class="title-1">Сделать заказ</div>

            <template v-for='product in products'>
                <div class="order-item" :key='product.id'>
                    <div class="order-item-data">
                        <div class="order-img">
                            <router-link :to='`/product/${ product.id }`'>
                                <img class="order-img" :src="product.src">
                            </router-link>
                        </div>
                        <div class="order-desc">
                            <router-link :to='`/product/${ product.id }`'>
                                <h4 class="order-title">{{ product.title }}</h4>
                            </router-link>
                            <div class="order-price">{{ product.price }} ₽</div>
                        </div>
                    </div>
                    <div class="order-item-controls">
                        <div class="order-number">
                            <div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <a href="#" class="btn btn-secondary" type="button" id="button-addon1" @click.prevent='minus(product.id)'>-</a>
                                </div>
                                <input disabled="" type="text" class="form-control order-number-input" :value="product.count">
                                <div class="input-group-append">
                                    <a href="#" class="btn btn-secondary" type="button" id="button-addon2" @click.prevent='plus(product.id)'>+</a>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="order-delete">
                            <img width="18" src="/assets/img/icons/delete.svg" alt="Удалить" @click.prevent='remove(product.id)'>
                        </a>
                    </div>
                </div>
            </template>

            <p>
                <strong>Всего:</strong> {{ totalCount }} товара/товаров
                <br>
                <strong>На сумму:</strong> {{ totalPrice }} руб.
            </p>

            <form action="success.html">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Имя и Фамилия">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Телефон">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Адрес">
                </div>
                <div class="d-flex justify-content-between">
                    <div class="form-group">
                        <router-link :to='`/success`'>
                            <button type="submit" class="btn btn-primary" >Оформить заказ</button>
                       </router-link>
             <!--             <button type="submit" class="btn btn-primary" @click.prevent="success('/success')">Оформить заказ</button> -->
                    </div>
                    <div class="form-group">
                        <a href="http://estore-new/actions/cart-reset.php" class="btn btn-light" @click.prevent="$store.dispatch('cart/clear')">Очистить корзину</a>
                    </div>
                </div>

            </form>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        // products () {
        //  return this.$store.getters['cart/order']
        // },
        // totalCount () {
        //  return this.$store.getters['cart/totalCount']
        // },
        // totalPrice () {
        //  return this.$store.getters['cart/totalPrice']
        // }
        ...mapGetters({
            products: 'cart/order',
            totalCount: 'cart/totalCount',
            totalPrice: 'cart/totalPrice',

        })
    },
    methods: {
        plus (id) {
            this.$store.dispatch('cart/plus', id)
        },
        minus (id) {
            this.$store.dispatch('cart/minus', id)
        },
        remove (id) {
            this.$store.dispatch('cart/remove', id)
        },
        success (id) {
            console.log( this.$store.dispatch('/success', id))
            // this.$store.dispatch('/success', id)
        }
    }
}
</script>