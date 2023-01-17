<template>
  <div class="overlay">
    <v-progress-circular
        :size="size"
        :color="color"
        indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: Number,
      default: 50
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.60);
}
</style>
