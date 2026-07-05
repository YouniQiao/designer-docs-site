# getMaxSimCount

## getMaxSimCount

```TypeScript
function getMaxSimCount(): int
```

Obtains the maximum number of SIM cards that can be used simultaneously on the device, that is, the maximum number of SIM card slots.

**Since:** 7

**System capability:** SystemCapability.Telephony.CoreService

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns the maximum number of SIM card slots. |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';

console.info("Result: "+ sim.getMaxSimCount());

```

