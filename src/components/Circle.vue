<template>
    <div class="circle" :style="circleStyle">
    </div>
</template>

<script>

export default {
    name: 'Circle',
    props: ['backgroundColor', 'taille', 'top', 'left'],
    created() {
        console.log(this.backgroundColor);
    },
    computed: {
        circleStyle() {
            return `width: ${this.taille}; height: ${this.taille};
            top: ${this.top};
            left: ${this.left};
            position: absolute;
            border-radius: 50%; 
            background-color: ${this.backgroundColor};`;
        }
    }
}
</script>

<style>

</style>