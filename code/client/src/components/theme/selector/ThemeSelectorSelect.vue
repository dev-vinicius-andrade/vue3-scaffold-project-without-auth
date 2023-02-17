<template>
	<!-- <VSelect
		v-model="localeStore.data.currentTheme"

		:label="getText({ key: 'variations.theme.Text' })"
	>
		<template v-slot:item="{ item }">
			{{ getText(item.text) }}
		</template>
		<template v-slot:selection="{ item }"> {{ getText(item.text) }}1 </template>
	</VSelect> -->
</template>
<script setup lang="ts">
const localeStore = useThemeStore();
</script>
