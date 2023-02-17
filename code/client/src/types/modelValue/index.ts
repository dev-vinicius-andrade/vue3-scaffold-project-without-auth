import { Events } from '@enums/events';
import { Nullable } from '@/types/nullable';
export declare type ModelValueType<T> = T | Nullable<T>;
export declare type SynchronousSetValidatorFunction<T> = (newValue: ModelValueType<T>) => boolean;
export declare type AsynchronousSetValidatorFunction<T> = (newValue: ModelValueType<T>) => Promise<boolean>;
export declare type ModelValueSynchronousEmitter<T> = (
	event: Events.onModelValueUpdate,
	modelValue?: ModelValueType<T>,
) => void;
export declare type ModelValueAsynchronousEmitter<T> = (
	event: Events.onModelValueUpdate,
	modelValue?: ModelValueType<T>,
) => Promise<void>;
