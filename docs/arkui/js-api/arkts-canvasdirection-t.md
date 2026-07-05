# CanvasDirection

```TypeScript
declare type CanvasDirection = "inherit" | "ltr" | "rtl"
```

定义当前文本方向的类型。取值类型为下表类型中的并集。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| "inherit" | 继承canvas组件通用属性已设定的文本方向，若canvas组件未设置direction属性，则跟随系统文字方向。 |
| "ltr" | 从左往右。 |
| "rtl" | 从右往左。 |

