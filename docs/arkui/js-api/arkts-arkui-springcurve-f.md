# springCurve

## Modules to Import

```TypeScript
import { curves } from '@kit.ArkUI';
```

## springCurve

```TypeScript
function springCurve(velocity: number, mass: number, stiffness: number, damping: number): ICurve
```

Creates a spring curve. The curve shape is subject to the spring parameters, and the animation duration is subject to the **duration** parameter in **animation** and **animateTo**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| velocity | number | Yes | Initial velocity. It is applied by external factors to the spring animation,designed to help ensure the smooth transition from the previous motion state. The velocity is the normalizedvelocity, and its value is equal to the actual velocity at the beginning of the animation divided by theanimation attribute change value.Value range: (-∞, +∞). |
| mass | number | Yes | Mass, which influences the inertia in the spring system. The greater the mass,the greater the amplitude of the oscillation, and the slower the speed of restoring to the equilibriumposition.Value range: (0, +∞).&lt;p&gt;**NOTE**:<br>If this parameter is set to a value less than or equal to 0, the value 1 is used.&lt;/p&gt; |
| stiffness | number | Yes | Stiffness.It is the degree to which an object deforms by resisting the forceapplied. In an elastic system, the greater the stiffness, the stronger the ability to resist deformation,and the faster the speed of restoring to the equilibrium position.Value range: (0, +∞).&lt;p&gt;**NOTE**:<br>If this parameter is set to a value less than or equal to 0, the value 1 is used.&lt;/p&gt; |
| damping | number | Yes | -Damping. It is used to describe the oscillation and attenuation of the system |

**Return value:**

| Type | Description |
| --- | --- |
| ICurve | Interpolation curve. |

**Example**

```TypeScript
import { curves } from '@kit.ArkUI';
curves.springCurve(10, 1, 228, 30) // Create a spring curve.

```

