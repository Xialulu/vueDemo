<template>
  <div>
    <div class="chooser-component">
      <ul>
        <li v-for="(item,index) in selections" :class="{'active':index === nowIndex}" @click="chosenSelection(index)">
          {{item.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selections: {
      type: Array,
      default: [
        {
          label: "红色版",
          value: 0
        }
      ]
    }
  },
  data() {
    return {
      nowIndex: 0
    };
  },
  methods: {
    chosenSelection(index) {
      this.nowIndex = index;
      this.$emit("on-change", this.selections[this.nowIndex]);
    }
  }
};
</script>

<style scoped>
.chooser-component {
  display: inline;
  position: relative;
}

.chooser-component li {
  display: inline-block;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  border: 1px solid #e3e3e3;
  margin-right: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.chooser-component li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
