<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo">
                <v-toolbar-title>Registration form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-text-field 
                    prepend-icon="person" 
                    name="email" 
                    label="Email" 
                    type="email"
                    v-model="email"
                    color="indigo darken-4"
                    :rules="emailRules"
                    required>
                  </v-text-field>
                  <v-text-field 
                    id="password"
                    color="indigo darken-4"
                    prepend-icon="lock" 
                    name="password" 
                    label="Password" 
                    type="password"
                    :rules="passwordRules"
                    v-model="password"
                    required>
                  </v-text-field>                  
                  <v-text-field 
                    id="confirmPassword"
                    color="indigo darken-4"
                    prepend-icon="lock" 
                    name="confirmPassword" 
                    label="Confirm password" 
                    type="password"
                    :rules="confirmPasswordRules"
                    v-model="confirmPassword"
                    required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="indigo"
                  @click="onSubmit"
                  :disabled="!valid || loading"
                  :loading="loading"
                  class="white--text"
                >
                  Create account
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^([\w+\-;:]+\.)*[\w+\-;:]+@([\w+\\-]+\.)+[A-Za-z]+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length > 5 || 'Password must be more than 5 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Password is required',
        v => v === this.password || 'Passwords should match'
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
    }
  }
}
</script>

