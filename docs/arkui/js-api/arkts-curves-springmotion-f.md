# springMotion

## springMotion

```TypeScript
function springMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve
```

构造弹性动画曲线对象。如果对同一对象的同一属性进行多个弹性动画，每个动画会替换掉前一个动画，并继承之前的速度。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | number | No |  |
| dampingFraction | number | No |  |
| overlapDuration | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ICurve | 曲线对象。  说明:  弹性动画曲线为物理曲线，[animation]common、[animateTo]common、[pageTransition]page_transition中的  duration参数不生效，动画持续时间取决于springMotion动画曲线参数和之前的速度。时间不能归一，故不能通过该曲线的[interpolate]curves.ICurve.interpolate函  数获得插值。 |

**Example**

```TypeScript
import { curves } from '@kit.ArkUI'
curves.springMotion() // Create a spring animation curve with default settings.
curves.springMotion(0.5) // Create a spring animation curve with the specified response value.
curves.springMotion(0.5, 0.6) // Create a spring animation curve with the specified response and dampingFraction values.
curves.springMotion(0.5, 0.6, 0) // Create a spring animation curve with the specified parameter values.

```

