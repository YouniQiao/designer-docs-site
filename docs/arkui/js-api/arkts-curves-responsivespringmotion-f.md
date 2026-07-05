# responsiveSpringMotion

## responsiveSpringMotion

```TypeScript
function responsiveSpringMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve
```

构造弹性跟手动画曲线对象，是[springMotion]curves.springMotion的一种特例，仅默认参数不同，可与springMotion混合使用。

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
| ICurve | 曲线对象。  说明:  1、弹性跟手动画曲线为springMotion的一种特例，仅默认值不同。如果使用自定义参数的弹性曲线，推荐使用springMotion构造曲线；如果使用跟手动画，推荐使用默认参数的弹性跟手动画曲线。  2、[animation]common、[animateTo]common、[pageTransition]page_transition中的duration参数不生效，动画持  续时间取决于responsiveSpringMotion动画曲线参数和之前的速度，也不能通过该曲线的[interpolate]curves.ICurve.interpolate函数获得插值。 |

**Example**

```TypeScript
import { curves } from '@kit.ArkUI'
curves.responsiveSpringMotion() // Create a responsive spring animation curve with default settings.

```

