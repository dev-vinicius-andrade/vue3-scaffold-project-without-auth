import { Nullable } from '@/types/nullable';
import { ILocaleText } from '@/types/locale/text';
import { VListItem } from 'vuetify/lib/components/VList/index';
import { IPropertiesEmitsBinder } from '@/types/component/binder';
export interface IListItem<T> extends IPropertiesEmitsBinder<typeof VListItem> {
	id: string;
	title?: ILocaleText;
	value?: T | Nullable<T> | any;
}
