export declare type ExtractComponentProperties<TComponent> = TComponent extends new () => { $props: infer P }
	? P
	: never;
