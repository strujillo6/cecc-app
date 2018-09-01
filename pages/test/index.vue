<template>
  <section>
    {{user.name}}
    {{user.lastName}}
    <v-btn @click="getUser">Get User</v-btn>
  </section>
</template>
<script>
import { mapState,  mapMutations  } from 'vuex'
export default {
  computed:
  {
    ...mapState({
      user: state => state.user.user,
      
    })
  }
}
</script>
