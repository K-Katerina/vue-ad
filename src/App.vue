<template>
  <v-app>
    <v-navigation-drawer 
      app
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-tile 
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >

          <v-list-tile-action>
            <v-icon color="indigo" left>{{link.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
        <v-list-tile
          @click="onLogout"
           v-if="isUserLoggedIn">

          <v-list-tile-action>
            <v-icon color="indigo" left>exit_to_app</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="#000027" dark  class="elevation-12">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">
          Ad application
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          flat>
          <v-icon color="white" left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn v-if="isUserLoggedIn"
          @click="onLogout"
          flat>
          <v-icon color="white" left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
        @input="closeError"
        color="error"
        :multi-line="true"
        :timeout="4000"
        :value ="true"
      >
        {{ error }}
        <v-btn
          flat
          @click.native="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          {title: 'Home', icon: 'home', url: '/'},
          {title: 'Orders', icon: 'storefront', url: '/orders'},
          {title: 'New ad', icon: 'add_circle_outline', url: '/new'},
          {title: 'My ads', icon: 'storage', url: '/list'}
        ]
      }
      return [
        {title: 'Login', icon: 'lock_open', url: '/login'},
        {title: 'Registration', icon: 'perm_identity', url: '/registration'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
