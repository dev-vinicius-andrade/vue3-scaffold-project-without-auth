import { IVariation } from '@locales/types';
export interface ILocaleThemes {
	themes: {
		[key: string]: string | IVariation;
	};
}
