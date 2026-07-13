# getSimOperatorNumericSync

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

## getSimOperatorNumericSync

```TypeScript
function getSimOperatorNumericSync(slotId: number): string
```

Obtains the home PLMN number of the SIM card in a specified slot.

<p>The value is recorded in the SIM card and is irrelevant to the network
with which the SIM card is currently registered.

**Since:** 10

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slots supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the PLMN number; returns an empty string if no SIM card is inserted. |

**Example**

```TypeScript
import { sim } from '@kit.TelephonyKit';

let numeric: string = sim.getSimOperatorNumericSync(0);
console.info(`the sim operator numeric is:` + numeric);

```

