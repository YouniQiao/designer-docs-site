# customCurve

## customCurve

```TypeScript
function customCurve(interpolate: (fraction: number) => number): ICurve
```

构造自定义曲线对象。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| interpolate | (fraction: number) => number | Yes | 用户自定义的插值回调函数。 fraction为动画开始时的插值输入x值。取值范围：[0,1] 返回值为曲线的y值。取值范围：[0,1]  说明： fraction等于0时，返回值为0对应动画起点，返回不为0，动画在起点处有跳变效果。 fraction等于1时，返回值为1对应动画终点，返回值不为1将导致动画的终值不是状态变量的值，出现  大于或者小于状态变量值，再跳变到状态变量值的效果。 |

**Return value:**

| Type | Description |
| --- | --- |
| ICurve | 曲线的插值对象。 |

**Example**

```TypeScript
import { curves } from '@kit.ArkUI'
let interpolate = (fraction:number):number => {
  return Math.sqrt(fraction)
}
let curve = curves.customCurve(interpolate) // Create a custom interpolation curve.

```

