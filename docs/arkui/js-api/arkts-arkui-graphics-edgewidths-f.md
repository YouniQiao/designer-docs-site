# edgeWidths

## edgeWidths

```TypeScript
export function edgeWidths(all: number): Edges<number>
```

Generates an **edgeWidths** object with the specified edge width for all edges.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-unnamed-export function edgeWidths(all: number): Edges<number>--><!--Device-unnamed-export function edgeWidths(all: number): Edges<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| all | number | Yes | Edge width, in vp.<br>Value range: [0, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| [Edges](arkts-arkui-graphics-edges-i.md)<number> | **edgeWidths** object whose edge widths are all at the specified value. |

