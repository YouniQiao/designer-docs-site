# CaretOffsetsCallback

```TypeScript
type CaretOffsetsCallback = (offset: number, index: number, leadingEdge: boolean) => boolean
```

Defines the callback used to receive the offset and index of each character in a text line object as its
parameters.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | double | Yes | Offset of each character in a text line. The value is a floating point number. |
| index | int | Yes | Index of each character in a text line. The value is an integer. |
| leadingEdge | boolean | Yes | Whether the cursor is located at the front of the character. The value true meansthat the cursor is located at the front of the character, that is, the offset does not contain the characterwidth. The value false means that the cursor is located at the rear of the character, that is, the offsetcontains the character width. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether to stop calling the callback. The value **true** means to stop calling the callback,and **false** means to continue calling the callback. |

