<template>
	<VBtn
		:color="componentProperties.color"
		:elevation="componentProperties.elevation"
		:href="componentProperties.href"
		:to="componentProperties.to"
		@click="emits(Events.onClick)"
		:target="openInNewTab ? '_blank' : '_self'"
	>
		<slot />
	</VBtn>
</template>
<script setup lang="ts">
import { Events } from '@enums/events';
import { RouteLocationRaw } from 'vue-router';
export interface IFooterButtonComponentProperties {
	color?: string;
	elevation?: number | string;
	href?: string;
	to?: RouteLocationRaw;
	openInNewTab?: boolean;
}
export interface IFooterButtonComponentEvents {
	(e: Events.onClick): void;
}
const componentProperties = withDefaults(defineProps<IFooterButtonComponentProperties>(), {
	color: 'transparent',
	elevation: 0,
	openInNewTab: true,
});
const emits = defineEmits<IFooterButtonComponentEvents>();
const openInNewTab = computed(
	() => componentProperties.openInNewTab && (componentProperties.href || componentProperties.to),
);
</script>
