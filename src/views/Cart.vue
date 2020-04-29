<template>
	<div class="cart">
		<v-container>
			<sidebar></sidebar>
			<div id="content__data">
				<h1 class="text-center mb-5">Ini Barang Belanjaan anda</h1>
				<v-row>
					<v-col md="3" v-for="(data,index) in produks" :key="index">
						<card :produk = data.produks :id= index :jml = data.jml :status=true></card>
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
	name: 'Cart',
	components: {
		card,
		sidebar
	},
	data: () => ({
		produks: []
	}),
	created:function () {
		this.produks = JSON.parse(localStorage.getItem('lists')) || []
	}

}
</script>

