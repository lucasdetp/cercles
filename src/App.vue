<template>
  <div v-for="(circle, index) in circles">
    <Circle :taille="circle.taille" :top="circle.top" :left="circle.left" :backgroundColor="circle.backgroundColor" />
  </div>
</template>


<script>
import Circle from './components/Circle.vue'

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  name: 'App',
  components: {
    Circle,
  },
  data() {
    return {
      circles: []
    }
  },
  methods: {
    startTimer() {
      const that = this;
      const newCircleGenerator = () => {
        const t = rnd(50, 300);
        const newCircleData = {
          backgroundColor: `rgb(${rnd(0, 255)}, ${rnd(0, 255)}, ${rnd(0, 255)})`,
          taille: t + "px",
          top: rnd(0, window.innerHeight - t) + "px",
          left: rnd(0, window.innerWidth - t) + "px",
        };

        that.circles.push(newCircleData);
        setTimeout(() => {
          that.circles.shift();
          newCircleGenerator();
        }, rnd(1000, 3000));   

      };

      for (let i = 0; i < rnd(15, 50); ++i) {
        newCircleGenerator();
      }

    },
  },
  mounted() {
    this.startTimer();
  },

}
</script>

<style>
* {
  background-color: black;
}
</style>
