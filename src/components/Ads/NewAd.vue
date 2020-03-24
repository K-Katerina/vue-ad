<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="mb-2">Create new ad</h1>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            box
            name="title" 
            label="Ad title" 
            type="text"
            color="indigo darken-4"
            v-model="title"
            required
            :rules="[v => !!v || 'Title is required']">
          </v-text-field>
          <v-textarea
            box
            id="description"
            color="indigo darken-4"
            name="description" 
            label="Ad description"
            multi-line="true"
            type="text"
            counter="200"
            v-model="description"
            required
            :rules="[v => !!v || 'Description is required']">
          </v-textarea>
        </v-form>
        <v-layout>
          <v-flex xs12>
            <img height="150">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-btn
              outline
              color="indigo"
              class="ml-0"
            >
              Upload image
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-switch
              label="Add to promo"
              color="indigo"
              v-model="promo"
              hide-details
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout>
            <v-spacer></v-spacer>
            <v-btn
              color="indigo"
              @click="createAd"
              :disabled="!valid"
              class="white--text mr-0"
            >
              Create ad
            </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      description: '',
      title: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          description: this.description,
          title: this.title,
          promo: this.promo,
          imageSrc: 'https://image.myplayroom.ru/images/products/1/2285/177891565/%D0%A2%D0%B5%D0%BB%D0%B5%D0%B6%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BE%D0%BA.jpg'
        }
        this.$store.dispatch('createAd', ad)
      }
    }
  }
}
</script>

