<script setup>
	import { onMounted } from 'vue';
	import Footer from '~/components/Footer.vue';
	import CounterScript from '~/components/CounterScript.vue';

	function welcome () {
		let num = Math.random();
		num > 0.99
			? window.alert("今日もいい天気！")
			: num > 0.95 && window.alert("休憩中よ。");
	}

	onMounted(() => {
		welcome();
	});

</script>

<template>
	<title>Akuta's Dessert Store</title>

	<header>
		<p class="hg1" style="color: whitesmoke; size: 8cap;">Welcome to Akuta's Dessert Store</p>
	</header>

	<div style="text-align: center">
		<p>
			Hi, this is Akuta Zehy. <br />
			This is my personal space on the Internet. <br />
			Feel free to look around!
		</p>
	</div>

	<div>
		F*ck Nuxt. <br />
		but powered by Nuxt 3.
	</div>

	<Footer />
</template>

<style lang="css">
	@import "/assests/css/burichan.css"
</style>
