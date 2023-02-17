<template>
	<ButtonDropdown
		v-model="localeStore.data.currentLocale"
		:button="componentData.button"
		:activator-prepend-icon="{ properties: { icon: 'mdi-translate' } }"
		:list="{ items: availableLocales }"
	>
		<template v-slot:activator-text="{ text, textRaw }">
			<VIcon>{{ componentProperties.icon.properties?.icon }}</VIcon>
		</template>
	</ButtonDropdown>
</template>
<script setup lang="ts">
import { ILocale } from '@/types/locale';
import { IIcon } from '@/types/component/icon';
import { IButton } from '@/types/component/button';
import { ILocaleText } from '@/types/locale/text';
import { IListItem } from '@/types/component/list/item';
export interface ILocaleSelectorComponentProperties {
	label?: ILocaleText;
	icon?: IIcon;
	button?: IButton;
}
export interface ILocaleSelectorComponentData {
	label?: ILocaleText;
	icon?: IIcon;
	button?: IButton;
}
const localeStore = useLocaleStore();
const availableLocales = computed(() =>
	localeStore.data.availableLocales.map(locale => {
		return {
			title: locale.text,
			value: locale,
		} as IListItem<ILocale>;
	}),
);
const componentProperties = withDefaults(defineProps<ILocaleSelectorComponentProperties>(), {
	icon: () => ({ properties: { icon: 'mdi-translate' } }),
	button: () => ({
		properties: {
			elevation: '0',
		},
	}),
});
const defaultButtonValues: IButton = {
	text: componentProperties.label,
	properties: {
		elevation: '0',
		icon: componentProperties.icon.properties?.icon,
	},
};
const componentData = reactive<ILocaleSelectorComponentData>({
	label: componentProperties.label,
	icon: componentProperties.icon,
	button: mergeButton(),
});
console.log(componentData);

function mergeButton(): IButton {
	const mergedButton = {
		...defaultButtonValues,
		...componentProperties.button,
	};
	mergedButton.properties = {
		...defaultButtonValues.properties,
		...componentProperties.button.properties,
	};
	return mergedButton;
}
</script>
