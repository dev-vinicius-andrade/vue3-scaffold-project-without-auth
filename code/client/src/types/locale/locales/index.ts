import { IVariation } from '@locales/types';
export interface ILocaleLocales {
	locales: {
		[key: string]: string | IVariation;
	};
}
