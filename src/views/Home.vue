<template>
	<div class="home">
		<v-container>
			<sidebar></sidebar>
			<div id="content__data">
				<h1 class="text-center mb-5">Selamat datang di toko buah kami</h1>
				<v-row>
					<v-col md="3" v-for="(data,index) in produks" :key="index">
						<card :produk = data :id= index :status=false></card>
					</v-col>
				</v-row>
			</div>
		</v-container>
	</div>
</template>

<style type="text/css" scoped>
#content__data{
	margin-left: 250px;
}
</style>

<script>
// @ is an alias to /src
import card from '@/components/card.vue'
import sidebar from '@/components/sidebar.vue'

export default {
	name: 'Home',
	components: {
		card,
		sidebar
	},
	data: () => ({
		produks: [
		{
			nama : 'mangga',
			harga : 12000,
			stok : 5,
			img : "https://media.suara.com/pictures/970x544/2018/03/29/27896-buah-mangga.jpg"
		},
		{
			nama : 'apel',
			harga : 11000,
			stok : 5,
			img : "https://d1bpj0tv6vfxyp.cloudfront.net/khasiatbuahapelyangcocokuntuk6penyakitinihalodoc.jpg"
		},
		{
			nama : 'jeruk',
			harga : 10000,
			stok : 5,
			img : "https://storage.trubus.id/storage/app/public/posts/t20200328/big_715b2b17c079fe1dae014cbd9b4ee36577426d91.jpg"
		},
		{
			nama : 'salak',
			harga : 9000,
			stok : 5,
			img : "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/27/118841467/118841467_7c1fd903-1800-48fe-b335-4dc2a9c69417_984_984.jpg"
		},
		{
			nama : 'Manggis',
			harga : 7000,
			stok : 5,
			img : "https://cdn-brilio-net.akamaized.net/news/2019/02/19/159661/993983-1000xauto-manfaat-manggis-buah.jpg"
		},
		{
			nama : 'Melon',
			harga : 15000,
			stok : 5,
			img : "https://i2.wp.com/satujam.com/wp-content/uploads/2016/04/nongphat.com_.jpg?fit=900%2C884&ssl=1"
		},
		{
			nama : 'Nanas',
			harga : 9000,
			stok : 5,
			img : "https://www.halloriau.com/foto_berita/54nenss.jpg"
		},
		{
			nama : 'kelengkeng',
			harga : 5000,
			stok : 5,
			img : "https://higaragro.com/wp-content/uploads/2019/04/Pusat-Distributor-Grosir-Eceran-Jual-Bibit-Tanaman-Buah-Kelengkeng-Itoh-Murah-online-di-kota-kabupaten.4.jpg"
		},
		],
		cart : [],
	}),
	created:function () {
		this.cart = JSON.parse(localStorage.getItem('lists')) || []

		if(this.cart.length > 0){
			console.log('ada')
			for (var k = 0; k < this.produks.length; k++) {
				for (var i = 0; i < this.cart.length; i++) {
					if (this.cart[i]['index'] == k) {
						this.produks[k]['stok'] = this.cart[i]['produks']['stok']
					}
				}
			}
		}

	}

}
</script>

