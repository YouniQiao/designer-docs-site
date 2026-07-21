# ColorFilter

Defines the ColorFilter object.

**Since:** 11

<!--Device-unnamed-declare class ColorFilter--><!--Device-unnamed-declare class ColorFilter-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(value: number[])
```

Creates ColorFilter with 4*5 matrix.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-ColorFilter-constructor(value: number[])--><!--Device-ColorFilter-constructor(value: number[])-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number[] | Yes | 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first. |

