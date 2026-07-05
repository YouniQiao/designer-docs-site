# stepsCurve

## stepsCurve

```TypeScript
function stepsCurve(count: number, end: boolean): ICurve
```

构造阶梯曲线对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| count | number | Yes | 阶梯的数量，需要为正整数。 取值范围：[1, +∞) 说明： 设置小于1的值时，按值为1处理。 |
| end | boolean | Yes | 在每个间隔的起点或终点发生阶跃变化。 -true：在终点发生阶跃变化。 -false：在起点发生阶跃变化。 |

**Return value:**

| Type | Description |
| --- | --- |
| ICurve | 曲线的插值对象。 |

**Example**

```TypeScript
import { curves } from '@kit.ArkUI';
curves.stepsCurve(9, true)  // Create a step curve.

```

