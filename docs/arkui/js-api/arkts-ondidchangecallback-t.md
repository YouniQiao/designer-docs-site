# OnDidChangeCallback

```TypeScript
declare type OnDidChangeCallback = (rangeBefore: TextRange, rangeAfter: TextRange) => void
```

文本变换后回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rangeBefore | TextRange | Yes | 文本变化前将要被替换的文本范围。 |
| rangeAfter | TextRange | Yes | 文本变化后新增内容的文本范围。 |

