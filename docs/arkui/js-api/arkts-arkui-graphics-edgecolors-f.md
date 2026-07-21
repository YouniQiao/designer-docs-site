# edgeColors

<a id="edgecolors"></a>
## edgeColors

```TypeScript
export function edgeColors(all: number): Edges<number>
```

Generates an **edgeColors** object with the specified edge color for all edges.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-unnamed-export function edgeColors(all: number): Edges<number>--><!--Device-unnamed-export function edgeColors(all: number): Edges<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| all | number | Yes | Edge color, in ARGB format, for example, **0xffff00ff**.<br>Value range: [0, 0xffffffff] |

**Return value:**

| Type | Description |
| --- | --- |
| [Edges](arkts-arkui-graphics-edges-i.md)&lt;number&gt; | **edgeColors** object whose edge colors are all at the specified value. |

