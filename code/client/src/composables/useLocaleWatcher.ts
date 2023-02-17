import { ILocale } from '@/types/locale';
import i18n from '@plugins/i18n';
export function useLocaleWatcher() {
	const localeStore = useLocaleStore();

	function switchLocale(newLocale?: ILocale) {
		if (!newLocale) return;
		const { locale } = i18n.global;
		locale.value = newLocale.locale;
		//locale.locale.value = newLocale.locale;
		//locale. = newLocale.locale;
		//i18n.locale.value = newLocale.locale;
	}
	const localeWatcher = watch(
		() => localeStore.data.currentLocale,
		currentLocale => switchLocale(currentLocale),
	);
	switchLocale(localeStore.data.currentLocale);
	return {
		localeWatcher,
		switchLocale,
	};
}
