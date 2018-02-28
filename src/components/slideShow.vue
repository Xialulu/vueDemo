<template>
  <div>
    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
        <div class="slide-img">
          <transition name="slide-trans">
             <a :href="slides[nowIndex].href" v-if="isShow">
              <img :src="slides[nowIndex].src">
             </a>
          </transition>
         <transition name="slide-trans-old">
             <a :href="slides[nowIndex].href" v-if="!isShow">
              <img :src="slides[nowIndex].src">
             </a>
          </transition>
        <div>
          <h2 >
            {{ slides[nowIndex].title}}
          </h2>
            <ul class="slide-pages">
              <li @click="goto(preIndex)">
                &lt;
              </li>
              <li  v-for="(item,index) in slides" @click="goto(index)">{{index +1}}</li>
              </li>
               <li  @click="goto(nextIndex)">&gt;</li>
            </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 2000
    }
  },
  computed: {
    preIndex() {
      if (this.nowIndex === 0) {
        return this.slides.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  data() {
    return {
      isShow: true,
      nowIndex: 0
    };
  },
  methods: {
    goto(index) {
      this.isShow = false;
      this.nowIndex = index;
      setTimeout(()=>{
        this.isShow =true;
        this.nowIndex = index;
      },10);
    },
    runInv() {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.inv);
    },
    clearInv() {
      clearInterval(this.invId);
    }
  },
  mounted() {
    this.runInv();
  }
};
</script>

<style scoped>
.slide-show {
  position: relative;
  width: 900px;
  height: 400px;
  overflow: hidden;
  margin: 15px 15px 15px 0;
}

.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: 0.5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
  line-height: 30px;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}

.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: rgb(214, 206, 206);
}

.slide-trans-enter-active {
  transition: all 0.5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.lide-trans-old-leave-active {
  transform: all 0.5s;
  transform: translateX(-900px);
}
</style>
