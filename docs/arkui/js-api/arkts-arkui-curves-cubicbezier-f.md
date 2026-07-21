# cubicBezier

## Modules to Import

```TypeScript
import { curves } from '@kit.ArkUI';
```

<a id="cubicbezier"></a>
## cubicBezier

```TypeScript
function cubicBezier(x1: number, y1: number, x2: number, y2: number): string
```

Creates a cubic Bézier curve. The curve values must be between 0 and 1.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [cubicBezierCurve](arkts-arkui-curves-cubicbeziercurve-f.md#cubicbeziercurve-1)

<!--Device-curves-function cubicBezier(x1: number, y1: number, x2: number, y2: number): string--><!--Device-curves-function cubicBezier(x1: number, y1: number, x2: number, y2: number): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x1 | number | Yes | -Value range [0, 1]. |
| y1 | number | Yes | -Value range (-∞, +∞). |
| x2 | number | Yes | -Value range [0, 1]. |
| y2 | number | Yes | -Value range (-∞, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| string | Cubic Bézier curve object. |

