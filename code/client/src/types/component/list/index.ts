import { IListItem } from '@/types/component/list/item';
import { VList } from 'vuetify/lib/components/VList/index';
import { IPropertiesBinder } from '@/types/component/binder';
export interface IList<T> extends IPropertiesBinder<typeof VList> {
	items?: IListItem<T>[] | IListItem<any>[];
}
