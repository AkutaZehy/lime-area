<script setup>
	import { onMounted } from 'vue';

	function welcome () {
		let num = Math.random();
		num > 0.99
			? window.alert("今日もいい天気！")
			: num > 0.95 && window.alert("休憩中よ。");
	}

	definePageMeta({
		title: 'Akuta\'s Dessert Store',
		isHome: true,
	});

	onMounted(() => {
		welcome();
	});
</script>

<template>
	<title>Akuta's Dessert Store</title>

	<div style="text-align: center;">
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

</template>

<style lang="css">
	@import "/assets/css/burichan.scss";
	/* No CSS template is specified. */
</style>
