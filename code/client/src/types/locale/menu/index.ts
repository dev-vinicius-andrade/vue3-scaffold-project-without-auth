import { IVariation } from '@locales/types';
export interface ILocaleMenu {
	menu: {
		[key: string]: string | IVariation;
	};
}
