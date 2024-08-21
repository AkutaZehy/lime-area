<script setup>
	const currentYear = new Date().getFullYear();
	const yearsSince2018 = Math.ceil((currentYear - 2018));
</script>

<template>
	<footer>
		<p color="grey">Still Under Development.</p>
		<p>
			©2018-{{ currentYear }}, Akuta Zehy，Some Rights Reserved <br />
			so 2018 is {{ yearsSince2018 }} years ago bruh
		</p>
	</footer>
</template>