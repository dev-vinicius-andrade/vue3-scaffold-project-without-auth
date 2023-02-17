export declare type ExtractComponentEmits<TComponent> = TComponent extends new () => { $emits: infer P } ? P : never;
