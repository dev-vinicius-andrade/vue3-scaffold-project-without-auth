import { ComputedRef } from 'vue';
import { getText } from '@/helpers';
import { IMenu } from '@/types/menu/item';
function getMenuItems(): { menuItems: ComputedRef<IMenu[]> } {
	const menuItems = computed<IMenu[]>(() => [
		{
			title: getText({ key: 'menu.home' }),
			appendIcon: 'mdi-home',
			to: { name: '/' },
		},
		{
			title: getText({ key: 'menu.about' }),
			appendIcon: 'mdi-information',
			to: { name: '/about' },
		},
		{
			title: getText({ key: 'menu.contact' }),
			appendIcon: 'mdi-phone',
			to: { name: '/contact' },
		},
	]);
	return { menuItems };
}

export function useMenuItemsWithIcons(): MenuItemsWithIcons {
	const menuItemsWithIcons = getMenuItems().menuItems;
	return { menuItemsWithIcons };
}
export function useMenuItemsWithoutIcons(): MenuItemsWithoutIcons {
	const { menuItems } = getMenuItems();
	const menuItemsWithoutIcons = computed(() =>
		menuItems.value.map(item => {
			const { prependIcon, appendIcon, ...itemWithoutIcons } = item;
			return itemWithoutIcons;
		}),
	);
	return { menuItemsWithoutIcons };
}
export function useMenuItems(): MenuItems {
	const { menuItemsWithIcons } = useMenuItemsWithIcons();
	const { menuItemsWithoutIcons } = useMenuItemsWithoutIcons();
	return {
		menuItemsWithIcons,
		menuItemsWithoutIcons,
	};
}

export declare type MenuItemsWithIcons = { menuItemsWithIcons: ComputedRef<IMenu[]> };
export declare type MenuItemsWithoutIcons = { menuItemsWithoutIcons: ComputedRef<IMenu[]> };
export declare type MenuItems = MenuItemsWithIcons & MenuItemsWithoutIcons;
