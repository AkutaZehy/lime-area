<template>
	<header :style="headerStyle">
		<p class="hg1" v-if="title" style="color: whitesmoke; size: 8cap;">{{ title }}</p>
	</header>
</template>

<script setup lang="ts">
	import { defineProps } from 'vue';

	const props = defineProps<{
		title: string;
	}>();

	const headerStyle = {
		padding: '20px',
		textAlign: 'center'
	};
</script>

<style scoped>
	header {
		border-bottom: 2px solid #ccc;
	}
</style>
