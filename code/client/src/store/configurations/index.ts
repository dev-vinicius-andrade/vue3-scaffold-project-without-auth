import axios from 'axios';
import { defineStore } from 'pinia';
import { IConfigurationWrapper } from '@models/configurations/wrapper';
import { useTypedStorage } from '@composables/useTypedStorage';
const defaultData: IConfigurationWrapper = {
	site: {
		name: 'Default Site Name',
		title: 'Default Site Title',
		description: 'Default Site Description',
		company: 'Default Site Company',
		social: {
			// facebook: 'https://facebook.com',
			instagram: 'https://instagram.com',
			youtube: 'https://youtube.com',
			linkedin: 'https://linkedin.com',
		},
	},
	authentication: null,
};
export const useConfigurationsStore = defineStore('ConfigurationsStore', {
	state: () => ({
		data: useTypedStorage<IConfigurationWrapper>('configurations', defaultData),
	}),
	actions: {
		set(configurations: IConfigurationWrapper) {
			this.data = configurations;
		},
		async get(fromCache: boolean = true): Promise<IConfigurationWrapper> {
			if (fromCache && this.data) return this.data;
			const response = await axios.get('/configurations');
			this.set(response.status !== 200 ? null : response.data);
			return this.data;
		},
	},
});
