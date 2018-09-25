<template>
  <div class="login__container">
    <div class="form__container">
      <cecc-form-login/>
    </div>
  </div>
</template>
<script>
import Cform from '~/components/forms/login'
export default {
    layout: 'login',
    components: {
      'cecc-form-login': Cform
    },
    fetch ({ store }) {
      return store.dispatch('user/getUser')
    }
}
</script>
<style>
.login__container{
  position: absolute;
  overflow-y: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form__container{
  min-width: 300px;
  max-width: 364px;
  width: auto;
  margin: 1em;
  overflow: hidden;
}
</style>
