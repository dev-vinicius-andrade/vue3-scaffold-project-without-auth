<template>
	<div>
		<ThemeSelectorSelect
			v-if="variant === ThemeSelectorVariantEnum.Select"
			:show-icon="componentProperties.showIcon"
		/>
		<ThemeSelectorSwitch
			v-if="variant === ThemeSelectorVariantEnum.Switch"
			:show-icon="componentProperties.showIcon"
		/>
	</div>
</template>
<script setup lang="ts">
import { ThemeSelectorVariantEnum } from '@components/theme/selector/types';
export interface IThemeSelectorComponentProperties {
	variant?: ThemeSelectorVariantEnum;
	showIcon?: boolean;
}
const componentProperties = withDefaults(defineProps<IThemeSelectorComponentProperties>(), {
	variant: ThemeSelectorVariantEnum.Switch,
	showIcon: true,
});
</script>
