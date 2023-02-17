import { getFileName } from '@/helpers';
import { createI18n } from 'vue-i18n';
import _merge from 'lodash/merge';
import _set from 'lodash/set';
const localeFiles = import.meta.glob<{ messages: any }>('@locales/messages/**/*.ts', { eager: true });
let messages = {};
Object.entries(localeFiles).forEach(([key, value]) => {
	const localeFromFileName = getFileName(key);
	messages = _merge(messages, _set({}, localeFromFileName, value.messages));
});
const i18n = createI18n({
	legacy: false,
	locale: 'en-US',
	fallbackLocale: 'en-US',
	messages,
	fallbackWarn: process.env.NODE_ENV === 'production' ? false : true,
	missingWarn: process.env.NODE_ENV === 'production' ? false : true,
});
export default i18n;
