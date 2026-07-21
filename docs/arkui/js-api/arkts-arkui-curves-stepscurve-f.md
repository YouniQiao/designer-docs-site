# stepsCurve

## Modules to Import

```TypeScript
import { curves } from '@kit.ArkUI';
```

<a id="stepscurve"></a>
## stepsCurve

```TypeScript
function stepsCurve(count: number, end: boolean): ICurve
```

Creates a step curve.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-curves-function stepsCurve(count: number, end: boolean): ICurve--><!--Device-curves-function stepsCurve(count: number, end: boolean): ICurve-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| count | number | Yes | Number of steps. The value must be a positive integer.<br>Value range:[1, +∞)<br>**NOTE**<br>A value less than 1 evaluates to the value **1**. |
| end | boolean | Yes | Whether the step change occurs at the start or end of each interval.<br>- **true**: The step change occurs at the end of each interval.<br>- **false**: The step change occurs at the start of each interval. |

**Return value:**

| Type | Description |
| --- | --- |
| [ICurve](../arkts-components/arkts-arkui-icurve-i.md) | Interpolation curve. |

**Example**

```TypeScript
import { curves } from '@kit.ArkUI';
curves.stepsCurve(9, true);  // Create a step curve.

```

