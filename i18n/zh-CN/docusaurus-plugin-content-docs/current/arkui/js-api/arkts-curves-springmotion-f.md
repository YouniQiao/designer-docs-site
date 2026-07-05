# springMotion

## springMotion

```TypeScript
function springMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve
```

构造弹性动画曲线对象。如果对同一对象的同一属性进行多个弹性动画，每个动画会替换掉前一个动画，并继承之前的速度。

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
| ICurve | 曲线对象。  说明:  弹性动画曲线为物理曲线，[animation]common、[animateTo]common、[pageTransition]page_transition中的  duration参数不生效，动画持续时间取决于springMotion动画曲线参数和之前的速度。时间不能归一，故不能通过该曲线的[interpolate]curves.ICurve.interpolate函  数获得插值。 |

**示例：**

```TypeScript
import { curves } from '@kit.ArkUI'
curves.springMotion() // 创建一个默认弹性动画曲线
curves.springMotion(0.5) // 创建指定response、其余参数默认的弹性动画曲线
curves.springMotion(0.5, 0.6) // 创建指定response和dampingFraction、其余参数默认的弹性动画曲线
curves.springMotion(0.5, 0.6, 0) // 创建三个参数均自定义的弹性动画曲线

```

