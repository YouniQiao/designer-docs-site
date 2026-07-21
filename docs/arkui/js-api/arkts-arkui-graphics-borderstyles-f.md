# borderStyles

<a id="borderstyles"></a>
## borderStyles

```TypeScript
export function borderStyles(all: BorderStyle): Edges<BorderStyle>
```

Generates a border style object with the specified border style color for all borders.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-unnamed-export function borderStyles(all: BorderStyle): Edges<BorderStyle>--><!--Device-unnamed-export function borderStyles(all: BorderStyle): Edges<BorderStyle>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| all | [BorderStyle](arkts-arkui-borderstyle-e.md) | Yes | Border style. |

**Return value:**

| Type | Description |
| --- | --- |
| [Edges](arkts-arkui-graphics-edges-i.md)&lt;BorderStyle&gt; | **borderStyles** object whose borders are all in the specified style. |

