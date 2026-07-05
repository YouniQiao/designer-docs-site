# TemplateTypedFunc

```TypeScript
declare type TemplateTypedFunc<T> = (item: T, index: number) => string
```

渲染模版类型字符串获取函数类型。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| item | T | Yes | arr中每一个数据项。T为开发者传入的数据类型。 缺省时默认忽略该参数，请勿在闭包函数的实现中使用该参数，否则会编译报错。 |
| index | number | Yes | 当前数据项对应的索引。 缺省时默认忽略该参数，请勿在闭包函数的实现中使用该参数，否则会编译报错。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | template type. |

