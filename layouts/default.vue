<template>
	<div id="app">
		<Header :title="headerTitle" v-if="headerTitle && !isMobile" />
		<div class="main-container" v-if="!isMobile">
			<div class="content">
				<NuxtPage />
			</div>
			<div class="sidebar">
				<p>NAVIGATE</p>
				<Sidebar :isHome="!isHome" />
			</div>
		</div>
		<div class="mobile-container" v-else>
			<Sidebar :isHome="!isHome" />
			<Header :title="headerTitle" v-if="headerTitle" />
			<NuxtPage />
		</div>
		<Footer />
	</div>
</template>

<script setup>
	import { useRoute } from 'vue-router';
	import { ref, watch, onMounted, onUnmounted } from 'vue';
	import Header from '~/components/Header.vue';
	import Sidebar from '~/components/SideBar.vue';

	const route = useRoute();
	const headerTitle = ref('');
	const isHome = ref(false);
	const isMobile = ref(false);

	// 监听路由变化，动态设置标题和 isHome 参数
	watch(
		() => route.meta.title,
		(newTitle) => {
			headerTitle.value = newTitle || '';
			isHome.value = route.path === '/';
		},
		{ immediate: true }
	);

	// 检查页面宽度
	const checkMobile = () => {
		isMobile.value = window.matchMedia('(max-width: 768px)').matches;
	};

	onMounted(() => {
		checkMobile();
		window.addEventListener('resize', checkMobile);
	});

	onUnmounted(() => {
		window.removeEventListener('resize', checkMobile);
	});
</script>

<style scoped>
	@import "/assets/css/burichan.scss";

	@font-face {
		font-family: 'Navigate';
		src: url('@/public/fonts/HigashiOme-Gothic-1.3i.ttf') format('truetype');
	}

	#app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main-container {
		display: flex;
		/* 使用 Flexbox 布局 */
	}

	.content {
		width: 550px;
		/* 固定宽度 */
		padding: 20px;
	}

	.sidebar {
		flex: 1;
	}

	.sidebar p {
		color: darkblue;
		font-size: 1.5em;
		text-align: center;
		font-family: 'Navigate', sans-serif;
		font-weight: bold;
	}

	/* 手机样式 */
	.mobile-container {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	@media (max-width: 768px) {
		.main-container {
			display: none;
		}
	}
</style>
