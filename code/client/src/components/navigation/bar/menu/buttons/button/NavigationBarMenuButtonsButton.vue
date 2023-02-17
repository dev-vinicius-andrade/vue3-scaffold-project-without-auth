<template>
	<VBtn
		v-if="componentProperties.modelValue"
		:to="componentProperties.modelValue.to"
		:variant="componentProperties.variant"
	>
		<VIcon v-if="prependIcon"> {{ componentProperties.modelValue.prependIcon }} </VIcon>
		<span v-if="componentProperties.modelValue?.title">{{ componentProperties.modelValue.title }}</span>
		<VIcon v-if="appendIcon"> {{ componentProperties.modelValue.appendIcon }} </VIcon>
	</VBtn>
</template>
<script setup lang="ts">
import { IMenu } from '@/types/menu/item';
import type { ButtonVariant } from '@/types/vuetify';
export interface IMenuButtonComponentProperties {
	modelValue?: IMenu;
	variant?: ButtonVariant;
}
const componentProperties = withDefaults(defineProps<IMenuButtonComponentProperties>(), {});
const appendIcon = computed(
	() => componentProperties.modelValue?.appendIcon && !componentProperties.modelValue?.prependIcon,
);
const prependIcon = computed(
	() => componentProperties.modelValue?.prependIcon && !componentProperties.modelValue?.appendIcon,
);
</script>
