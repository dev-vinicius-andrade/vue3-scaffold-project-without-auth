import { IComponentExtendedProperties } from '@/types/component/properties';
import { IComponentExtendedEmits } from '@/types/component/emits';

export interface IPropertiesBinder<T> extends IComponentExtendedProperties<T> {}
export interface IEmitsBinder<T> extends IComponentExtendedEmits<T> {}
export interface IPropertiesEmitsBinder<T> extends IPropertiesBinder<T>, IEmitsBinder<T> {}
