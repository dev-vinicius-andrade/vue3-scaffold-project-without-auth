import { IComponentExtendedEmits } from '@/types/component/emits';
import { ILocaleText } from '@/types/locale/text';
import { VListItem } from 'vuetify/lib/components/VList/index';
export interface IListItem extends IComponentExtendedEmits<typeof VListItem> {
	id: string;
	title?: ILocaleText;
}
