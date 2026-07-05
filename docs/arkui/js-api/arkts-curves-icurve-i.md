# ICurve

曲线对象，支持通过本模块中的[curves.cubicBezierCurve]curves.cubicBezierCurve、 [curves.interpolatingSpring]curves.interpolatingSpring等方法创建不同类型的曲线对象，并可通过曲线对象调用其 [interpolate]curves.ICurve.interpolate的成员方法。

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { curves } from '@kit.ArkUI';
```

## interpolate

```TypeScript
interpolate(fraction : number) : number
```

插值曲线的插值计算函数，可以通过传入的归一化时间参数返回当前的插值

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fraction | number | Yes | 当前的归一化时间参数。 取值范围：[0,1] 说明： 设置的值小于0时，按0处理；设置的值大于1时，按1处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回归一化time时间点对应的曲线插值。 |

**Example**

```TypeScript
import { curves } from '@kit.ArkUI'
let curveValue = curves.initCurve(Curve.EaseIn) // Create an ease-in curve.
let value: number = curveValue.interpolate(0.5) // Calculate the interpolation for half of the time.

```

