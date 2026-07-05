# RepeatItemBuilder

```TypeScript
declare type RepeatItemBuilder<T> = (repeatItem: RepeatItem<T>) => void
```

组件生成函数类型。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| repeatItem | RepeatItem&lt;T> | Yes | 将item和index结合到一起的一个状态变量。 缺省时默认忽略该参数，请勿在闭包函数的实现中使用该参数，否则会编译报错。 |

