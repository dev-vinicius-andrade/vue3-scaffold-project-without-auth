import { Nullable } from '@/types/nullable';
import type { ExtractComponentProperties } from '@/types/component/properties/extract';
export interface IComponentExtendedProperties<T> {
	properties?: ExtractComponentProperties<T>;
}
export interface IComponentProperties {
	[key: string]: unknown;
}
export interface IModelValueComponentProperties<T> extends IComponentProperties {
	modelValue?: T | Nullable<T>;
}
