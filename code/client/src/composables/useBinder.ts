import { IList } from '@/types/component/list';
import { IMenu } from '@/types/component/menu';
import { IIcon } from '@/types/component/icon';
import { IButton } from '@/types/component/button';
import { IListItem } from '@/types/component/list/item';

export function useBinder() {
	return {
		useMenuBinder,
		useListItemBinder,
		useListBinder,
		useButtonBinder,
	};
}

export function useMenuBinder(item: IMenu): any {
	return { ...item.properties };
}
export function useListItemBinder(item: IListItem<any>) {
	return { ...item.properties, emits: item.emits };
}
export function useListBinder(item: IList<any>) {
	return { props: item.properties };
}
export function useButtonBinder(item: IButton, options?: any) {
	return { ...item.properties, ...options };
}
export function useIconBinder(item: IIcon, options?: any) {
	return { ...item.properties, ...options };
}
