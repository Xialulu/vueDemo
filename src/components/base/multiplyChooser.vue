<template>
  <div>
    <div class="chooser-component">
      <ul>
        <li v-for="(item,index) in selections" @click="toggleSelection(index)"
         :class="{'active':checkActive(index)}">
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
      default: {
        label: "test",
        value: 0
      }
    }
  },
  data() {
    return {
      nowIndex: [0]
    };
  },
  methods: {
    toggleSelection(index) {
      if (this.nowIndex.indexOf(index) === -1) {
        this.nowIndex.push(index);
      } else {
        console.log(
          "this.nowIndex.indexOf(index)",
          this.nowIndex.indexOf(index)
        );
        this.nowIndex.splice(this.nowIndex.indexOf(index), 1);
      }
      let nowIndexObj = this.nowIndex.map(data => {
        return this.selections[data];
      });
      console.log("nowIndexObj", nowIndexObj);
      this.$emit("on-change", nowIndexObj);
    },
    checkActive(index) {
      return this.nowIndex.indexOf(index) !== -1;
    }
  }
};
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-component li {
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}

.chooser-component li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
