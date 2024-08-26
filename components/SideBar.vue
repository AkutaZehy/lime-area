<template>
	<div :class="['sidebar', { 'home-sidebar': isHome }]">
		<nav>
			<ul>
				<li v-if="isHome">
					<Home/>
				</li>
				<li>
					<NuxtLink to="/about">About Me</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/friends">Friends</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup>
	const props = defineProps({
		isHome: {
			type: Boolean,
			default: false
		}
	});
</script>

<style scoped>
	.sidebar {
		min-height: 300px;
	}

	.home-sidebar {
		/* 当 isHome 为 true 时的特殊样式 */
	}

	nav ul {
		list-style-type: none;
		padding: 0;
	}

	nav ul li {
		margin: 10px 0;
	}

	nav ul li a {
		text-decoration: none;
		color: whitesmoke;
	}

	nav ul li a:hover {
		color: #007bff;
	}
</style>
