<template>
	<div class="d-inline-flex text-center text-justify">
		<ThemeIcon v-if="prependIcon" />
		<VSwitch v-model="reactiveModel" :label="label" />
		<ThemeIcon v-if="appendIcon" />
	</div>
</template>
<script setup lang="ts">
export interface IThemeSelectorSwitchComponentProperties {
	showIcon?: boolean;
	iconOnly?: boolean;
	prependIcon?: boolean;
	appendIcon?: boolean;
}
const componentProperties = withDefaults(defineProps<IThemeSelectorSwitchComponentProperties>(), {
	showIcon: true,
	iconOnly: true,
	prependIcon: false,
	appendIcon: true,
});
const vuetifyTheme = useTheme();
function toggleTheme() {
	vuetifyTheme.global.name.value = vuetifyTheme.global.current.value.dark ? 'light' : 'dark';
}
const localeStore = useThemeStore();
const label = computed(() => (componentProperties.iconOnly ? '' : getText({ key: 'variations.theme.Text' })));
const prependIcon = computed(
	() => componentProperties.showIcon && componentProperties.prependIcon && !componentProperties.appendIcon,
);
const appendIcon = computed(
	() => componentProperties.showIcon && componentProperties.appendIcon && !componentProperties.prependIcon,
);
const reactiveModel = computed({
	get: () => localeStore.data.currentTheme === ThemeEnum.Dark,
	set: (value: boolean) => {
		localeStore.data.currentTheme = value ? ThemeEnum.Dark : ThemeEnum.Light;
	},
});
</script>
