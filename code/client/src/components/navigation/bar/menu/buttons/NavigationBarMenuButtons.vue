<template>
	<NavigationBarMenuButtonsButton
		v-for="(item, index) in componentProperties.leftMenuItems"
		v-model="componentProperties.leftMenuItems[index]"
		:key="`menu-item-buttons-left-${index}`"
		:variant="componentProperties.variant"
	/>
	<VSpacer />
	<Configurations />

	<NavigationBarMenuButtonsButton
		v-for="(item, index) in componentProperties.rightMenuItems"
		v-model="componentProperties.rightMenuItems[index]"
		:key="`menu-item-buttons-left-${index}`"
		:variant="componentProperties.variant"
	/>
</template>
<script setup lang="ts">
import { IMenu } from '@/types/menu/item';
import { PositionEnum } from '@/enums/position';
import type { ButtonVariant } from '@/types/vuetify';

export interface IMenuButtonComponentProperties {
	leftMenuItems: IMenu[];
	rightMenuItems: IMenu[];
	variant?: ButtonVariant;
	localePosition?: PositionEnum;
}
const componentProperties = withDefaults(defineProps<IMenuButtonComponentProperties>(), {
	leftMenuItems: () => [],
	rightMenuItems: () => [],
	variant: 'plain',
});
</script>
