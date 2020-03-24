<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="mb-2">Orders</h1>
        <v-list
          subheader
          two-line
        >
          <v-list-tile
            v-for="order in orders"
            :key="order.id">
            <v-list-tile-action>
              <v-checkbox
                color="indigo darken-4"
                @change="markDone(order)"
                :input-value="order.done">
              </v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                outline
                color="indigo"
                :to="'/ad/' + order.adId">
                Open
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: '12345',
          name: 'KK',
          phone: '8953000000',
          adId: '1',
          done: false
        },
        {
          id: '123456',
          name: 'KK',
          phone: '8953000000',
          adId: '1',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>

