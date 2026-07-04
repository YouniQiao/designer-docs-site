# getSimLabelSync

## Modules to Import

```TypeScript
import { sim } from '@ohos.telephony.sim';
```

## getSimLabelSync

```TypeScript
function getSimLabelSync(slotId: number): SimLabel
```

Obtains the SIM card label synchronously.

**Since:** 20

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | SIM card slot ID, which ranges from 0 to the maximum number of slots supported |

**Return value:**

| Type | Description |
| --- | --- |
| SimLabel | SIM card label. |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';


let simLabel: sim.SimLabel = sim.getSimLabelSync(0);
console.info(`The sim state is:` + simLabel);

```

