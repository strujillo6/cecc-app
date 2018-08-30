<template>
  <v-menu
    bottom
    left
    class="mx-2"
  >
        <v-avatar
          size="36px"
          slot="activator"

        >
          <img :src="user.imagePerfil" :alt="user.name">
        </v-avatar>

      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="user.imagePerfil" :alt="user.name">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{user.name}}</v-list-tile-title>
              <v-list-tile-sub-title> {{user.lastName}} </v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                icon
              >
                <v-icon>edit</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-tile >
            <v-list-tile-title>Configuración</v-list-tile-title>
            <v-spacer></v-spacer>
            <v-icon >settings</v-icon>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-title>Ayuda</v-list-tile-title>
            <v-spacer></v-spacer>
            <v-icon >help</v-icon>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed:
  {
    ...mapState({
      user: state => state.user.user,
    })
  }
}
</script>
