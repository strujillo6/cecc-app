<template>
  <label class="file-select">
    <div class="select-button">
      <v-icon v-if="movil">camera_alt</v-icon>
      <v-icon v-else>add_to_photos</v-icon>
      <span v-if="movil">Tomar foto</span>
      <span v-else>Cargar imagen</span>
    </div>
    <input accept="image/*" type="file" @change="handleFileChange" :multiple="multiple" :capture="capture"/>
  </label>
</template>

<script>
export default {
  props:{
    multiple:{
      type:Boolean,
      default: false
    },
    capture:{
      type:Boolean,
      default: false
    },
    movil:{
      type:Boolean,
      default: false
    }
  },
  methods: {
    handleFileChange(e) {
      this.$emit('input', e.target.files[0])
    }
  }
}
</script>

<style lang="scss" scoped>
.file-select > .select-button {
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, .54);
  cursor: pointer;
}
.select-button i{
  font-size: 4em;
}
.file-select > input[type="file"] {
  display: none;
}

</style>

