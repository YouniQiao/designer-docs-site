# interpolatingSpring

## interpolatingSpring

```TypeScript
function interpolatingSpring(velocity: number, mass: number, stiffness: number, damping: number): ICurve
```

构造插值器弹簧曲线对象，生成一条从0到1的动画曲线，实际动画值根据曲线进行插值计算。动画时间由曲线参数决定，不受animation、animateTo中的duration参数控制。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| velocity | number | Yes | Initial velocity. It is applied by external factors to the spring animation,  designed to help ensure the smooth transition from the previous motion state.  The velocity is the normalized velocity, and its value is equal to the actual velocity at the beginning of  the animation divided by the animation attribute change value. Value range: (-∞, +∞). |
| mass | number | Yes | Mass, which influences the inertia in the spring system. The greater the mass,  the greater the amplitude of the oscillation, and the slower the speed of restoring to the equilibrium  position.  Value range: (0, +∞).  NOTE:  If this parameter is set to a value less than or equal to 0, the value 1 is used. |
| stiffness | number | Yes | Stiffness. It is the degree to which an object deforms by resisting  the force applied. In an elastic system, the greater the stiffness, the stronger the ability to resist  deformation, and the faster the speed of restoring to the equilibrium position. Value range: (0, +∞).  NOTE:  If this parameter is set to a value less than or equal to 0, the value 1 is used. |
| damping | number | Yes | Damping. It is used to describe the oscillation and attenuation of the system  after being disturbed. The larger the damping, the smaller the number of oscillations of elastic motion,  and the smaller the oscillation amplitude. Value range: (0, +∞)  NOTE:  If this parameter is set to a value less than or equal to 0, the value 1 is used. |

**Return value:**

| Type | Description |
| --- | --- |
| ICurve | 曲线对象。  说明: 弹性动画曲线为物理曲线，[animation]common、[animateTo]common、[pageTransition]page_transition中  的duration参数不生效，动画持续时间取决于interpolatingSpring动画曲线参数。时间不能归一，故不能通过该曲线的  [interpolate]curves.ICurve.interpolate函数获得插值。 |

**Example**

```TypeScript
import { curves } from '@kit.ArkUI'
curves.interpolatingSpring(10, 1, 228, 30) // Create an interpolating spring curve whose duration is subject to spring parameters.

```

