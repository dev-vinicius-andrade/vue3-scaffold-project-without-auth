import { IVariation } from '@locales/types';
import { ILocaleMessages } from '@/types/locale/messages';
export const messages: ILocaleMessages = {
	variations: {
		theme: {
			text: 'theme | themes',
			Text: 'Theme | Themes',
			textCammelCased: 'Theme | Themes',
			textPascalCased: 'Theme | Themes',
			count: 'no theme | theme | themes({count})',
			Count: 'No theme | Theme | Themes({count})',
			countCammelCased: 'No theme | Theme | Themes({count})',
			countPascalCased: 'No Theme | Theme | Themes({count})',
		} as IVariation,
		locale: {
			text: 'locale | locales',
			Text: 'Locale | Locales',
			textCammelCased: 'Locale | Locales',
			textPascalCased: 'Locale | Locales',
			count: 'no locale | locale | locales({count})',
			Count: 'No locale | Locale | Locales({count})',
			countCammelCased: 'No locale | Locale | Locales({count})',
			countPascalCased: 'No Locale | Locale | Locales({count})',
		} as IVariation,
		item: {
			text: 'item | items',
			Text: 'Item | Items',
			textCammelCased: 'Item | Items',
			textPascalCased: 'Item | Items',
			count: 'no item | item | items({count})',
			Count: 'No item | Item | Items({count})',
			countCammelCased: 'No item | Item | Items({count})',
			countPascalCased: 'No Item | Item | Items({count})',
		} as IVariation,
		configuration: {
			text: 'configuration | configurations',
			Text: 'Configuration | Configurations',
			textCammelCased: 'Configuration | Configurations',
			textPascalCased: 'Configuration | Configurations',
			count: 'no configuration | configuration | configurations({count})',
			Count: 'No configuration | Configuration | Configurations({count})',
			countCammelCased: 'No configuration | Configuration | Configurations({count})',
			countPascalCased: 'No Configuration | Configuration | Configurations({count})',
		} as IVariation,
	},
	buttons: {
		logout: 'Logout',
		login: 'Login',
		dropdown: 'Dropdown',
	},
};
