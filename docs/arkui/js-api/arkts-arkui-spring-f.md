# spring

## Modules to Import

```TypeScript
import { curves } from '@ohos.curves';
```

## spring

```TypeScript
function spring(velocity: number, mass: number, stiffness: number, damping: number): string
```

Constructs a spring curve object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [springCurve](arkts-arkui-springcurve-f.md#springcurve-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| velocity | number | Yes | Initial velocity. It is applied by external factors to the spring animation, designedto help ensure the smooth transition from the previous motion state. |
| mass | number | Yes | Mass, which influences the inertia in the spring system. The greater the mass, the greaterthe amplitude of the oscillation, and the slower the speed of restoring to the equilibrium position. |
| stiffness | number | Yes | Stiffness. It is the degree to which an object deforms by resisting the forceapplied. In an elastic system, the greater the stiffness, the stronger the ability to resist deformation, andthe faster the speed of restoring to the equilibrium position. |
| damping | number | Yes | Damping. It is a pure number and has no real physical meaning. It is used to describethe oscillation and attenuation of the system after being disturbed. The larger the damping, the smaller thenumber of oscillations of elastic motion, and the smaller the oscillation amplitude. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Spring curve object. |

