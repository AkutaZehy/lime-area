<script setup lang="ts">
	//Note: This component is actually decprecated and not used in the project.

	import { onMounted } from 'vue';
	import { loadCounterScript } from '../../scripts/loadCounterScript';

	onMounted(() => {
		loadCounterScript();
	});
</script>

<template>
	<div ref="counterContainer"></div>
</template>
