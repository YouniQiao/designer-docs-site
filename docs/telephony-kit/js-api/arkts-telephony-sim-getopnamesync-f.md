# getOpNameSync

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

## getOpNameSync

```TypeScript
function getOpNameSync(slotId: number): string
```

Obtains the operator name of the SIM card in a specified slot.

**Since:** 10

<!--Device-sim-function getOpNameSync(slotId: int): string--><!--Device-sim-function getOpNameSync(slotId: int): string-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the operator name; returns an empty string if no SIM card is inserted or no operator name is matched. |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let data: string = sim.getOpNameSync(0);
console.info(`getOpName success, promise: data->${JSON.stringify(data)}`);

```

