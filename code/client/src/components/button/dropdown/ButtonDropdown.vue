<template>
	<VMenu v-bind="useMenuBinder(componentProperties.menu)">
		<template v-slot:activator="{ props }">
			<slot :name="ButtonDropdownComponentSlotsNamesEnum.Activator" :props="props">
				<VBtn v-bind="useButtonBinder(componentProperties.button, props)">
					<slot
						:name="ButtonDropdownComponentSlotsNamesEnum.ActivatorButtonContent"
						:text="getText(componentProperties.button?.text)"
						:textRaw="componentProperties.button?.text"
					>
						<slot
							:name="ButtonDropdownComponentSlotsNamesEnum.ActivatorButtonTextPrependIcon"
							:icon="componentProperties.activatorPrependIcon?.properties?.icon"
							:props="componentProperties.activatorPrependIcon?.properties"
						>
							<VIcon
								v-if="componentProperties.activatorPrependIcon?.properties?.icon"
								:class="componentProperties.button?.text ? 'mr-2' : ''"
							>
								{{ componentProperties.activatorPrependIcon?.properties?.icon }}
							</VIcon>
						</slot>
						<slot
							:name="ButtonDropdownComponentSlotsNamesEnum.ActivatorButtonText"
							:text="getText(componentProperties.button?.text)"
							:textRaw="componentProperties.button?.text"
						>
							{{ getText(componentProperties.button?.text) }}
						</slot>
						<slot
							:name="ButtonDropdownComponentSlotsNamesEnum.ActivatorButtonTextAppendIcon"
							:icon="componentProperties.activatorAppendIcon?.properties?.icon"
							:props="componentProperties.activatorAppendIcon?.properties"
						>
							<VIcon
								v-if="componentProperties.activatorAppendIcon?.properties?.icon"
								:class="componentProperties.button?.text ? 'ml-2' : ''"
							>
								{{ componentProperties.activatorAppendIcon?.properties?.icon }}
							</VIcon>
						</slot>
					</slot>
				</VBtn>
			</slot>
		</template>
		<VList v-bind="useListBinder(componentProperties.list)">
			<slot>
				<VListItem
					v-for="(item, index) in availableItems"
					:key="index"
					:value="item"
					v-bind="useListItemBinder(item)"
					@click="onDropdownItemClick(item)"
				>
					<VListItemTitle v-if="item.title">{{ getText(item.title) }}</VListItemTitle>
				</VListItem>
			</slot>
		</VList>
	</VMenu>
</template>
<script setup lang="ts">
import { Events } from '@enums/events';
import { IMenu } from '@/types/component/menu';
import { IIcon } from '@/types/component/icon';
import { IList } from '@/types/component/list';
import { IListItem } from '@/types/component/list/item';
import { IButton } from '@/types/component/button';
import { ButtonDropdownComponentSlotsNamesEnum } from '@/components/button/dropdown/types';
export interface ButtonDropdownComponentProperties {
	activatorPrependIcon?: IIcon;
	activatorAppendIcon?: IIcon;
	menu?: IMenu;
	button?: IButton;
	list?: IList<any>;
	modelValue?: any;
}
export interface ButtonDropdownComponentEvents {
	(e: Events.onModelValueUpdate, value?: any): void;
}
const componentProperties = withDefaults(defineProps<ButtonDropdownComponentProperties>(), {
	button: () => ({
		properties: {
			color: 'transparent',
			size: 'small',
			elevation: 0,
		},
		text: { key: 'buttons.dropdown' },
	}),
	menu: () => ({
		properties: {
			maxWidth: '300px',
			closeOnContentClick: true,
		},
	}),
	list: () => ({
		items: [{ id: generateId(), title: { key: 'variations.item.Text' } }],
		properties: {
			minWidth: '200vw',
			maxWidth: 'auto',
		},
	}),
});
const emits = defineEmits<ButtonDropdownComponentEvents>();
const reactiveModel = useSynchronousModelValue(componentProperties, emits);
const availableItems = computed(() => componentProperties.list?.items ?? []);
const slots = useSlots();
const hasActivatorButtonTextPrependIcon = computed(
	() =>
		!!slots[ButtonDropdownComponentSlotsNamesEnum.ActivatorButtonTextPrependIcon] ||
		!!componentProperties?.activatorPrependIcon?.properties?.icon,
);
const hasActivatorButtonTextAppendIcon = computed(
	() =>
		!!slots[ButtonDropdownComponentSlotsNamesEnum.ActivatorButtonTextAppendIcon] ||
		!!componentProperties?.activatorAppendIcon?.properties?.icon,
);
function onDropdownItemClick(item: IListItem<any>) {
	reactiveModel.value = item.value;
}
</script>
