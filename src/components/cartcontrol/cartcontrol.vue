<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <transition name="inner">
          <span class="inner icon-remove_circle_outline"></span>
        </transition>
      </div>
    </transition>

    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>


</template>

<script tpye="text/ecmascript-6">

  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },

    methods: {
      addCart(event) {
        if (!event._constructed) {
          return;
        }else if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        }else {
          //console.log('asdf');
          this.food.count++;
        }
        //this.$dispatch('card.add', event.target); //$dispatch不是这个版本的
        // 子组件通过 $emit触发父组件的方法 increment
        this.$emit('increment', event.target);
        //console.log('asdf-this.$emit');
        //console.log(event.target);

      },

      decreaseCart(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }


    },


  };

</script>

<style lang="stylus" rel="stylesheet/stylus">

  .cartcontrol
    font-size: 0
    .cart-decrease
      padding: 6px
      display: inline-block

      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      &.move-enter, &.move-leave-active
        opacity: 0
        transform translate3d(24px, 0, 0)
      .inner
        display inline-block
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220, 0.2)
        &.inner-enter-active, &.inner-leave-active
          transition: all 0.4s linear
          transform: rotate(0)
        &.inner-enter, &.inner-leave-active
          opacity: 0
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      font-size: 14px
      width: 12px
      vertical-align: top
      padding-top: 12px
      text-align: center
    .cart-add
      display: inline-block
      color: rgb(0, 160, 220)
      font-size: 24px
      padding: 6px



</style>
