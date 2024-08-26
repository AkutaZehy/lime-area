<template>
	<div :class="['sidebar', { 'home-sidebar': isHome, 'mobile-sidebar': isMobile }]">
		<nav>
			<ul>
				<li v-if="isHome">
					<Home />
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
		},
		isMobile: {
			type: Boolean,
			default: false
		}
	});
</script>

<style scoped>
	.sidebar {
	}

	.home-sidebar {
		/* 当 isHome 为 true 时的特殊样式 */
	}

	nav ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-direction: column;
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

	/* 移动设备样式 */
	@media (max-width: 768px) {
		.mobile-sidebar {
			max-height: fit-content;
			overflow-y: auto;
		}

		nav ul {
			flex-direction: row;
			/* 横向排列 */
			flex-wrap: wrap;
			/* 自动换行 */
		}

		nav ul li {
			flex: 1 1 33%;
			/* 每个块占据 1/3 宽度 */
			margin: 5px;
			/* 调整间距 */
		}

		nav ul li a {
			display: block;
			text-align: center;
			padding: 10px;
			background-color: #333;
			border-radius: 5px;
		}
	}
</style>
