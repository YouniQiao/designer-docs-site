# CaretOffsetsCallback

```TypeScript
type CaretOffsetsCallback = (offset: double, index: int, leadingEdge: boolean) => boolean
```

将文本行中每个字符的偏移量和索引值作为参数的回调方法。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | double | Yes | Offset of each character in a text line. The value is a floating point number. |
| index | int | Yes | Index of each character in a text line. The value is an integer. |
| leadingEdge | boolean | Yes | Whether the cursor is located at the front of the character. The value true means  that the cursor is located at the front of the character, that is, the offset does not contain the character  width. The value false means that the cursor is located at the rear of the character, that is, the offset  contains the character width. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 表示是否停止调用该回调函数，true表示停止调用该回调函数，false表示继续调用该回调函数。 |

