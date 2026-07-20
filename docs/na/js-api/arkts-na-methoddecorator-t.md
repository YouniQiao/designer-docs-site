# MethodDecorator

```TypeScript
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void
```

<!--Device-unnamed-declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void--><!--Device-unnamed-declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | Object | Yes |  |
| propertyKey | string \| symbol | Yes |  |
| descriptor | TypedPropertyDescriptor&lt;T&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| TypedPropertyDescriptor&lt;T&gt; \| void | - |

