import { IVariation } from '@locales/types';
export interface ILocaleMessages {
	variations: {
		[key: string]: IVariation;
	};
	buttons: {
		[key: string]: string;
	};
}
