<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="mb-2">My ads</h1>
        <v-card
          class="elevation-12 mb-3"
          v-for="ad in myAds"
          :key="ad.id">
          <v-layout row>
            <v-flex xs4>
              <v-img
                :src="ad.imageSrc"
                height="160px">
              </v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2>{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  outline
                  :to="'/ad/' + ad.id"
                  color="indigo">
                  Open
                </v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    }
  }
}
</script>

