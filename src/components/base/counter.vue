<template>
  <div>
    <div class="count-component">
      <div class="counter-btn" @click="minus" >-</div>
      <input type="text" v-model="num" />
      <div class="counter-btn" @click="Add">+</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  watch: {
    num() {
      this.$emit("on-change", this.num);
    }
  },
  data() {
    return {
      num: 1
    };
  },
  methods: {
    Add() {
      this.num++;
    },
    minus() {
      if (this.num === 1) {
        this.num = 1;
      } else {
        this.num--;
      }
    }
  }
};
</script>

<style scoped>
.count-component {
  position: relative;
  display: inline-block;
}

.counter-btn {
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  border: 1px solid #e3e3e3;
  text-align: center;
  cursor: pointer;
}

.count-component input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  width: 30px;
  outline: none;
  text-align: center;
  display: block;
  float: left;
}
</style>
