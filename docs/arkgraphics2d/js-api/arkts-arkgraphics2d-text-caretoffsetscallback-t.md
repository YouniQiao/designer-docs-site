# CaretOffsetsCallback

```TypeScript
type CaretOffsetsCallback = (offset: double, index: int, leadingEdge: boolean) => boolean
```

Defines the callback used to receive the offset and index of each character in a text line object as its parameters.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-text-type CaretOffsetsCallback = (offset: double, index: int, leadingEdge: boolean) => boolean--><!--Device-text-type CaretOffsetsCallback = (offset: double, index: int, leadingEdge: boolean) => boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | Offset of each character in a text line. The value is a floating point number.  |
| index | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Index of each character in a text line. The value is an integer.  |
| leadingEdge | boolean | Yes | Whether the cursor is located at the front of the character. The value true means that the cursor is located at the front of the character, that is, the offset does not contain the character width. The value false means that the cursor is located at the rear of the character, that is, the offset contains the character width.  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether to stop calling the callback. The value **true** means to stop calling the callback, and **false** means to continue calling the callback.  |

