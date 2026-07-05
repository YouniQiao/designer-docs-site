# cubicBezierCurve

## cubicBezierCurve

```TypeScript
function cubicBezierCurve(x1: number, y1: number, x2: number, y2: number): ICurve
```

构造三阶贝塞尔曲线对象，确保曲线的值在0到1之间。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x1 | number | Yes | 确定贝塞尔曲线第一点横坐标。 取值范围：[0, 1] 说明： 设置的值小于0时，按0处理；设置的值大于1时，按1处理。 |
| y1 | number | Yes | 确定贝塞尔曲线第一点纵坐标。 取值范围：(-∞, +∞) |
| x2 | number | Yes | 确定贝塞尔曲线第二点横坐标。 取值范围：[0, 1] 说明： 设置的值小于0时，按0处理；设置的值大于1时，按1处理。 |
| y2 | number | Yes | 确定贝塞尔曲线第二点纵坐标。 取值范围：(-∞, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| ICurve | 曲线的插值对象。 |

**Example**

```TypeScript
import { curves } from '@kit.ArkUI';
curves.cubicBezierCurve(0.1, 0.0, 0.1, 1.0) // Create a cubic Bézier curve.

```

