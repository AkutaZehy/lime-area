<script setup lang="ts">
import { comment } from 'postcss';
import FriendButton from '~/components/FriendButton.vue';

	definePageMeta({
		title: "Friends",
		isHome: false,
	});
</script>

<template>

	<div>
		<p>
			Here are some of my friends. <br />
			Feel free to check them out!
		</p>

		<br />

		<FriendButton
			:friendName="'Kapunium'"
			:friendNameShort="'kapu'"
			:url="'https://kapunium.neocities.org/'"
			:favicon="'kapu.gif'"
			:comment="'This is kapu.'"
		/>

		<FriendButton
			:friendName="'AliveMaster'"
			:friendNameShort="'alive'"
			:url="'https://alivemaster.neocities.org/'"
			:favicon="'alivemaster.png'"
			:comment="'This page is dead.'"
		/>

		<FriendButton
			:friendName="'桜ノ宮 アイラ'"
			:friendNameShort="'aira'"
			:url="'https://aira.cafe/'"
			:favicon="'aira.png'"
			:comment="'Kawaii Forever!'"
		/>

		<FriendButton
			:friendName="'lachrymaL'"
			:friendNameShort="'lach'"
			:url="'https://lachrymal.net/'"
			:comment="'Zero.'"
		/>

		<FriendButton
			:friendName="'megakite'"
			:friendNameShort="'kite'"
			:url="'https://megakite.icu/'"
			:favicon="'megakite.png'"
			:comment="'.\/icu'"
		/>

	</div>

</template>
