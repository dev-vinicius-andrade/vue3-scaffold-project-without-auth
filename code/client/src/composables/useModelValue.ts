import { Events } from '@enums/events';
import { Nullable } from '@/types/nullable';
import { WritableComputedRef } from 'vue';
import { IModelValueComponentProperties } from '@/types/component/properties';
import type {
	ModelValueType,
	SynchronousSetValidatorFunction,
	AsynchronousSetValidatorFunction,
	ModelValueSynchronousEmitter,
	ModelValueAsynchronousEmitter,
} from '@/types/modelValue';
export function useSynchronousModelValue<T>(
	componentProperties: IModelValueComponentProperties<T>,
	emits: ModelValueSynchronousEmitter<T>,
	setValidator?: SynchronousSetValidatorFunction<T>,
): WritableComputedRef<T | Nullable<T>> {
	const reactiveModel = computed({
		get: () => componentProperties.modelValue,
		set: (value?: ModelValueType<T>) => synchronousSetter(emits, value, setValidator),
	});
	return reactiveModel;
}
export function useAsynchronousModelValue<T>(
	componentProperties: IModelValueComponentProperties<T>,
	emits: ModelValueAsynchronousEmitter<T>,
	setValidator?: AsynchronousSetValidatorFunction<T>,
): WritableComputedRef<ModelValueType<T>> {
	const reactiveModel = computed({
		get: () => componentProperties.modelValue,
		set: async (value?: ModelValueType<T>) => asynchronousSetter(emits, value, setValidator),
	});
	return reactiveModel;
}
export function synchronousSetter<T>(
	emits: ModelValueSynchronousEmitter<T>,
	value?: ModelValueType<T>,
	setValidator?: SynchronousSetValidatorFunction<T>,
) {
	if (!setValidator || typeof setValidator !== 'function') return handleSynchronousEmit<T>(emits, value);
	if (!setValidator(value)) return;

	return handleSynchronousEmit<T>(emits, value);
}
export async function asynchronousSetter<T>(
	emits: ModelValueAsynchronousEmitter<T>,
	value?: ModelValueType<T>,

	setValidator?: AsynchronousSetValidatorFunction<T>,
): Promise<void> {
	if (!setValidator || typeof setValidator !== 'function') return handleAsynchronousEmit<T>(emits, value);
	if (!setValidator(value)) return;
	return handleAsynchronousEmit<T>(emits, value);
}

export function handleSynchronousEmit<T>(emits: ModelValueSynchronousEmitter<T>, value?: ModelValueType<T>) {
	if (!emits) throw new Error('emits is not defined');
	emits(Events.onModelValueUpdate, value);
}
export function handleAsynchronousEmit<T>(emits: ModelValueAsynchronousEmitter<T>, value?: ModelValueType<T>) {
	if (!emits) throw new Error('emits is not defined');
	emits(Events.onModelValueUpdate, value);
}
