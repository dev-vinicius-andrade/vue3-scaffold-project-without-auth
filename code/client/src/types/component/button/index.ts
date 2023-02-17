import { ILocaleText } from '@/types/locale/text';
import { VBtn } from 'vuetify/lib/components/VBtn/index';
import { IPropertiesEmitsBinder } from '@/types/component/binder';
export interface IButton extends IPropertiesEmitsBinder<typeof VBtn> {
	text?: ILocaleText;
}
