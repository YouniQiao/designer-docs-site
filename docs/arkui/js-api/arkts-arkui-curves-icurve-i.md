# ICurve

Represents a curve object. Different types of curve objects can be created using APIs in this module, including [curves.cubicBezierCurve](arkts-arkui-curves-cubicbeziercurve-f.md#cubicbeziercurve-1) and [curves.interpolatingSpring](arkts-arkui-curves-interpolatingspring-f.md#interpolatingspring-1). The curve object provides interpolation functionality through its member method [interpolate](arkts-arkui-curves-icurve-i.md#interpolate-1).

**Since:** 9

<!--Device-curves-interface ICurve--><!--Device-curves-interface ICurve-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { curves } from '@kit.ArkUI';
```

## interpolate

```TypeScript
interpolate(fraction : number) : number
```

Calculates the interpolated value along the curve at the specified normalized time point.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ICurve-interpolate(fraction : number) : number--><!--Device-ICurve-interpolate(fraction : number) : number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fraction | number | Yes | Current normalized time.<br>Value range: [0, 1].<br>**NOTE**<br>A value less than 0is treated as **0**. A value greater than 1 is treated as **1**. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Curve interpolation corresponding to the normalized time point. |

**Example**

```TypeScript
import { curves } from '@kit.ArkUI'
let curveValue = curves.initCurve(Curve.EaseIn); // Create an ease-in curve.
let interpolatedValue: number = curveValue.interpolate(0.5); // Calculate the interpolation for half of the time.

```

