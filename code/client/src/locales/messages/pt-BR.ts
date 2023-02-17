import { IVariation } from '@locales/types';
import { ILocaleMessages } from '@/types/locale/messages';

export const messages: ILocaleMessages = {
	variations: {
		theme: {
			text: 'tema | temas',
			Text: 'Tema | Temas',
			textCammelCased: 'Tema | Temas',
			textPascalCased: 'Tema | Temas',
			count: 'nenhum tema | tema | temas({count})',
			Count: 'Nenhum tema | Tema | Temas({count})',
			countCammelCased: 'Nenhum tema | Tema | Temas({count})',
			countPascalCased: 'Nenhum Tema | Tema | Temas({count})',
		} as IVariation,
		locale: {
			text: 'localidade | localidades',
			Text: 'Localidade | Localidades',
			textCammelCased: 'Localidade | Localidades',
			textPascalCased: 'Localidade | Localidades',
			count: 'nenhuma localidade | localidade | localidades({count})',
			Count: 'Nenhuma localidade | Localidade | Localidades({count})',
			countCammelCased: 'Nenhuma localidade | Localidade | Localidades({count})',
			countPascalCased: 'Nenhuma Localidade | Localidade | Localidades({count})',
		} as IVariation,
		item: {
			text: 'item | itens',
			Text: 'Item | Itens',
			textCammelCased: 'Item | Itens',
			textPascalCased: 'Item | Itens',
			count: 'nenhum item | item | itens({count})',
			Count: 'Nenhum item | Item | Itens({count})',
			countCammelCased: 'Nenhum item | Item | Itens({count})',
			countPascalCased: 'Nenhum Item | Item | Itens({count})',
		} as IVariation,
		configuration: {
			text: 'configuração | configurações',
			Text: 'Configuração | Configurações',
			textCammelCased: 'Configuração | Configurações',
			textPascalCased: 'Configuração | Configurações',
			count: 'nenhuma configuração | configuração | configurações({count})',
			Count: 'Nenhuma configuração | Configuração | Configurações({count})',
			countCammelCased: 'Nenhuma configuração | Configuração | Configurações({count})',
			countPascalCased: 'Nenhuma Configuração | Configuração | Configurações({count})',
		} as IVariation,
	},
	buttons: {
		logout: 'Deslogar',
		login: 'Logar',
		dropdown: 'Dropdown',
	},
};
