<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img
            :src="ad.imageSrc"
            height="300px">
          </v-img>
          <v-card-text>
            <h2>{{ ad.title }}</h2>
            <p>{{ ad.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              outline
              color="indigo">
              Edit
            </v-btn>
            <v-btn
              color="indigo"
              class="white--text"
            >
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      return this.$store.getters.adByID(this.id)
    }
  }
}
</script>

