# responsiveSpringMotion

## responsiveSpringMotion

```TypeScript
function responsiveSpringMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve
```

构造弹性跟手动画曲线对象，是[springMotion]curves.springMotion的一种特例，仅默认参数不同，可与springMotion混合使用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| response | number | 否 |  |
| dampingFraction | number | 否 |  |
| overlapDuration | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ICurve | 曲线对象。  说明:  1、弹性跟手动画曲线为springMotion的一种特例，仅默认值不同。如果使用自定义参数的弹性曲线，推荐使用springMotion构造曲线；如果使用跟手动画，推荐使用默认参数的弹性跟手动画曲线。  2、[animation]common、[animateTo]common、[pageTransition]page_transition中的duration参数不生效，动画持  续时间取决于responsiveSpringMotion动画曲线参数和之前的速度，也不能通过该曲线的[interpolate]curves.ICurve.interpolate函数获得插值。 |

**示例：**

```TypeScript
import { curves } from '@kit.ArkUI'
curves.responsiveSpringMotion() // 创建一个默认弹性跟手动画曲线

```

