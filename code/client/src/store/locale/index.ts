import { defineStore } from 'pinia';
import type { ILocale } from '@/types/locale';
import { useTypedStorage } from '@composables/useTypedStorage';
export interface ILocaleStoreData {
	currentLocale: ILocale;
	availableLocales: ILocale[];
}
const defaultData: ILocaleStoreData = {
	currentLocale: { locale: 'en-US', text: { key: 'locales.en-US' } },
	availableLocales: [
		{ locale: 'en-US', text: { key: 'locales.en-US' } },
		{ locale: 'pt-BR', text: { key: 'locales.pt-BR' } },
	],
};

export const useLocaleStore = defineStore('LocaleStore', {
	state: () => ({
		data: useTypedStorage<ILocaleStoreData>('locale', defaultData),
	}),
	actions: {
		set(locale: ILocale) {
			this.data.currentLocale = locale;
		},
		getOrDefault(locale?: string): ILocale {
			if (!locale) return defaultData.currentLocale;
			const foundLocale = this.data.availableLocales.find(l => l.locale === locale);
			if (!foundLocale) return defaultData.currentLocale;
			return foundLocale;
		},
	},
});
