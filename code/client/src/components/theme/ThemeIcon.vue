<template>
	<IconifyLineMdMoonFilledAltLoop
		v-if="localeStore.data.currentTheme === ThemeEnum.Dark"
		:size="componentProperties.size"
		:class="componentProperties.class"
	/>
	<IconifyLineMdLightbulbFilled
		v-if="localeStore.data.currentTheme === ThemeEnum.Light"
		:size="componentProperties.size"
		:class="componentProperties.class"
	/>
</template>
<script setup lang="ts">
export interface IThemeIconComponentProperties {
	size?: string;
	class?: string;
}
const localeStore = useThemeStore();
const componentProperties = withDefaults(defineProps<IThemeIconComponentProperties>(), {
	size: '2.25rem',
	class: 'mt-4 ml-4',
});
</script>
