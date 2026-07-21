# getPowerMode

## Modules to Import

```TypeScript
import { power } from '@kit.BasicServicesKit';
```

<a id="getpowermode"></a>
## getPowerMode

```TypeScript
function getPowerMode(): DevicePowerMode
```

Obtains the power mode of this device.

**Since:** 9

<!--Device-power-function getPowerMode(): DevicePowerMode--><!--Device-power-function getPowerMode(): DevicePowerMode-End-->

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| [DevicePowerMode](arkts-basicservices-power-devicepowermode-e.md) | Power mode. |

**Example**

```TypeScript
let mode = power.getPowerMode();
console.info('power mode: ' + mode);

```

