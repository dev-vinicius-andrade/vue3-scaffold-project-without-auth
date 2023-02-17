import { RolesEnum } from '@enums/auth/roles';
import { defineStore } from 'pinia';
import { IPermissionDataWrapper } from '@/models/permissions/wrapper';
import { IUser } from '@models/user';
import { Nullable } from '@/types/nullable';
import { useConfigurationsStore } from '@store/configurations';
import { useTypedStorage } from '@composables/useTypedStorage';
const rolesMap = new Map<string, RolesEnum>(Object.values(RolesEnum).map(v => [v.toLowerCase(), v]));
const defaulData: IPermissionDataWrapper = {
	permissions: [RolesEnum.NONE],
};

export const usePermissionsStore = defineStore('PermissionsStore', {
	state: () => ({
		data: useTypedStorage<IPermissionDataWrapper>('permissions', defaulData),
	}),
	actions: {
		set(permissions: Nullable<IPermissionDataWrapper>) {
			this.data.permissions = permissions?.permissions ?? defaulData.permissions;
		},
		async get() {
			return this.data.permissions;
		},
		setPermissions(userData?: Nullable<IUser>): Nullable<RolesEnum[]> {
			if (!userData) return [];
			const configurationsStore = useConfigurationsStore();
			const rolesNamespace = configurationsStore?.data?.authentication?.rolesNamespace || import.meta.env.VITE_APP_AUTH_ROLES_NAMESPACE;
			const roles = (userData[`${rolesNamespace}/roles`] as Nullable<string[]>) ?? [];
			const permissions = roles.map(role => this.getRole(role)).filter(role => !!role) as RolesEnum[];
			return permissions;
		},
		getRole(role?: string): Nullable<RolesEnum> {
			if (!role) return null;
			try {
				return rolesMap.get(role.toLowerCase()) ?? null;
			} catch (error) {
				console.error(error);
				return null;
			}
		},
	},
});
