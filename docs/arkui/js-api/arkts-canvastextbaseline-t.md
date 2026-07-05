# CanvasTextBaseline

```TypeScript
declare type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top"
```

定义文本基线类型。取值类型为下表类型中的并集。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| "alphabetic" | 文本基线是标准的字母基线。 |
| "bottom" | 文本基线在文本块的底部。与ideographic基线的区别在于ideographic基线不需要考虑下行字母。 |
| "hanging" | 文本基线是悬挂基线。 |
| "ideographic" | 文字基线是表意字基线；如果字符本身超出了alphabetic基线，  那么ideographic基线位置在字符本身的底部。 |
| "middle" | 文本基线在文本块的中间。 |
| "top" | 文本基线在文本块的顶部。 |

