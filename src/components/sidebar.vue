<template>
  <v-navigation-drawer
  v-model="drawer"
  :color="color"
  :expand-on-hover="expandOnHover"
  :mini-variant="miniVariant"
  :right="right"
  :permanent="permanent"
  :src="bg"
  absolute
  dark
  >
  <v-list
  dense
  nav
  class="py-0"
  >
  <v-list-item two-line :class="miniVariant && 'px-0'">
    <v-list-item-avatar>
      <img src="https://randomuser.me/api/portraits/men/81.jpg">
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>Jhone Dow</v-list-item-title>
      <v-list-item-subtitle>New Customers</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>

  <v-divider></v-divider>

  <v-list-item
  v-for="item in items"
  :key="item.title"
  :href = item.link
  >
  <v-list-item-icon>
    <v-icon>{{ item.icon }}</v-icon>
  </v-list-item-icon>

  <v-list-item-content>
    <v-list-item-title>{{ item.title }}</v-list-item-title>
  </v-list-item-content>
</v-list-item>
</v-list>
</v-navigation-drawer>
</template>

<script>
  export default {
    name: 'sidebar',
    data () {
      return {
        drawer: true,
        items: [
        { title: 'Home', icon: 'mdi-view-dashboard', link: '/' },
        { title: 'Cart', icon: 'mdi-cart', link:'/cart/produk' },
        // { title: 'Logout', icon: 'mdi-logout', link:'/' },
        ],
        color: 'primary',
        colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal',
        ],
        right: false,
        permanent: true,
        miniVariant: false,
        expandOnHover: false,
        background: false,
      }
    },
    computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },
  }
</script>

