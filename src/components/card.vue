<template>
  <v-card
  class="mx-auto"
  max-width="400"
  >
  <v-img
  class="white--text align-end image__object"
  height="200px"
  :src="produk.img"
  >
  <v-card-title>{{ produk.nama }}</v-card-title>
</v-img>

<v-card-subtitle class="pb-0">Detail Produk</v-card-subtitle>

<v-card-text v-if="status" class="text--primary">
  <div>Harga Awal: {{ produk.harga}}</div>
  <hr>
  <div>Jumlah Pembelian : {{ jml }}</div>
  <div>Total Harga : {{ produk.harga * jml }}</div>
</v-card-text>
<v-card-text v-else class="text--primary">
  <div>Harga : {{ produk.harga}}</div>

  <div>Stok : {{ produk.stok}}</div>
</v-card-text>

<v-card-actions  v-if="!status">
  <v-btn @click="tambahKeranjang(produk, 1, id)"
  color="orange"
  text
  >
  Tambah Keranjang
</v-btn>

</v-card-actions>
</v-card>
</template>

<style type="text/css" scoped>
.image__object{
  object-fit: cover;
}
</style>

<script>
  export default {
    name: 'card',
    props: {
      produk : [],
      id :  Number,
      status : String,
      jml: Number
    },
    data () {
      return {
        keranjang: [],
        jumlah : 0,
        cart : true
      }
    },
    methods:{
      tambahKeranjang(produk, jml, index){
        this.keranjang = JSON.parse(localStorage.getItem('lists')) || []

        if (this.keranjang.length>0) {

          for (var k = 0; k < this.keranjang.length; k++) {
            if(this.keranjang[k]['index'] == index){
              this.jumlah = this.keranjang[k]['jml']
              this.keranjang.splice(index,1)
            }
          }

        }

        this.keranjang.push({
          produks : produk,
          index : index,
          jml : this.jumlah + jml
        })

        this.produk.stok -= 1;

        localStorage.setItem('lists', JSON.stringify(this.keranjang))

        // console.log(this.keranjang[0].nama)
      }
    },
    created:function () {
    }
  }
</script>
