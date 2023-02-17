<template>
	<SideDialog :title="{ key: 'variations.configuration.textPascalCased', multiple: true }" show-top-close-button>
		<template #activator="{ show }">
			<VBtn :variant="componentProperties.variant" @click.stop.prevent="show">
				<VIcon>mdi-cog</VIcon>
			</VBtn>
		</template>
		<VRow justify="center" align="center">
			<VCol
				><span>{{ getText({ key: 'variations.theme.textPascalCased' }) }}</span></VCol
			>
			<VSpacer />
			<VCol><ThemeSelector /></VCol>
		</VRow>
		<VRow justify="center" align="center">
			<VCol
				><span>{{ getText({ key: 'variations.locale.textPascalCased' }) }}</span></VCol
			>
			<VSpacer />
			<VCol><LocaleSelector :button="{ properties: { variant: componentProperties.variant } }" /></VCol>
		</VRow>
	</SideDialog>
</template>
<script setup lang="ts">
import type { ButtonVariant } from '@/types/vuetify';
export interface IConfigurationComponentProperties {
	variant?: ButtonVariant;
}
const componentProperties = withDefaults(defineProps<IConfigurationComponentProperties>(), {
	variant: 'plain',
});
</script>
