# getPowerMode

## Modules to Import

```TypeScript
import { power } from '@ohos.power';
```

## getPowerMode

```TypeScript
function getPowerMode(): DevicePowerMode
```

Obtains the power mode of this device.

**Since:** 9

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| DevicePowerMode | Power mode. |

**Example**

```TypeScript
let mode = power.getPowerMode();
console.info('power mode: ' + mode);

```

