<script setup lang="ts">
	import { defineProps } from 'vue';

	const props = defineProps({
		friendName: {
			type: String,
			required: true
		},
		friendNameShort: {
			type: String,
			required: true
		},
		url: {
			type: String,
			default: ''
		},
		favicon: {
			type: String,
			default: ''
		},
		comment: {
			type: String,
			default: ''
		}
	});
</script>

<template>
	<div class="friend-button">
		<a :href="url" class="favicon-container">
			<template v-if="favicon">
				<img :src="`/buttons/${favicon}`" alt="{{ friendNameShort }}" class="favicon" />
			</template>
			<template v-else>
				<div class="placeholder">{{ friendNameShort }}</div>
			</template>
		</a>
		<div class="separator"></div>
		<div class="name">{{ friendName }}</div>
		<div class="separator"></div>
		<div class="comment">{{ comment }}</div>
	</div>
</template>

<style scoped>
	.friend-button {
		display: flex;
		align-items: center;
		height: 50px;
		width: 100%;
	}

	.favicon-container {
		background-color: whitesmoke;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 88px;
		height: 31px;
		margin-right: 10px;
	}

	.favicon {
		width: 88px;
		height: 31px;
	}

	.placeholder {
		width: 88px;
		height: 31px;
		border: 2px dashed #ccc;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		color: #666;
	}

	.name {
		min-width: none;
		flex: 1;
		font-weight: bold;
		max-width: 200px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.separator {
		width: 1px;
		height: 100%;
		background-color: #ccc;
		margin-right: 10px;
	}

	.comment {
		flex: 1;
		padding-left: 10px;
	}
</style>
